document.addEventListener("DOMContentLoaded",e =>{
    const productId = location.search.split("=")[1];

    fetch("http://localhost:8081/api/products/" + productId)
    .then(response => response.json())
    .then(item => {
        image.src =`./images/product${item.productId}.jpg`;
        details.innerHTML = "";
        details.innerHTML += `<tr><th>product Id:</th>      <td>${item.productId}</td></tr>`
            details.innerHTML += `<tr><th>product Name:     </th><td>${item.productName}</td></tr>`
            details.innerHTML += `<tr><th>unit Price:       </th><td>$${Number(item.unitPrice).toFixed(2)}</td></tr>`
            details.innerHTML += `<tr><th>units In Stock:   </th><td>${item.unitsInStock}</td></tr>`
            details.innerHTML += `<tr><th>supplier:</th>    <td>${item.supplier}</td></tr>`
            details.innerHTML += `<tr><th>discontinued:</th><td>${item.discontinued}</td></tr>`

           const quantity = document.getElementById("quantity")
           document.getElementById("result")

            quantity.addEventListener("input", () =>{
                const enterQuanity =  parseInt(quantity.value) || 0;
                const totalPrice = Number(enterQuanity * item.unitPrice).toFixed(2);  

              
                result.innerHTML =`Total Price $${totalPrice}`
            })
    })
})

// 

// document.getElementById("result");
// result.innerHTML = N