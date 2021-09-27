let likebtn1 = document.querySelector('#likebtn1');
let input1 = document.querySelector('#input1');

likebtn1.addEventListener('click', () => {
        input1.value = parseInt(input1.value) + 1;
        input1.style.color = "fff"
    })
    // likebtn 2

let likebtn2 = document.querySelector('#likebtn2');
let input2 = document.querySelector('#input2');

likebtn2.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "fff"
})

// likebtn 3

let likebtn3 = document.querySelector('#likebtn3');
let input3 = document.querySelector('#input3');

likebtn3.addEventListener('click', () => {
        input3.value = parseInt(input3.value) + 1;
        input3.style.color = "fff"
    })
    // likebtn 4
let likebtn4 = document.querySelector('#likebtn4');
let input4 = document.querySelector('#input4');

likebtn4.addEventListener('click', () => {
        input4.value = parseInt(input4.value) + 1;
        input4.style.color = "fff"
    })
    // likebtn 5
let likebtn5 = document.querySelector('#likebtn5');
let input5 = document.querySelector('#input5');

likebtn5.addEventListener('click', () => {
    input5.value = parseInt(input5.value) + 1;
    input5.style.color = "fff"
})

// likebtn 6
let likebtn6 = document.querySelector('#likebtn6');
let input6 = document.querySelector('#input6');

likebtn6.addEventListener('click', () => {
    input6.value = parseInt(input6.value) + 1;
    input6.style.color = "fff"
})

// likebtn 7

let likebtn7 = document.querySelector('#likebtn7');
let input7 = document.querySelector('#input7');

likebtn7.addEventListener('click', () => {
    input7.value = parseInt(input7.value) + 1;
    input7.style.color = "fff"
})

// likebtn 8

let likebtn8 = document.querySelector('#likebtn8');
let input8 = document.querySelector('#input8');

likebtn8.addEventListener('click', () => {
        input8.value = parseInt(input8.value) + 1;
        input8.style.color = "fff"
    })
    // likebtn 9

let likebtn9 = document.querySelector('#likebtn9');
let input9 = document.querySelector('#input9');

likebtn9.addEventListener('click', () => {
    input9.value = parseInt(input9.value) + 1;
    input9.style.color = "fff"
})

// var filme = [{
//     movieName: "Joker",
//     image: "img/joker.jpg",
//     description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded.",
//     likes: 0
// }, {
//     movieName: "Avatar",
//     image: "img/avatar.jpg",
//     description: "The story, set in the year 2154, involves a mission by U. S.",
//     likes: 0
// }, {
//     movieName: "ice man",
//     image: "img/icemann.jpg",
//     description: "It is a fictional story about the life of Ötzi",
//     likes: 0
// }];

// for (let val of filme) {
//     document.getElementsByClassName("filme")[0].innerHTML += `<div class="filme col-12 col-md-6 col-lg-4 text-center fw-bold">
//     <p class="filme-title h3 m-3">${val.movieName}</p>
//     <img class="filme-image" src="${val.image}" width="200" height="300">
//     <div class="filme-details">
//         <p class="filme-description h4 m-3">${val.description}</p>
//         <button class="btn btn-primary filme-button" type="button">${val.likes}</button>
//     </div>
//     </div>
//     `
// }

// function addToCart(filme, index) {

//     if (cart.length == 0) {

//         cart.push(filme);

//     } else if (cart.find((val) => val.movieName == filme.movieName)) {

//         cart[index].likes++;

//     } else {

//         cart.push(filme);

//     }

//     console.table(cart);

// }

// function createRows() {
//     var result = "";
//     for (let val of cart) {
//         result += `
//     <div class="cart-row row d-flex">
//         <div class="cart-item col-6 my-3 ">
//             <img class="cart-item-image" src="${val.image}" width="100" height="100">
//             <span class="cart-item-title h5 ">${val.movieName}</span>
//         </div>
//         <span class="cart-price col-3 h4 my-3">${val.description} €</span>
//         <div class="cart-qtty-action col-3 d-flex">            
//             <i class="minus fa fa-minus-circle my-auto" ></i>            
//             <div class="cart-quantity p-4 h4">${val.likes}</div>            
//             <i class="plus fa fa-plus-circle my-auto"></i>        
//             <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
//         </div>
//     </div> `;
//     }
//     document.getElementById("cart-items").innerHTML = result;
// }