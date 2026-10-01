// ========================================================================================
// DOM Selection - Tag, Class, ID,query selector, diye HTML element khuje ber korar niyom
// ========================================================================================

// console.log(document);                                  // All HTML document structure k console e dekhbe

// console.log(document.getElementsByTagName('h1'));      // Tag er nam diye shob h1 element gulo k khuje ber korbe

// let peragraph = document.getElementsByClassName("one"); // "one" namer class thaka shob element k ekta variable e rakhbe

// console.log(peragraph);                                 

// // let box = document.getElementById("two")             // "two" namer ID console e dekhabe

// // console.log(box);                                    

// let box = document.getElementById("two")                // Unique ID "two" diye nirdishto element ti k khuje ber korbe

// console.log(box.innerHTML);                             // Oi box element er bhetor thaka  text ba content k dekhabe

let heading = document.querySelector("h1");                 // CSS er moto shorashori tag er nam diye h1 select korbe
console.log(heading);                                       // h1 element ta k console e dekhabe

let peragraph = document.querySelector(".one");             // Class select korar jonno age ekta dot (.) dite hobe
console.log(peragraph);                                     // "one" class thaka prothom paragraph ta k console e dekhabe

// let box = document.querySelector("#two");                // ID select korar jonno hash (#) sign use hobe 
// console.log(box);                                  

// let box = document.querySelector("#two").innerHTML;         // ID select korar jonno hash (#) sign use hobe ebong bhetorer text nibe
// console.log(box);                                            // "#two" ID thaka element er bhetorer text ta console e dekhabe
                                          
let box = document.querySelector("#two");                       // ID select korar jonno hash (#) sign use hobe
box.innerHTML = "<button>Click me</button> This is the new content of the box.";          // HTML er box element tar bhetorer text change kore notun text set korbe
console.log(box.innerHTML);                        