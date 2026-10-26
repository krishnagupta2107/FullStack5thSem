/**
 * Non-Primitive/Secondary Data Types
 * Object
 * Array
 * Function
 */

// var myObj = {
//     name: "John",
//     show: showname
// }
// myObj.show();
// function showname(){
//     console.log(myObj.name);
// }

// const arr = []
// arr.push(1,2,3);
// console.log(arr);
// arr[1] = "Hello";
// console.log(arr);
// arr.pop();
// console.log(arr);

// WAP to check if a number is armstrong or not , not take inout from user
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

function checkAndShow() {
    let num = Number(document.getElementById("value").value);
    let para = document.createElement("p");
    if (isArmstrong(num)) {
        para.textContent = "It is an Armstrong number";
    } else {
        para.textContent = "Its is not an Armstrong number";
    }
    document.getElementsByTagName("body")[0].append(para);
}