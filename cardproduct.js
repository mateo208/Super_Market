const maincontent = document.getElementById("Main-container");


const createCard = (product) => {
    const cardProduct = document.createElement("div");
    const nameProduct = document.createElement("h2");
    const priceProduct = document.createElement("p");
    const quantityProduct = document.createElement("p");
    const imageProduct = document.createElement("img");
    const btnAddTocard = document.createElement("button");

    nameProduct.textContent = product.name;
    priceProduct.textContent = product.price;
    quantityProduct.textContent = product.quantity;
    imageProduct.setAttribute("src", product.image);
    imageProduct.setAttribute("alt", product.image);
    btnAddTocard.textContent = "Add To card";

    cardProduct.classList.add("card");

    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(imageProduct);
    cardProduct.appendChild(priceProduct);
    cardProduct.appendChild(quantityProduct);
    cardProduct.appendChild(btnAddTocard);



    maincontent.appendChild(cardProduct);


};
const products = [
    { name: "rice",price: "5$",quantity: 5,image: "Images/rice.jpeg"},
    { name: "potato", price: "5$", quantity: 5, image: "Images/potato.jpeg" },
    { name: "Meat", price: "5$", quantity: 5, image: "Images/Meat.jpeg" },
    { name: "Milk", price: "5$", quantity: 5, image: "Images/milk.jpeg" },
];

function rendercards() {
    products.map(function(product) {
        return createCard(product)
    })
}
window.addEventListener("DOMContentLoaded", rendercards);



 