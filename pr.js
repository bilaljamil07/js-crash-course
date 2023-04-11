// Q1
// function add (val){
//     return function plus (a) {
//         console.log(val + a)
//     }
// }

// Q2 
// function searchElement(arr, val) {
//   
//     if (arr.length === 0) {
//       return false;
//     }
    
//    
//     if (arr[0] === val) {
//       return true;
//     } else {
//      
//       return searchElement(arr.splice(1), val);
//     }
//   }

// Q3
// function addPara (text) {
//     let para = document.createElement("p");
//     let textNode = document.createTextNode(text);
//     para.appendChild(textNode);
//     return document.body.appendChild(para)
// }

// Q4
// function addListItem (item) {
//     let Li = document.createElement("li");
//     let textNode = document.createTextNode(item);
//     Li.appendChild(textNode);
//     let Ul = document.querySelector("ul")
//     Ul.appendChild(Li)
// }

// Q5
// function changeBg (html_element, bgcolor) {
//     let element = document.querySelector(html_element)
//     element.style.backgroundColor = bgcolor
// }

// Q6 
// function saveObject (key , object) {
//     let stringyObject = JSON.stringify(object)
//     localStorage.setItem(key, stringyObject )
// }

// Q7
// function getObject (key) {
//     let object = localStorage.getItem(key)
//     let Objectify = JSON.parse(object)
//     return Objectify
// }

// Q8 
// function saveObject(object) {
//     for (const property in object) {
//       const key = property;
//       const value = object[property];
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//     const createObject = {};
//     for (const property in object) {
//       const key = property;
//       const value = JSON.parse(localStorage.getItem(key));
//       createObject[key] = value;
//     }
//     return createObject;
//   }

  

