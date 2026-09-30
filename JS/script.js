
// ========================================================================================
                // Storing & Removing Data in LocalStorage using JSON
// ========================================================================================
let list = ["item1","item2","item3"]                     // Step 1: Define an array

localStorage.setItem("myList",JSON.stringify(list));     // Step 2: Convert the array into a JSON string and save it to localStorage
                                                         // (Reason: localStorage only accepts strings)

let getData = localStorage.getItem("myList");            // Step 3: Get the JSON string from localStorage

// localStorage.removeItem("myList");                    // Data remove korar jonno

console.log(JSON.parse(getData));                         // Step 4: Parse the JSON string back into a usable JavaScript Array                  


