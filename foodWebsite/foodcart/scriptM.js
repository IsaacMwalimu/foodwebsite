function toggleHam(){
let hamburger = document.querySelector(".ham");
let navSection = document.querySelector(".navSection");
navSection.classList.toggle("active")
hamburger.classList.toggle("active")

if (hamburger.classList.contains('active')){
    document.querySelector('header').style.height='100%'
}
else{
    document.querySelector('header').style.height='0%'
}
}

let a = document.querySelector('#a_desc')
a.addEventListener("click", ()=>{
    console.log('jdncjdcn')
})

