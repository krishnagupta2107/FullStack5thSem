//Template Literals
// let b=`GLA 
// University`;
// console.log(b);

// let op="GOOD";
// let a=`GLA University is ${op}`;
// console.log(a);

// let img="https://picsum.photos/id/237/200/300";
// let title="Heading";
// let desc="Description";

// let mycode=`
// <img src='${img}'>
// <h3>${title}</h3>
// <p>${desc}</p>
// `;
// document.querySelector("#div").innerHTML=mycode;


import * as MATH from "./math.js";
console.log(MATH.add(15,6));
document.getElementById("div").innerHTML=MATH.add(5,6);