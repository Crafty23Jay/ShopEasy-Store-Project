const productEl = document.querySelector('#product-1')
const product1Name = document.querySelector('#product-1-name')

let product1Data = {
    name: "Washing machine",
    price: 2000,
    discount: "15%",
}

function product1 (){
    product1Name.textContent= ''
}


productEl.addEventListener('click', function(){
    console.log("product 1")
    product1Name.textContent=product1Data.name
})