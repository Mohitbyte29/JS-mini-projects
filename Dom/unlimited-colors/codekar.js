const body = document.querySelector('body');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')



// Self Code 
// let intervalId;
// Start Operation
// const startOp = () => {
//     // Can also work but partially
//     // const randomCol = parseInt(Math.random() * 1000000)
//     
//     body.style.backgroundColor = '#' + randomCol;
//    
// }

// const changeColor = () => {
//     if(!intervalId){
//         intervalId = setInterval(startOp, 1000) // Prevents multiple clicks
//     }
// }
// start.addEventListener('click', changeColor);

// // Stop Operation
// const stopOp = () => {
//     clearInterval(intervalId)
// }
// stop.addEventListener('click', stopOp)

// Correct Way


const startOp = () => {
    // Can also work but partially
    // const randomCol = parseInt(Math.random() * 1000000)
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startChangingColor = () => {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = startOp();
    }
}


const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor)



