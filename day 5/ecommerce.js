let products = [];

const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    products = data.products;

    const productContainer = document.getElementById("products-container");

    for (let i = 0; i < 10; i++) {

        const product = products[i];

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const addItemSpan = document.createElement("span");
        addItemSpan.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(incrementBtn);
        div.appendChild(decrementBtn);
        div.appendChild(addItemSpan);

        productContainer.appendChild(div);

        let counter = 0;
        incrementBtn.addEventListener("click",()=>{
            counter++;
            addItemSpan.innerText = counter;
           
        })
        decrementBtn.addEventListener("click",()=>{
            if(counter>0){
                counter--;
                addItemSpan.innerText = counter;
            }
        })
    }
};

getProducts();