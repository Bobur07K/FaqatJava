document.querySelector('.range').oninput = function(){
    document.querySelector('.div').style = 'border-radius: ' + this.value*2 + 'px;'
}

document.querySelector('.range1').oninput = function(){
    document.querySelector('.div').style = 'border-top-left-radius: '  + this.value + 'px;'
}

document.querySelector('.range2').oninput = function(){
    document.querySelector('.div').style = 'border-top-right-radius: '  + this.value + 'px;'
}

document.querySelector('.range3').oninput = function(){
    document.querySelector('.div').style = 'border-bottom-right-radius: ' + this.value + 'px;'
}

document.querySelector('.range4').oninput = function(){
    document.querySelector('.div').style = 'border-bottom-left-radius: ' + this.value + 'px;'
}
