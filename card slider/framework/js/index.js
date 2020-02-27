var left_arrow = document.querySelector('.arrow-left')
var right_arrow = document.querySelector('.arrow-right')
const card = document.querySelectorAll('.card')
var card_wrapper = document.querySelector('.card-wrapper')
var card_wrapper_width = card_wrapper.offsetWidth
var number_of_marging

var card_length = card.length
var card_width2 = card_wrapper_width / card_length | 0
var i = 0

var number_of_card 
var phone = window.matchMedia("(max-width: 480px)")
var tab  = window.matchMedia("(max-width: 640px)")
var large_tab = window.matchMedia("(max-width: 1024px)")
var large_screen = window.matchMedia("(max-width: 1280px)")

if (phone.matches) {
    number_of_card = 1
    number_of_marging = -11
} else {
    if (tab.matches) {
        number_of_card = 3
        number_of_marging = 8
    } else {
        if (large_tab.matches) {
            number_of_card = 4
            number_of_marging = 20
        } else {
            number_of_card = 5
            number_of_marging = 20
        }
    }
}


var card_width = card[0].offsetWidth + number_of_marging
// console.log(number_of_card)
// console.log(number_of_marging)





right_arrow.style.display = "block"
const slider = (f)=>{
    let j = card_width * f
    let t = card_width * number_of_card
    card_wrapper.style.transform = 'translateX('+j+'px)'
    if (j <= -card_width) {
        left_arrow.style.display = "block";
    } else {
        left_arrow.style.display = "none"
    } 
    
    if (j > -card_width * card_length + t) {
        right_arrow.style.display = "block"
    } else {
        right_arrow.style.display = "none"
    }
}
left_arrow.onclick= ()=>{
    let f = i++ + 1
    slider(f)
    console.log(number_of_card)
}
right_arrow.onclick= ()=>{
    let f = i-- - 1
    slider(f)
}