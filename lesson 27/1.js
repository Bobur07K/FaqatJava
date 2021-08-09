document.getElementById('input').oninput = function(){
    document.querySelector('#body').style = 'background: ' + this.value;
    document.querySelector('#style').innerHTML = 'background: ' + this.value + ';'
};
