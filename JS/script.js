// ========================================================================================
// DOM Selection - Tag, Class ebong ID diye HTML element khuje ber korar niyom
// ========================================================================================

console.log(document);                                  // All HTML document structure k console e dekhbe

console.log(document.getElementsByTagName('h1'));      // Tag er nam diye shob h1 element gulo k khuje ber korbe

let peragraph = document.getElementsByClassName("one"); // "one" namer class thaka shob element k ekta variable e rakhbe

console.log(peragraph);                                 

// let box = document.getElementById("two")             // "two" namer ID console e dekhabe

// console.log(box);                                    

let box = document.getElementById("two")                // Unique ID "two" diye nirdishto element ti k khuje ber korbe

console.log(box.innerHTML);                             // Oi box element er bhetor thaka  text ba content k dekhabe

