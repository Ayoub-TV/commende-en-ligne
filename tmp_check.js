
    const uiText = {
      orderNow: "Commandez maintenant",
      categoriesTitle: "Nos catégories",
      backHome: "Accueil",
      back: "Retour",
      closeImage: "Fermer l'image",
      previewFallback: "Voir l'image",
    };

    function t(key) {
      return uiText[key] || key;
    }

    function localized(value) {
      if (!value || typeof value !== "object" || Array.isArray(value)) return value;
      return value.fr || "";
    }

// Images dans ton dossier racine (pas de /assets dans ton projet)
// Donc on n'ajoute pas "assets/" dans les src.
const categoryImages = {
      burgers: "1.jpg",
      poulet: "2.jpg",
      familial: "6.jpg",
      bowls: "7.jpg",
      CheesyFries: "5.jpg",
      poutines: "9.jpg",
      tacos: "4.jpg",
      wraps: "10.jpg",
      kfc: "12.jpg",
      kentucky: "3.jpg",
      fingers: "11.jpg",
      TastyCrousty: "13.jpg",
    };
    // Vérifie qu’aucune catégorie n’est sans image (fallback si besoin)
    for (const cat of Object.keys(categoryImages)) {
      if (!categoryImages[cat]) {
        categoryImages[cat] = "ed83cb67-9870-4c5a-b438-736ded10cdc7.jpg";
      }
    }

    const menuData = {
      burgers: {
        emoji: "🍔",
        title: { fr: "Burgers", ar: "برغر" },
        subtitle: { fr: "Poulet frit & burger smash", ar: "دجاج مقلي وبرغر سماش" },
        items: [
          {
            name: "Chicken Burger",
            price: "45 DH",
            desc: { fr: "Big Buns, Tenders, Fromage Cheddar, Laitue, Sauce Magic, Oignon", ar: "خبز كبير، تندرز، جبنة شيدر، خس، صوص ماجيك، بصل" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Chicken Burger.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "Biggest",
            price: "60 DH",
            desc: { fr: "Big Buns, Double Tenders, Fromage Cheddar, Laitue, Sauce Oignon", ar: "خبز كبير، دبل تندرز، جبنة شيدر، خس، صوص البصل" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Biggest.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "Rosti Chicken",
            price: "50 DH",
            desc: { fr: "Tenders, laitue, cheddar, galette rosti, sauce.", ar: "تندرز، خس، شيدر، غاليت روستي، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Rosti Chicken.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "American Burger",
            price: "50 DH",
            desc: { fr: "Big buns, steak kefta 100 g, laitue, tomate, fromage cheddar, bacon, sauce Biggy.", ar: "خبز كبير، ستيك كفتة 100غ، خس، طماطم، جبنة شيدر، بايكون، صوص بيغي." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "american burgers.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر"},
          },
          {
            name: "Texas Burger",
            price: "50 DH",
            desc: { fr: "Big buns, steak kefta 100 g, laitue, tomate, fromage cheddar, sauce Biggy.", ar: "خبز كبير، ستيك كفتة 100غ، خس، طماطم، جبنة شيدر، صوص بيغي." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "texas.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "B-Cheese",
            price: "45 DH",
            desc: { fr: "Big buns, steak kefta 100 g, laitue, tomate, fromage cheddar, sauce Biggy.", ar: "خبز كبير، ستيك كفتة 100غ، خس، طماطم، جبنة شيدر، صوص بيغي." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "b-cheese.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "B-Tower",
            price: "70 DH",
            emoji: "🍔",
            desc: { fr: "Double steak (200 g kefta), bacon, oignon caramélisé, champignon, cheddar, laitue, sauce.", ar: "ستيك مزدوج (200غ كفتة)، بايكون، بصل مكرمل، فطر، شيدر، خس، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "B-Tower.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "Hat-trick",
            price: "85 DH",
            emoji: "🍔",
            desc: { fr: "Triple steak (300 g kefta), bacon, oignon caramélisé, champignon, cheddar, laitue, sauce.", ar: "ستيك ثلاثي (300غ كفتة)، بايكون، بصل مكرمل، فطر، شيدر، خس، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Hat-Trick.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
          {
            name: "B-One",
            price: "55 DH",
            emoji: "🍔",
            desc: { fr: "Steak simple (100 g kefta), bacon, oignon caramélisé, champignon, cheddar, laitue, sauce.", ar: "ستيك عادي (100غ كفتة)، بايكون، بصل مكرمل، فطر، شيدر، خس، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "b-one.jpg",
            imageLabel: { fr: "Voir le burger", ar: "عرض البرغر" },
          },
        ],
      },
      bowls: {
        emoji: "🥘",
        title: { fr: "Bols & macaroni au fromage", ar: "أطباق وماكاروني بالجبن" },
        items: [
          {
            name: "Mac' kefta",
            price: "50 DH",
            desc: { fr: "Macaroni, kefta, oignon caramélisé, sauce fromage", ar: "ماكاروني، كفتة، بصل مكرمل، صوص الجبن" },
            imagePreview: "Mac kefta.jpg",
            imageLabel: { fr: "Voir le bol", ar: "عرض الطبق" },
          },
          {
            name: "Chicanos",
            price: "50 DH",
            desc: { fr: "Macaroni, jalapeños, tenders, sauce fromage", ar: "ماكاروني، هالبينو، تندرز، صوص الجبن" },
            imagePreview: "Chicanos.jpg",
            imageLabel: { fr: "Voir le bol", ar: "عرض الطبق" },
          },
        ],
      },
      CheesyFries: {
        emoji: "🥗",
        title: { fr: "Cheesy Fries", ar: "سلطات" },
        subtitle: { fr: "Fraiches et gourmandes", ar: "طازجة وشهية" },
        items: [
          {
            name: { fr: "Cheesy Jalapions", ar: "سلطة الماكروني" },
            price: "35 DH",
            desc: { fr: "Fries, cheese fries, jalapions slices, curry sauce", ar: "ماكاروني، ذرة، جزر مبشور، ملفوف، ديك رومي مدخن، تتبيلة فينيغريت" },
            imagePreview: "Cheesy Jalapions.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
          },
          {
            name: { fr: "Cheesy Bacon", ar: "سلطة الدجاج" },
            price: "35 DH",
            desc: { fr: "Fries, cheese sauce, Beef bacon, BBQ sauce", ar: "خس، طماطم، زيتون، ذرة، جزر مبشور، دجاج كريسبي" },
            imagePreview: "Cheesy Bacon.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
          },
        {
            name: { fr: "Parmesan", ar: "سلطة الدجاج" },
            price: "35 DH",
            desc: { fr: "Fries, cheese Fromage, Parmesan cheese, secret sauce", ar: "خس، طماطم، زيتون، ذرة، جزر مبشور، دجاج كريسبي" },
            imagePreview: "Parmesan.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
        },
        {
             name: { fr: "Box 1", ar: "سلطة الدجاج" },
            price: "70 DH",
            desc: { fr: "1 chicken burger, 1 salade colslow, 1 fries, 1 drumstik, 1 soda", ar: "خس، طماطم، زيتون، ذرة، جزر مبشور، دجاج كريسبي" },
            imagePreview: "Box 1.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
        },
        {
             name: { fr: "Box 2", ar: "سلطة الدجاج" },
            price: "95 DH",
            desc: { fr: "2 chicken, 1 fries, 1 soda", ar: "خس، طماطم، زيتون، ذرة، جزر مبشور، دجاج كريسبي" },
            imagePreview: "Box 2.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
        },
        {
             name: { fr: "Box 3", ar: "سلطة الدجاج" },
            price: "110 DH",
            desc: { fr: "2 chicken burger, tenders, 1 salade colslow, 1 drumstik, 1 soda", ar: "خس، طماطم، زيتون، ذرة، جزر مبشور، دجاج كريسبي" },
            imagePreview: "Box 3.jpg",
            imageLabel: { fr: "Voir la salade", ar: "عرض السلطة" },
        }
        ],
      },
      supplement: {
        emoji: "➕",
        title: { fr: "Suppléments", ar: "إضافات" },
        subtitle: { fr: "Boissons et extras", ar: "مشروبات وإضافات" },
        items: [
          {
            name: "Oasis",
            price: "20 DH",
            desc: { fr: "Canette 33cl", ar: "علبة 33 سم" },
            imagePreview: "Oasis.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: "Pepsi - (33cl) Canette",
            price: "13 DH",
            desc: { fr: "Canette 33cl", ar: "علبة 33 سم" },
            imagePreview: "Soda.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: "Mirinda - Orange (33cl) Canette",
            price: "13 DH",
            desc: { fr: "Canette 33cl", ar: "علبة 33 سم" },
            imagePreview: "matina.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: "7up - (33cl) Canette",
            price: "13 DH",
            desc: { fr: "Canette 33cl", ar: "علبة 33 سم" },
            imagePreview: "7eu.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: { fr: "Frites", ar: "بطاطس مقلية" },
            price: "10 DH",
            desc: { fr: "Portion de frites", ar: "حصة بطاطس مقلية" },
            imagePreview: "Frites.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: { fr: "Potatos", ar: "بطاطس" },
            price: "15 DH",
            desc: { fr: "Portion de pommes de terre", ar: "حصة بطاطس" },
            imagePreview: "Potatos.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: { fr: "Eau (50cl)", ar: "ماء" },
            price: "6 DH",
            desc: { fr: "Bouteille d'eau", ar: "زجاجة ماء" },
            imagePreview: "Eau.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: { fr: "Fromage Cheddar", ar: "جبن" },
            price: "3 DH",
            desc: { fr: "Supplément fromage", ar: "إضافة جبن" },
            imagePreview: "Fromage Cheddar.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
          {
            name: { fr: "Dinde fumée", ar: "ديك رومي مدخن" },
            price: "5 DH",
            desc: { fr: "Supplément de dinde fumée", ar: "إضافة ديك رومي مدخن" },
            imagePreview: "Dinde Fumé.jpg",
            imageLabel: { fr: "Voir le supplément", ar: "عرض الإضافة" },
          },
        ],
      },
      poutines: {
        emoji: "🍟",
        title: { fr: "Poutines (B-POUTINE)", ar: "بوتين (B-POUTINE)" },
        items: [
          {
            name: { fr: "Poutine mixte", ar: "بوتين مشكل" },
            price: "50 DH",
            desc: { fr: "Frites, tenders, dinde fumée, oignon croustillant, sauce.", ar: "بطاطس، تندرز، ديك رومي مدخن، بصل مقرمش، صوص." },
            topping: { fr: "➕ Extra topping (+6 DH) : Doritos, Cheetos, Pringles.", ar: "➕ إضافة اختيارية (+6 دراهم): دوريتوس، شيتوس، برينغلز." },
            imagePreview: "POUTINE-MIX.jpg",
            imageLabel: { fr: "Voir la poutine", ar: "عرض البوتين" },
          },
          {
            name: { fr: "Poutine croustillante", ar: "بوتين مقرمشة" },
            price: "50 DH",
            desc: { fr: "Frites, tenders, oignon croustillant, sauce.", ar: "بطاطس، تندرز، بصل مقرمش، صوص." },
            topping: { fr: "➕ Extra topping (+6 DH) : Doritos, Cheetos, Pringles.", ar: "➕ إضافة اختيارية (+6 دراهم): دوريتوس، شيتوس، برينغلز." },
            imagePreview: "POUTINE-CRISPY .jpg",
            imageLabel: { fr: "Voir la poutine", ar: "عرض البوتين" },
          },
        ],
      },
            TastyCrousty: {
        emoji: "🍗",
        title: { fr: "B-Crousty", ar: "ساندويتشات الدجاج" },
        subtitle: { fr: "Sandwichs au poulet tendre et savoureux", ar: "ساندويتشات دجاج طرية ولذيذة" },
        items: [
          {
            name: "Thaisty",
            price: "50 DH",
            desc: { fr: "Riz basmati, poulet croustillant, sauce secrète, sauce chili thaï, oignons croustillants", ar: "خبز طويل، خس، تندرز، طماطم، جبنة شيدر، صوص البصل." },
            imagePreview: "Thaisty.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
          },
          {
            name: "Curry Cousty",
            price: "50 DH",
            desc: { fr: "Riz basmati, poulet croustillant, sauce secrète, sauce curry, oignons croustillants", ar: "خبز طويل، خس، تندرز، طماطم، ديك رومي مدخن، صوص باربكيو." },
            imagePreview: "Curry Cousty.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
        },
        {
            name: "Citrus Spicy",
            price: "50 DH",
            desc: { fr: "Riz basmati, poulet croustillant, sauce secrète, sauce chili citron, oignons croustillants", ar: "خبز طويل، خس، تندرز، طماطم، ديك رومي مدخن، صوص باربكيو." },
            imagePreview: "Citrus Spic.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
        }
        ],
      },
      tacos: {
        emoji: "🌮",
        title: { fr: "Tacos", ar: "تاكوس" },
        items: [
          {
            name: "4-Mix",
            price: "70 DH",
            desc: { fr: "35 cm, Dinde, kefta, tenders, dinde fumée, frites, sauce fromagère", ar: "35 سم، ديك رومي، كفتة، تندرز، ديك رومي مدخن، بطاطس، صوص الجبن" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "4-mix.jpg",
            imageLabel: { fr: "Voir le tacos", ar: "عرض التاكوس" },
          },
          {
            name: "Tacomix",
            price: "50 DH",
            desc: { fr: "Viande hachée, frites, sauce fromagère, tenders", ar: "لحم مفروم، بطاطس، صوص الجبن، تندرز" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Tacomix.jpg",
            imageLabel: { fr: "Voir le tacos", ar: "عرض التاكوس" },
          },
          {
            name: "Kentacos",
            price: "50 DH",
            desc: { fr: "Frites, sauce fromagère, crispy tenders", ar: "بطاطس، صوص الجبن، كريسبي تندرز" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Kentacos.jpg",
            imageLabel: { fr: "Voir le tacos", ar: "عرض التاكوس" },
          },
          {
            name: { fr: "Tacos viande hachée", ar: "تاكوس لحم مفروم" },
            price: "50 DH",
            desc: { fr: "Frites, viande hachée, sauce fromage", ar: "بطاطس، قطع ناغتس، صوص الجبن" },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "B-Tacos.jpg",
            imageLabel: { fr: "Voir le tacos", ar: "عرض التاكوس" },
          },
        ],
      },
      wraps: {
        emoji: "🌯",
        title: { fr: "Wraps (B-WRAP)", ar: "رابس (B-WRAP)" },
        items: [
          {
            name: { fr: "Wrap suisse", ar: "راب سويس" },
            price: "50 DH",
            desc: { fr: "Laitue, tomate, tenders, fromage, cheddar, galette rosti, sauce.", ar: "خس، طماطم، تندرز، جبن، شيدر، غاليت روستي، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Swiss Wrap.jpg",
            imageLabel: { fr: "Voir le wrap", ar: "عرض الراب" },
          },
          {
            name: "Pockito",
            price: "60 DH",
            desc: { fr: "Laitue, tomate, tenders, kefta, Fromage cheddar, galette rosti, sauce.", ar: "خس، طماطم، تندرز، كفتة، جبنة شيدر، غاليت روستي، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis)" },
            imagePreview: "Pockito.jpg",
            imageLabel: { fr: "Voir le wrap", ar: "عرض الراب" },
          },
          
            {
            name: "B-Fold",
            price: "55 DH",
            desc: { fr: "Tortilla, tenders, cheddar, Pickles, sauce.", ar: "خس، طماطم، تندرز، كفتة، جبنة شيدر، غاليت روستي، صوص." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis) ", },
            imagePreview: "Pockito.jpg",
            imageLabel: { fr: "Voir le wrap", ar: "عرض الراب" },
          },
        ],
      },
      poulet: {
        emoji: "🍗",
        title: { fr: "Sandwichs Poulet", ar: "ساندويتشات الدجاج" },
        subtitle: { fr: "Sandwichs au poulet tendre et savoureux", ar: "ساندويتشات دجاج طرية ولذيذة" },
        items: [
          {
            name: "B-Chicken",
            price: "45 DH",
            desc: { fr: "Pain long, Crudite, tenders, cheddar, sauce onion.", ar: "خبز طويل، خس، تندرز، طماطم، جبنة شيدر، صوص البصل." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis) ", },
            imagePreview: "B-Chicken.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
          },
          {
            name: "B-Smocky",
            price: "45 DH",
            desc: { fr: "Pain long, Crudite, tenders, turkey ham, sauce BBQ.", ar: "خبز طويل، خس، تندرز، طماطم، ديك رومي مدخن، صوص باربكيو." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis) ", },
            imagePreview: "B-Smocky1.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
        },
        {
            name: "B-Spicy",
            price: "50 DH",
            desc: { fr: "Pain long, Crudite, tenders, cheddar, Pickles, Jalapinos, Spicy onion Sauce.", ar: "خبز طويل، خس، تندرز، طماطم، ديك رومي مدخن، صوص باربكيو." },
            option: { fr: "➕ Menu + 20 DH (frites + Pepsi). ➕ Menu Oasis + 25 (Frite + Oasis) ", },
            imagePreview: "B-Smocky1.jpg",
            imageLabel: { fr: "Voir le sandwich", ar: "عرض الساندويتش" },
        }
        ],
      },
      familial: {
        emoji: "👨‍👩‍👧‍👦",
        title: { fr: "Menus Familiaux", ar: "وجبات عائلية" },
        subtitle: { fr: "Repas complets pour toute la famille", ar: "وجبات كاملة لكل العائلة" },
        items: [
          {
            name: "Family Box",
            price: "185 DH",
            desc: { fr: "• 5 tenders croustillants<br>• 5 franksticks savoureux<br>• 5 ailes de poulet dorées<br>• 2 portions de frites dorées à souhait<br>• 1 boisson rafraîchissante d'un litre", ar: "• 5 قطع تندرز مقرمشة<br>• 5 قطع فرانكستيكس لذيذة<br>• 5 أجنحة دجاج ذهبية<br>• حصتان من البطاطس المقلية<br>• مشروب منعش واحد لتر" },
            imagePreview: "Menu familial.jpg",
            imageLabel: { fr: "Voir le menu familial", ar: "عرض الوجبة العائلية" },
          },
          {
            name: "Family Box",
            price: "245 DH",
            desc: { fr: "• 7 tenders croustillants<br>• 7 franksticks savoureux<br>• 7 ailes de poulet dorées<br>• 3 portions de frites dorées à souhait<br>• 2 boisson rafraîchissante d'un litre", ar: "• 7 قطع تندرز مقرمشة<br>• 7 قطع فرانكستيكس لذيذة<br>• 7 أجنحة دجاج ذهبية<br>• 3 حصص من البطاطس المقلية<br>• 2 مشروب منعش بسعة لتر" },
            imagePreview: "Menu familial.jpg",
            imageLabel: { fr: "Voir le menu familial", ar: "عرض الوجبة العائلية" },
          }
        ],
      },
      kfc: {
        emoji: "🍗",
        title: { fr: "Poulet frit coréen", ar: "دجاج مقلي كوري" },
        special: [
          {
            name: { fr: "Lanières sticky", ar: "ستريپس ستيكي" },
            flavors: { fr: "Barbecue fumé / citron & piment / curry", ar: "باربكيو مدخن / ليمون وفلفل / كاري" },
            prices: [
              { label: { fr: "4 pièces", ar: "4 قطع" }, value: "40 DH" },
              { label: { fr: "8 pièces", ar: "8 قطع" }, value: "70 DH" },
            ],
            extra: { fr: "➕ Extra topping (+6 DH) : Doritos, Cheetos, Pringles.", ar: "➕ إضافة اختيارية (+6 دراهم): دوريتوس، شيتوس، برينغلز." },
            imagePreview: "c2d7d8d7-08b1-4fec-848f-3d17b2da12f5.jpeg",
            imageLabel: { fr: "Voir le poulet frit coréen", ar: "عرض الدجاج الكوري" },
          },
          {
            name: { fr: "Ailes sticky", ar: "أجنحة ستيكي" },
            flavors: { fr: "Asie / Volcan / barbecue sucré", ar: "آسيوي / فولكان / باربكيو حلو" },
            prices: [
              { label: { fr: "6 pièces", ar: "6 قطع" }, value: "40 DH" },
              { label: { fr: "12 pièces", ar: "12 قطعة" }, value: "70 DH" },
            ],
            extra: { fr: "➕ Extra topping (+6 DH) : Doritos, Cheetos, Pringles.", ar: "➕ إضافة اختيارية (+6 دراهم): دوريتوس، شيتوس، برينغلز." },
            imagePreview: "8a276225-ecbf-42db-8e24-b3ead5291e14.jpeg",
            imageLabel: { fr: "Voir le poulet frit coréen", ar: "عرض الدجاج الكوري" },
          },
        ],
      },
      kentucky: {
        emoji: "🍗",
        title: { fr: "Kentucky Style", ar: "ستايل كنتاكي" },
        subtitle: { fr: "Drumsticks, tenders et hot wings", ar: "درامستيكس، تندرز وهوت وينغز" },
        streetRows: [
          {
            name: "Drumsticks",
            prices: [
              { label: { fr: "2 pièces", ar: "2 قطع" }, value: "35 DH" },
              { label: { fr: "4 pièces", ar: "4 قطع" }, value: "65 DH" },
            ],
            imagePreview: "drumsticks.jpg",
            imageLabel: { fr: "Voir les drumsticks", ar: "عرض الدرومستيكس" },
          },
          {
            name: "Tender",
            prices: [
              { label: { fr: "4 pièces", ar: "4 قطع" }, value: "40 DH" },
              { label: { fr: "8 pièces", ar: "8 قطع" }, value: "70 DH" },
            ],
              imagePreview: "TENDER.jpg",
              imageLabel: { fr: "Voir les tenders", ar: "عرض التندرز" },
          },
          {
            name: "Hot Wings",
            prices: [
              { label: { fr: "6 pièces", ar: "6 قطع" }, value: "40 DH" },
              { label: { fr: "12 pièces", ar: "12 قطعة" }, value: "70 DH" },
            ],
              imagePreview: "HOT-WINGS.jpg",
              imageLabel: { fr: "Voir les hot wings", ar: "عرض الهوت وينغز" },
          },
        ],
      },
      fingers: {
        emoji: "🧀",
        title: { fr: "Bouchées à grignoter", ar: "لقيمات للمشاركة" },
        streetRows: [
          {
            name: { fr: "Nuggets", ar: "ناغتس" },
            prices: [
              { label: { fr: "5 pièces", ar: "5 قطع" }, value: "30 DH" },
              { label: { fr: "10 pièces", ar: "10 قطع" }, value: "50 DH" },
            ],
            imagePreview: "Nuggets.jpg",
            imageLabel: { fr: "Voir les nuggets", ar: "عرض الناغتس" },
          },
          {
            name: { fr: "Mozzarella Sticks", ar: "أصابع الموزاريلا" },
            prices: [
              { label: { fr: "4 pièces", ar: "4 قطع" }, value: "30 DH" },
              { label: { fr: "8 pièces", ar: "8 قطع" }, value: "50 DH" },
            ],
            imagePreview: "Mozasticks.jpg",
            imageLabel: { fr: "Voir les mozzarella sticks", ar: "عرض أصابع الموزاريلا" },
          },
          {
            name: { fr: "Jalapeños Cheddar", ar: "هالبينو شيدر" },
            prices: [
              { label: { fr: "3 pièces", ar: "3 قطع" }, value: "30 DH" },
              { label: { fr: "6 pièces", ar: "6 قطع" }, value: "50 DH" },
            ],
            imagePreview: "Chilli CHeese Nuggets.jpg",
            imageLabel: { fr: "Voir les jalapeños cheddar", ar: "عرض هالبينو شيدر" },
          },
        ],
      },
    };

    const documentCategoryIds = new Set([
      "burgers",
      "poulet",
      "familial",
      "bowls",
      "CheesyFries",
      "TastyCrousty",
      "poutines",
      "tacos",
      "wraps",
      "kentucky",
      "fingers",
      "supplement",
    ]);

    const categoryList = [
      { id: "burgers", label: { fr: "Burgers", ar: "برغر" } },
      { id: "poulet", label: { fr: "Sandwichs Poulet", ar: "ساندويتشات الدجاج" } },
      { id: "familial", label: { fr: "menus familiaux", ar: "وجبات عائلية" } },
      { id: "bowls", label: { fr: "Bols & Macaroni au fromage", ar: "أطباق وماكاروني بالجبن" } },
      { id: "CheesyFries", label: { fr: "Cheesy Fries", ar: "سلطات" } },
      { id: "TastyCrousty", label: { fr: "Tasty Cousty", ar: "ساندويتشات الدجاج" } },
      { id: "poutines", label: { fr: "Poutines", ar: "بوتين" } },
      { id: "tacos", label: { fr: "Tacos", ar: "تاكوس" } },
      { id: "wraps", label: { fr: "Wraps", ar: "رابس" } },
      { id: "kfc", label: { fr: "Poulet frit coréen", ar: "دجاج مقلي كوري" } },
      { id: "kentucky", label: { fr: "Kentucky Style", ar: "ستايل كنتاكي" } },
      { id: "fingers", label: { fr: "Bouchées à grignoter", ar: "لقيمات للمشاركة" } },
      { id: "supplement", label: { fr: "Suppléments", ar: "إضافات" } },
    ].filter((c) => documentCategoryIds.has(c.id));

    Object.keys(menuData).forEach((id) => {
      if (!documentCategoryIds.has(id)) delete menuData[id];
    });
    Object.keys(categoryImages).forEach((id) => {
      if (!documentCategoryIds.has(id)) delete categoryImages[id];
    });

    function renderCategoryGrid() {
      const grid = document.getElementById("cat-grid");
      grid.innerHTML = categoryList
        .map((c) => {
          const label = localized(c.label);
          const longLabel = label.length > 16;
          const sectionTitle = "";
          const categoryImage = categoryImages[c.id]
            ? `<img class="cat-card__img" src="${categoryImages[c.id]}" alt="${label}" loading="lazy" decoding="async" onerror="this.style.display='none'" />`
            : "";
          return `${sectionTitle}
        <button type="button" class="cat-card${longLabel ? " cat-card--long" : ""}" data-id="${c.id}" aria-label="${label}">
          ${categoryImage}
          <div class="cat-card__overlay"></div>
          <span class="cat-card__label">${label}</span>
        </button>`;
        })
        .join("");
      grid.querySelectorAll(".cat-card").forEach((btn) => {
        btn.addEventListener("click", () => openMenu(btn.dataset.id));
      });
    }

    function esc(s) {
      const d = document.createElement("div");
      d.textContent = s;
      return d.innerHTML;
    }

    function renderPreviewButton(src, title, label = t("previewFallback")) {
      return "";
    }

    function renderMenuCard(item) {
      const itemName = localized(item.name);
      const itemDesc = localized(item.desc);
      const itemOption = localized(item.option);
      const itemTopping = localized(item.topping);
      const itemImageLabel = localized(item.imageLabel);
      const rawSrc = item.imagePreview || item.previewSrc || "";
      const previewSrc = rawSrc ? rawSrc : "";
      const opt = itemOption
        ? `<div class="menu-card__option">${esc(itemOption)}</div>`
        : "";
      const topping = itemTopping
        ? `<div class="menu-card__option">${esc(itemTopping)}</div>`
        : "";
      const previewBtn = "";
      
      // Special layout for Family Box
      const cardClass = itemName.includes("Family Box") || itemName.includes("بوكس")
        ? "menu-card menu-card--family-box" 
        : "menu-card";
      const emoji = item.emoji || "🍽️";
      const previewMedia = previewSrc
        ? `<button type="button" class="menu-card__media" data-preview-src="${esc(previewSrc)}" data-preview-title="${esc(item.previewTitle || itemName)}" aria-label="${esc(itemImageLabel || t("previewFallback"))}">
            <img src="${esc(previewSrc)}" alt="${esc(itemName)}" loading="lazy" decoding="async"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
            <span class="menu-card__media-placeholder" style="display:none">${esc(emoji)}</span>
          </button>`
        : `<div class="menu-card__media menu-card__media--placeholder">
            <span class="menu-card__media-placeholder">${esc(emoji)}</span>
          </div>`;
      const descHtml = itemName.includes("Family Box") || itemName.includes("بوكس")
        ? itemDesc
        : esc(itemDesc);
      
      return `
        <article class="${cardClass}">
          ${previewMedia}
          <div class="menu-card__body">
            <div class="menu-card__top">
              <div class="menu-card__name">${esc(itemName)}</div>
              <div class="price-inline">${esc(item.price)}</div>
            </div>
            ${itemDesc ? `<div class="menu-card__desc">${descHtml}</div>` : ""}
            ${opt}
            ${topping}
            ${previewBtn}
          </div>
        </article>
      `;
    }

    function renderStreetRowCard(row, categoryPreview) {
      const rowName = localized(row.name);
      const rawSrc = row.imagePreview ? row.imagePreview : categoryPreview;
      const previewSrc = rawSrc || "";
      const emoji = row.emoji || "🍽️";
      const previewMedia = previewSrc
        ? `<button type="button" class="menu-card__media" data-preview-src="${esc(previewSrc)}" data-preview-title="${esc(rowName)}" aria-label="${esc(localized(row.imageLabel) || t("previewFallback"))}">
            <img src="${esc(previewSrc)}" alt="${esc(rowName)}" loading="lazy" decoding="async"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
            <span class="menu-card__media-placeholder" style="display:none">${esc(emoji)}</span>
          </button>`
        : `<div class="menu-card__media menu-card__media--placeholder">
            <span class="menu-card__media-placeholder">${esc(emoji)}</span>
          </div>`;
      const pricesHtml = row.prices
        .map(
          (p) =>
            `<div class="menu-price-row">
              <span class="menu-price-row__label">${esc(localized(p.label))}</span>
              <span class="menu-price-row__value">${esc(p.value)}</span>
            </div>`
        )
        .join("");
      return `
        <article class="menu-card menu-card--variants">
          ${previewMedia}
          <div class="menu-card__body">
            <div class="menu-card__top">
              <div class="menu-card__name">${esc(rowName)}</div>
            </div>
            <div class="menu-price-list">${pricesHtml}</div>
          </div>
        </article>`;
    }

    const imageModal = document.getElementById("image-modal");
    const imageModalImg = document.getElementById("image-modal-img");
    const imageModalCaption = document.getElementById("image-modal-caption");
    const imageModalClose = document.getElementById("image-modal-close");

    function openImageModal(src, title) {
      imageModalImg.src = src;
      imageModalImg.alt = title;
      imageModalCaption.textContent = title;
      imageModal.classList.add("is-open");
      imageModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeImageModal() {
      imageModal.classList.remove("is-open");
      imageModal.setAttribute("aria-hidden", "true");
      imageModalImg.src = "";
      imageModalImg.alt = "";
      imageModalCaption.textContent = "";
      document.body.style.overflow = "";
    }

    function renderMenu(id) {
      const data = menuData[id];
      const inner = document.getElementById("menu-inner");
      const categoryPreview = categoryImages[id];
      let html = "";

      const dataTitle = localized(data.title);
      const dataSubtitle = localized(data.subtitle);
      const sub = dataSubtitle
        ? `<span class="section-heading__sub">${esc(dataSubtitle)}</span>`
        : "";

      html += `<div class="section-heading">
        <span class="section-heading__emoji">${data.emoji}</span>
        <span class="section-heading__title">${esc(dataTitle)}</span>
        ${sub}
      </div>`;

      if (data.items && data.items.length) {
        const itemsWithPreview = data.items.map((item) => ({
          ...item,
          previewSrc: item.imagePreview || item.previewSrc || "",
          previewTitle: localized(item.name),
        }));
        html += `<div class="items-grid">${itemsWithPreview.map(renderMenuCard).join("")}</div>`;
      }

      if (data.footer) {
        html += `<p class="extra-note" style="margin-top:14px">${esc(
          localized(data.footer)
        )}</p>`;
      }

      if (data.special) {
        html += `<div class="items-grid">`;
        data.special.forEach((block) => {
          const blockName = localized(block.name);
          const blockFlavors = localized(block.flavors);
          const blockExtra = localized(block.extra);
          const blockImageLabel = localized(block.imageLabel);
          const rawSrc = block.imagePreview ? block.imagePreview : categoryPreview;
          const previewSrc = rawSrc || "";
          const emoji = "🍗";
          const previewMedia = previewSrc
            ? `<button type="button" class="menu-card__media" data-preview-src="${esc(previewSrc)}" data-preview-title="${esc(blockName)}" aria-label="${esc(blockImageLabel || t("previewFallback"))}">
                <img src="${esc(previewSrc)}" alt="${esc(blockName)}" loading="lazy" decoding="async"
                  onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
                <span class="menu-card__media-placeholder" style="display:none">${emoji}</span>
              </button>`
            : `<div class="menu-card__media menu-card__media--placeholder"><span class="menu-card__media-placeholder">${emoji}</span></div>`;

          const flavorsArray = blockFlavors ? blockFlavors.split(' / ') : [];
          const flavorsHtml = flavorsArray.map(f => `<span class="flavor-tag">${esc(f.trim())}</span>`).join('');
          const pricesHtml = block.prices.map(p =>
            `<span class="price-pair"><span>${esc(localized(p.label))}</span><span class="pill-inline">${esc(p.value)}</span></span>`
          ).join('');

          html += `<article class="menu-card">
            ${previewMedia}
            <div class="menu-card__body">
              <div class="menu-card__top">
                <div class="menu-card__name">${esc(blockName)}</div>
              </div>
              ${flavorsHtml ? `<div class="flavors">${flavorsHtml}</div>` : ""}
              <div class="price-row">${pricesHtml}</div>
              ${blockExtra ? `<div class="menu-card__option">${esc(blockExtra)}</div>` : ""}
            </div>
          </article>`;
        });
        html += `</div>`;
      }

      if (data.streetRows) {
        html += `<div class="items-grid items-grid--variants">`;
        data.streetRows.forEach((row) => {
          html += renderStreetRowCard(row, categoryPreview);
        });
        html += `</div>`;
      }

      inner.innerHTML = html;
      inner.querySelectorAll(".menu-card__preview-btn, .menu-card__media[data-preview-src]").forEach((btn) => {
        btn.addEventListener("click", () => {
          openImageModal(btn.dataset.previewSrc, btn.dataset.previewTitle);
        });
      });
    }

    function openMenu(id) {
      if (!menuData[id]) return;
      document.getElementById("view-categories").classList.add("hidden");
      document.getElementById("view-menu").classList.add("is-visible");
      renderMenu(id);
      window.location.hash = id;
    }

    function closeMenu() {
      document.getElementById("view-categories").classList.remove("hidden");
      document.getElementById("view-menu").classList.remove("is-visible");
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }

    function applyLanguage() {
      document.documentElement.lang = "fr";
      document.documentElement.dir = "ltr";
      document.body.dir = "ltr";
      document.querySelectorAll("[data-ui]").forEach((el) => {
        el.textContent = t(el.dataset.ui);
      });
      document.getElementById("btn-back").setAttribute("aria-label", t("back"));
      document.getElementById("image-modal-close").setAttribute("aria-label", t("closeImage"));
      renderCategoryGrid();
      const currentMenu = window.location.hash.replace(/^#/, "");
      if (currentMenu && menuData[currentMenu]) renderMenu(currentMenu);
    }

    document.getElementById("btn-back").addEventListener("click", closeMenu);
    imageModalClose.addEventListener("click", closeImageModal);
    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) closeImageModal();
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageModal.classList.contains("is-open")) {
        closeImageModal();
      }
    });

    window.addEventListener("hashchange", () => {
      const h = window.location.hash.replace(/^#/, "");
      if (h && menuData[h]) openMenu(h);
      else closeMenu();
    });

    applyLanguage();

    const initial = window.location.hash.replace(/^#/, "");
    if (initial && menuData[initial]) {
      openMenu(initial);
    }
  