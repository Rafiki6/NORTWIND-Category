document.addEventListener("DOMContentLoaded", e => {

    mode.addEventListener("change", e => {
        if (mode.value === "") {
            // Hide all
            categoryList.classList.add("hidden")
            productList.classList.add("hidden")
        } else if (mode.value === "all") {
            // HIDE CATEGORY
            categoryList.classList.add("hidden")
            // SHOW PRODUCT LIST
            productList.classList.remove("hidden")

            fetch("http://localhost:8081/api/products/")
                .then(response => response.json())
                .then(data => {
                    data.sort((a, b) => a.productName > b.productName ? 1 : -1)
                    productList.innerHTML = "<option value=\"\">Select a Product</option>";
                    data.forEach(item => {
                        productList.innerHTML += `
        <option vaalue = "${item.productId}">${item.productName} -$${Number(item.unitPrice).toFixed(2)}</option>
        `
                    })
                })
        } else {
            categoryList.classList.remove("hidden")
            productList.classList.remove("hidden")
        }
    });


    fetch("http://localhost:8081/api/categories")
        .then(response => response.json())
        .then(data => {
            data.forEach(item =>
                categoryList.innerHTML +=
                `<option value=${item.categoryId}>${item.name} -${item.description}</option>`)
        });


    categoryList.addEventListener("change", e => {
        fetch("http://localhost:8081/api/products/")
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.productName > b.productName ? 1 : -1)
                productList.innerHTML = "<option value=\"\">Select a Product</option>";
                // ADD iMAGE 
                // productImage.src =`./images/cat${categoryList.value}.png`
                data.filter(i => i.categoryId == categoryList.value).forEach(item => {
                    productList.innerHTML += `
        <option value="${item.productId}">${item.productName} -${Number(item.unitPrice).toFixed(2)}
        `
                })
            })
    })

    productList.addEventListener("change", e => {
        fetch("http://localhost:8081/api/products/" + productList.value)
            .then(response => response.json())
            .then(item => {
                details.innerHTML = "";
                details.innerHTML += `<tr><th>Product Id</th><td>${item.productId}<td></tr>`
                details.innerHTML += `<tr><th>Product Name</th><td>${item.productName}</td></tr>`
                details.innerHTML += `<tr><th>Unit Price</th><td>$${Number(item.unitPrice).toFixed(2)}</td></tr>`
                details.innerHTML += `<tr><th>Link to Detail</th><td>
        <a href="details.html?productId=${item.productId}">
        <buttom> Detail </buttom>
        </a>
        </td></tr>`

               // CREATE AN INPUT FOR QUANTITY
          

            })
    })
})