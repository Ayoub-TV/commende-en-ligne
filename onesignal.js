(function () {
  "use strict";

  var APP_ID = "aaca3777-6401-4f0c-b8dd-3ba5e0ca42b4";

  function getSiteScope() {
    var path = location.pathname;
    var slash = path.lastIndexOf("/");
    return slash >= 0 ? path.slice(0, slash + 1) : "/";
  }

  function buildInitOptions() {
    var scope = getSiteScope();
    var isLocalhost = /^(localhost|127\.0\.0\.1)$/i.test(location.hostname);
    var options = {
      appId: APP_ID,
      notifyButton: { enable: false },
      promptOptions: {
        slidedown: {
          prompts: [{ type: "push", autoPrompt: false }],
        },
      },
    };

    if (isLocalhost) {
      options.allowLocalhostAsSecureOrigin = true;
    }

    if (scope !== "/") {
      options.serviceWorkerPath = scope.replace(/^\//, "") + "OneSignalSDKWorker.js";
      options.serviceWorkerParam = { scope: scope };
    }

    return options;
  }

  function isAppleMobileDevice() {
    var ua = navigator.userAgent || "";
    var isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return isIOS;
  }

  function isStandaloneWebApp() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  }

  function setButtonState(button, state) {
    if (!button) return;

    if (state === "subscribed" || state === "unsupported") {
      button.disabled = true;
      button.classList.add("is-hidden");
      button.setAttribute("aria-hidden", "true");
      return;
    }

    button.disabled = false;
    button.classList.remove("is-hidden");
    button.removeAttribute("aria-hidden");
  }

  function setIosHintVisible(visible) {
    document.querySelectorAll("[data-onesignal-ios-hint]").forEach(function (el) {
      el.classList.toggle("is-hidden", !visible);
      el.setAttribute("aria-hidden", visible ? "false" : "true");
    });
  }

  function bindEnableButtons(api) {
    document.querySelectorAll("[data-onesignal-enable]").forEach(function (button) {
      if (button.dataset.onesignalBound === "true") return;
      button.dataset.onesignalBound = "true";

      button.addEventListener("click", function () {
        api.enable({ source: button });
      });
    });
  }

  async function refreshUi(OneSignal) {
    var buttons = document.querySelectorAll("[data-onesignal-enable]");
    var supported = OneSignal.Notifications.isPushSupported();
    var permission = OneSignal.Notifications.permission;
    var iosNeedsHomeScreen = isAppleMobileDevice() && !isStandaloneWebApp();

    if (permission) {
      buttons.forEach(function (button) {
        setButtonState(button, "subscribed");
      });
      setIosHintVisible(false);
      return;
    }

    if (iosNeedsHomeScreen) {
      buttons.forEach(function (button) {
        setButtonState(button, "ready");
      });
      setIosHintVisible(true);
      return;
    }

    if (!supported) {
      buttons.forEach(function (button) {
        setButtonState(button, "unsupported");
      });
      setIosHintVisible(false);
      return;
    }

    buttons.forEach(function (button) {
      setButtonState(button, "ready");
    });
    setIosHintVisible(false);
  }

  window.OneSignalDeferred = window.OneSignalDeferred || [];
  window.OneSignalDeferred.push(async function (OneSignal) {
    await OneSignal.init(buildInitOptions());

    var api = {
      appId: APP_ID,
      isSupported: function () {
        return OneSignal.Notifications.isPushSupported();
      },
      hasPermission: function () {
        return OneSignal.Notifications.permission;
      },
      enable: async function (options) {
        options = options || {};

        if (OneSignal.Notifications.permission) {
          await refreshUi(OneSignal);
          return { ok: true, reason: "already-subscribed" };
        }

        if (isAppleMobileDevice() && !isStandaloneWebApp()) {
          setIosHintVisible(true);
          return { ok: false, reason: "ios-home-screen-required" };
        }

        if (!OneSignal.Notifications.isPushSupported()) {
          return { ok: false, reason: "unsupported" };
        }

        await OneSignal.Notifications.requestPermission();
        await refreshUi(OneSignal);

        return {
          ok: OneSignal.Notifications.permission,
          reason: OneSignal.Notifications.permission ? "granted" : "denied",
        };
      },
    };

    window.BrimoOneSignal = api;

    OneSignal.Notifications.addEventListener("permissionChange", function () {
      refreshUi(OneSignal);
    });

    bindEnableButtons(api);
    await refreshUi(OneSignal);

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) refreshUi(OneSignal);
    });
  });
})();
