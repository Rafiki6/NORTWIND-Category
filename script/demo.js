document.getElementById("quantity");
document.getElementById("result");

quantity.addEventListener("input",()=>{
    const enterQuanity = parseInt(quantity.value) || 0;
    const totalPrice = Number(enterQuanity * item.unitPrice).toFixed(2);

    result.innerHTML = `Total Price ${totalPrice}`
})