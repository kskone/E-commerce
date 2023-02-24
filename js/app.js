let cartIcon =document.querySelector('#cart-icon');
let cart =document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
 

document.addEventListener('DOMContentLoaded', ()=> {
    ready()

    cartIcon.onclick = () => {
        cart.classList.add("active");
    };
    closeCart.onclick = () => {
        cart.classList.remove("active");
    };
})

if(document.readyState == 'loadeing'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}
function ready(){
    const removeCartButtons = document.getElementsByClassName('fa-trash');
    for(let i = 0; i < removeCartButtons.length; i++){
        const button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    updatetotal()
}
// quantiter de change
const quantityInputs = document.getElementsByClassName("cart-quantity");
for(let i = 0; i < removeCartButtons.length; i++ ){
    const input = quantityInputs[i]
    input.addEventListener('change',quantityChange);
}
const addCart = document.querySelector('.add-cart');
for (const i = 0; i < addCart.length;i++){
    const button = addCart[i];
    button.addEventListener('click',addCartClicked)
}

function quantityChange(event){
    console.log('new input chagne')
    const input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value =1;
    }
}

function removeCartButtons(event) {
    const buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}
function addCartClicked(event){
    const button = event.target;
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    const prix = shopProducts.getElementsByClassName('prix')[0].innerText;
    const productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,prix,productImg);
    console.log(productImg);
}

function updatetotal(){
    const cartContent = document.getElementsByClassName("cart-content")[0];
    const cartBoxes = cartContent.getElementsByClassName("cart-box"); 
    const total = 0;
    for(const i = 0; i < cartBoxes.length; i++){
        const cartBox = cartBoxes[i]
        const prixElement = cartBox.getElementsByClassName("cart-prix")[0];
        const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        const prix = parseFloat(prixElement.innerText.replace("F", ""));
        const quantity = quantityElement.value;
        total = total + prix * quantity;

        total = Math.round(total * 100)/100; 

        document.getElementsByClassName('total-prix')[0].innerText = 'F' + total;
    }
}
// const quantityInputs = document.getElementsByClassName('cart-quantity')
// for(const i = 0; i < removeCartButtons.length; i++ ){
//     const 
//     const input = quantityInputs[i]
//     input.addEventListener("change", quantityChange);
// }

function removeCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChange(event){
    const input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function updatetotal(){
    const cartContent = document.querySelector('.cart-content');
    const cartBoxes   = cartContent.querySelectorAll('.cart-box');
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++ ){
        const cartBox = cartBoxes[i];
        const prixElement = cartBox.querySelector('.cart-prix')
        const quantityElement = cartBox.querySelector('.cart-quantity')
        const prix = parseFloat(prixElement?.innerText.replace(/f/i, ''));
        const quantity = parseInt(quantityElement.value)
        total = total +(prix * quantity)
    }
    const priceP = document.querySelector('.total-prix')
    if (!priceP) {
        console.log('not price ')
        return
    }
    priceP.innerText = "F " + total;
}