fetch("sweets.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data.products.slice(0, 7);
        const products_container = document.querySelector('.products');
        products.forEach((pro) => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
            <div><h3 class="name_product">${pro.name}</h3></div>
            <img src="${pro.image}" class="product_image" >
            <div>
                <div class="price">
                    <div class="frame">
                    <h4>${pro.price} $</h4>
                    <div class="quantite_container">
                        <button  onclick="decrement(${pro.id})">-</button>
                        <span data-stock="${pro.id}" class="quantite" >0</span>
                        <button  onclick="increment(${pro.id})" >+</button>
                    </div>
                    </div>
                </div>
            <div>
            <div class="buttons">
                <button class="add_to_cart" onclick="addToCart(${pro.id})">Add</button>
                <button class="add_to_cart" onclick="addToCart(${pro.id})">Clear</button>
            </div>
            `;

            products_container.appendChild(div);
            all_products.push(div)

        })

    })

    .catch((error) => console.error('Error fetching data:', error));



function decrement(id){
    const quantitySpan = document.querySelector(`span[data-stock="${id}"]`);
    quantitySpan.textContent = Math.max(0, parseInt(quantitySpan.textContent) - 1);
}

function increment(id){
    const quantityspan = document.querySelector(`span[data-stock="${id}"]`);

    quantityspan.textContent = Math.min(100,parseInt(quantityspan.textContent)+1)
}

    let all_products  = []

document.addEventListener('DOMContentLoaded' , ()=>{


document.getElementById('search').addEventListener('input' , e=>{
    let value = e.target.value.toLowerCase().trim()
    console.log(all_products)
    all_products.forEach(pro=>{
        let isvisible = pro.querySelector('.name_product').textContent.toLowerCase().includes(value) 
        console.log(isvisible)
        pro.classList.toggle('hide',!isvisible)
    })
})

})
