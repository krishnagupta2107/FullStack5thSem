// var counter = 0;
// setInterval(() => {
//     counter+=1;
//     console.log(counter+" seconds have passed");
// }, 1000);

// WAP to create a timer for 15 min using setInterval and setTimeout. Display the passing time.

var totaltimeleft = 15*60;
var counter =0;
let timer = setInterval(() => {
    counter+=1;
    totaltimeleft -= 1;
    console.log(totaltimeleft+" seconds have passed");
    if(totaltimeleft === 0){
        console.log("Time's up!");
        clearInterval(timer);
    }
}, 1000);

function display(){
    let seconds = totaltimeleft % 60;
    let minutes = Number.parseInt(totaltimeleft / 60);
}

document.getElementById("min")