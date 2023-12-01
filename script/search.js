

fetch("http://localhost:8081/api/categories")
.then(response => response.json())
.then(data => {
    data.forEach(item => 
        categoryList.innerHTML +=
        `<option value=${item.categoryId}>${item.name} item.name} - ${item.description}</option>
        `);
})