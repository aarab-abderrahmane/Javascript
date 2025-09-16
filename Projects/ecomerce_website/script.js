fetch("sweets.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data.products.slice(0, 7);
        const products_container = document.querySelector('.products');
        products.forEach((pro) => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
            <div><h3>${pro.name}</h3></div>
            <img src="${pro.image}" class="product_image" >
            <div>
                <div>
                    <h4>${pro.price}</h4>
                    <div>
                        <button  onclick="increment(${pro.id})">-</button>
                        <span data-stock="${pro.id}" class="quantite" >0</span>
                        <button  onclick="decrement(${pro.id})" >+</button>
                    </div>
                </div>
            <div>
            <div class="buttons">
                <button class="add_to_cart" onclick="addToCart(${pro.id})">Add</button>
                <button class="add_to_cart" onclick="addToCart(${pro.id})">Clear</button>
            </div>
            `;

            products_container.appendChild(div);
        })

    })

    .catch((error) => console.error('Error fetching data:', error));