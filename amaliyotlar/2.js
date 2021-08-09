let time = new Date()
// document.querySelector('.first').innerHTML =  time.toLocaleTimeString();

setInterval(function(){
    let time = new Date()
    document.querySelector('.first').innerHTML =  time.toLocaleTimeString();
}, 1000);