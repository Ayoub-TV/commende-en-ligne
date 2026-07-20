console.log("order.js chargé");
import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
(function(){
  const KEY='brimo_cart_v1', ORDERS='brimo_orders_v1', CUSTOMER='brimo_customer_v1';
  const money=n=>`${Number(n||0).toFixed(2).replace('.00','')} DH`;
  const read=k=>{try{return JSON.parse(sessionStorage.getItem(k)||localStorage.getItem(k)||'[]')}catch{return []}};
  const save=(k,v,session=false)=>(session?sessionStorage:localStorage).setItem(k,JSON.stringify(v));
  const price=v=>Number(String(v||'').replace(',','.').match(/\d+(?:\.\d+)?/)?.[0]||0);
  const cart=()=>read(KEY); const setCart=v=>{save(KEY,v);updateBadge()};
  function add(product, quantity=1){const items=cart(), key=product.name+'|'+product.price;const found=items.find(x=>x.key===key);if(found)found.quantity+=quantity;else items.push({...product,key,price:price(product.price),quantity, note:''});setCart(items);updateBadge();toast(`${product.name} ajouté au panier`)}
  function update(key,change){const items=cart(),x=items.find(x=>x.key===key);if(!x)return;if(change==='remove')items.splice(items.indexOf(x),1);else{x.quantity+=change;if(x.quantity<1)items.splice(items.indexOf(x),1)}setCart(items);updateBadge()}
  function totals(items=cart()){return {count:items.reduce((n,x)=>n+x.quantity,0),total:items.reduce((n,x)=>n+x.price*x.quantity,0)}}
  function ensureFab(){if(document.querySelector('.brimo-cart-fab'))return;const b=document.createElement('button');b.className='brimo-cart-fab';b.innerHTML='Panier <b>0</b>';b.onclick=()=>location.href='cart.html';document.body.append(b);updateBadge()}
  function updateBadge(){const b=document.querySelector('.brimo-cart-fab b');if(b)b.textContent=totals().count}
  function toast(message){let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.append(el)}el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
  function orderControls(product){return `<div class="menu-order-controls" data-product='${encodeURIComponent(JSON.stringify(product)).replace(/'/g,'%27')}'><div class="qty"><button type="button" data-q="-1">−</button><span>1</span><button type="button" data-q="1">+</button></div><button type="button" class="order-action">Ajouter</button></div>`}
  document.addEventListener('click',e=>{const ctrl=e.target.closest('.menu-order-controls');if(ctrl){if(e.target.dataset.q){const span=ctrl.querySelector('span');span.textContent=Math.max(1,Number(span.textContent)+Number(e.target.dataset.q));return}if(e.target.closest('.order-action'))add(JSON.parse(decodeURIComponent(ctrl.dataset.product)),Number(ctrl.querySelector('span').textContent))}});
  function renderCart(){const target=document.querySelector('[data-cart]');if(!target)return;const items=cart(),t=totals(items);if(!items.length){target.innerHTML='<div class="order-card empty"><h2>Votre panier est vide</h2><p>Découvrez notre menu et ajoutez vos envies.</p><a class="button" href="index.html">Voir le menu</a></div>';return}target.innerHTML=`<div class="order-grid"><section class="order-card"><h1>Votre panier</h1>${items.map(x=>`<article class="cart-row"><img src="${x.image||''}" alt=""><div><h3>${x.name}</h3><p>${money(x.price)} l’unité</p><div class="qty"><button data-cart-change="-1" data-key="${encodeURIComponent(x.key)}">−</button><span>${x.quantity}</span><button data-cart-change="1" data-key="${encodeURIComponent(x.key)}">+</button></div><input class="note-input" data-note="${encodeURIComponent(x.key)}" value="${x.note||''}" placeholder="Note pour ce produit (facultatif)"></div><div class="line-total">${money(x.price*x.quantity)}<br><button class="button button--ghost button--danger" data-cart-change="remove" data-key="${encodeURIComponent(x.key)}">Supprimer</button></div></article>`).join('')}<div class="cart-actions"><a class="button button--ghost" href="index.html">Continuer mes achats</a><button class="button button--ghost button--danger" data-clear>Vider le panier</button></div></section><aside class="order-card summary"><h2>Récapitulatif</h2><dl><div><dt>Articles</dt><dd>${t.count}</dd></div><div class="total"><dt>Total</dt><dd>${money(t.total)}</dd></div></dl><a class="button button--wide" href="checkout.html">Passer à la caisse</a></aside></div>`;}
  document.addEventListener('click',e=>{const b=e.target.closest('[data-cart-change]');if(b){const v=b.dataset.cartChange;if(v==='remove'&&!confirm('Retirer ce produit du panier ?'))return;update(decodeURIComponent(b.dataset.key),v==='remove'?'remove':Number(v));renderCart()}if(e.target.closest('[data-clear]')&&confirm('Vider entièrement le panier ?')){setCart([]);renderCart()}});
  document.addEventListener('input',e=>{if(e.target.dataset.note){const items=cart(),x=items.find(x=>x.key===decodeURIComponent(e.target.dataset.note));if(x){x.note=e.target.value;setCart(items)}}});
async function sendOrder(commande) {
  try {
    // Enregistrer dans Firebase
    const docRef = await addDoc(
      collection(db, "orders"),
      commande
    );

    console.log("Commande envoyée :", docRef.id);

    // Garder aussi une copie locale
    const orders = read(ORDERS);
    orders.unshift(commande);
    save(ORDERS, orders);

    return docRef.id;

  } catch (error) {
    console.error("Erreur Firebase :", error);
    throw error;
  }
}
  function newOrder(customer){const items=cart(),t=totals(items);return {id:'BR-'+Date.now().toString().slice(-6),date:new Date().toISOString(),heure:new Date().toLocaleTimeString('fr-MA',{hour:'2-digit',minute:'2-digit'}),client:customer,products:items,total:t.total,quantity:t.count,status:'NOUVEAU',note:document.querySelector('[name=orderNote]')?.value||''}}
  window.BrimoOrder={add,cart,setCart,totals,money,price,orderControls,renderCart,sendOrder,newOrder,orders:()=>read(ORDERS),customer:()=>read(CUSTOMER),saveCustomer:v=>save(CUSTOMER,v,true)};window.sendOrder=sendOrder;
  document.addEventListener('DOMContentLoaded',()=>{if(/\/(?:index|cart)\.html$/i.test(location.pathname)||/\/$/.test(location.pathname))ensureFab();renderCart()});
})();
