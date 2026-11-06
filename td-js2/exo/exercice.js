function qs(selector) {
    return document.querySelector(selector);
}

function addEvt (selector, event, callback) {
    const elm=qs(selector);
    elm?.addEventListener(event,callback);
}

function onClick(elmSelector, callback) {
    const elms=document.querySelectorAll(elmSelector);
    elms.forEach (elm=>elm.addEventListener('click',callback));
}

const h1Elements=document.querySelectorAll("h1");

addEvt("button", "click", ()=>{
    const selector=qs("#selector").value;
    const elements=document.querySelectorAll(selector);
    const color=qs("#color").value || "blue";
    elements.forEach(elm=>elm.style.color=color)});

    // addEvt("button", "click", ()=>{
    // const selector=qs("#selector").value;
    // const elements=document.querySelectorAll(selector);
    // const color=qs("#color").value || "blue";
    // elements.forEach(elm=>document.body.style.backgroundColor=color)});

