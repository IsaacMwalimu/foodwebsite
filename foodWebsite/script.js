let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let products = [
    {
        id: 1,
        name: 'Chicken nuggets',
        image: 'pexels-jer-chung-2116094.jpg',
        price: 5600
    },
    {
        id: 2,
        name: 'Lobsters',
        image: 'pexels-kristina-paukshtite-1998920.jpg',
        price: 4000
    },
    {
        id: 3,
        name: 'Lobsters',
        image: 'pexels-kristina-paukshtite-1998920.jpg',
        price: 4000
    },
    {
        id: 4,
        name: 'Rice',
        image: 'pexels-koema-photographies-13770555.jpg',
        price: 5000
    },
    {
        id: 5,
        name: 'grilled chicken',
        image: 'pexels-lukas-616354.jpg',
        price: 3200
    },
    {
        id: 4,
        name: 'Rice',
        image: 'pexels-koema-photographies-13770555.jpg',
        price: 5000
    },
    {
        id: 5,
        name: 'grilled chicken',
        image: 'pexels-lukas-616354.jpg',
        price: 3200
    },
    {
        id: 6,
        name: 'Fish',
        image: 'pexels-nadin-sh-11776375.jpg',
        price: 4500
    } , 
    {
        id: 6,
        name: 'Fish',
        image: 'pexels-nadin-sh-11776375.jpg',
        price: 4500
    } ,   
    {
        id: 4,
        name: 'Rice',
        image: 'pexels-koema-photographies-13770555.jpg',
        price: 5000
    },
    {
        id: 5,
        name: 'grilled chicken',
        image: 'pexels-lukas-616354.jpg',
        price: 3200
    },
    {
        id: 6,
        name: 'Fish',
        image: 'pexels-nadin-sh-11776375.jpg',
        price: 4500
    } , 

];
                           
        //     <div class="product grocery">
        //     <div class="img"> <img src="../food/image/pexels-koema-photographies-13770555.jpg" alt="#"></div>

        //     <h2>Name:Meal</h2>
        //     <h1>price:3000</h1>
        //     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate unde veritatis nisi
        //         facilis! Neque.</h3>
        //     <button>add to cart</button>
        // </div>
let listCards  = [];// empty array for the listcard


// here we have the for each loop , looping through the products in the array creating a product for each 'product' in the products array
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add("product","groceries");
        newDiv.innerHTML = `
            <div class="img"><img src="image/${value.image}" alt="#"></div>
            <h2>${value.name}</h2>
            <h1>${value.price.toLocaleString()}</h1>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] !== null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


/// here we is where we have the list products  in the cart section i.e ('.listCard')
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0.00;
    let totalPrice = 0.00;
    listCards.forEach((value, key)=>{
        //in the 2 lines below: if you are intelligent enough you'll see that here we are adding the latest price to the existing amount thus getting the total amount,,, if you dont see it,, time is coming , meanwhile keep practicing ,,, in the meantime copy the code carefully 
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value !== null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class="img"><img src="image/${value.image}" alt="#"></div>
                <div class="name-ou">${value.name}</div>
                <div class ="price-ou">${value.price.toLocaleString()}</div>
                <div class="addMinus">
                    <button class="add" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="add" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Ksh'+":" + " " + totalPrice.toLocaleString() + ".00";
    quantity.innerText =  count;
}

function changeQuantity(key, quantity){
    if (quantity == 0) {
        delete listCards[key];;
    } else {
        listCards[key].quantity=quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard();

}
function toggleProfile(){
    let profileBtn = document.querySelector('#profile_info');
    let profile = document.querySelector('profileMain')
    profileBtn.addEventListener("click", (e)=>{
        profile.classList.toggle('active')
    })
    // console.log('kdncjd')



}toggleProfile()
function menuList (){
    let Title = document.getElementsByClassName('title');

   /* home*/
    Title[0].addEventListener('click', ()=>{
     location='foodcart/index.html'   
    })
         let Logo = document.querySelector('.logo');
         Logo.addEventListener('click', ()=>{
            location='foodcart/index.html'
         })
}
menuList()