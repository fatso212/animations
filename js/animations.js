let string = "Hello, there is a problem dont you" +
" think theres something important going on here."
let index2 = 0
let title = document.getElementById("title")
title.style.fontFamily = "Arial"
title.style.color = "pink"
let titleinterval = setInterval(function(){
   if (index2 === string.length){
       clearInterval(titleinterval)
   } else {
       title.innerHTML += string[index2]
       index2 += 1
   }
}, 40)

let element = document.getElementsByClassName('header')
element[0].style.borderTopLeftRadius = 10 + "px"
element[0].style.borderBottomLeftRadius = 10 + "px"
element[3].style.borderTopRightRadius = 10 + "px"
element[3].style.borderBottomRightRadius = 10 + "px"
console.log(element[0])
let num = 500
let index = 0
while(index < element.length ){
   element[index].style.left = num +"px"
   console.log(num)
   num += 100
   index += 1
}

let index4 = 0
    let index3 = 0
    element[index4].style.opacity = index3
    let fadeIn = setInterval(function(){
        if (index3 >= .40){
            clearInterval(fadeIn)
        } else {
            while(index4 < element.length){
                element[index4].style.opacity = index3
                index3 = index3 + .01
                index4 += 1
            }
            index4 = 0
        }
    }, 100)
