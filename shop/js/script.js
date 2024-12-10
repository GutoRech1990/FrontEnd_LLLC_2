var shopObject;

function showProduct(id) {
    let index = id - 1;
    product = shopObject[index];

    let details = document.getElementById("details");

    let title = product.title;
    let price = product.price;
    let image = product.image;
    let id = product.id;
    let description = product.description;

    let outStr = `<div class="product" onclick='showProduct(${id})'>
            <div><h1>${title}</h1></div>
            <div>${description}</div>
            <div>Price: ${price}</div>
            <div><img src="${image}"></div>
        </div>`;
    
        details.innerHTML = outStr;
}

async function getData() {
    result = await fetch("https://fakestoreapi.com/products");

    shopObject = await result.json();

    console.log(shopObject);

    var container = document.getElementById("container");

    let outStr = "";
    for (const product of shopObject) {
        let title = product.title;
        let price = product.price;
        let image = product.image;
        let id = product.id;

        outStr += `<div class="product" onclick='showProduct(${id})'>
            <div><h1>${title}</h1></div>
            <div>Price: ${price}</div>
            <div><img src="${image}"></div>
        </div>`
    }

    container.innerHTML += outStr;

}