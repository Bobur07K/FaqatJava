// document.querySelector('#range').addEventListener('input', function(){
//     console.log(this);
//     document.getElementById('body').style = 'background: ' + this.value;
// })

// document.querySelector('#range').addEventListener('input', function(){
//     document.querySelector('.div_1').style = 'box-shadow: 3px 3px 15px 0px '+ this.value + ';';
// });

let h = 10,
    w = 10;

document.querySelector('#rangeWidth').oninput = function() {
    w = this.value * 2;
    document.querySelector('.div_1').style = 'width: ' + w + 'px;height: ' + h + 'px;'; 
    document.querySelector('.info').innerHTML = '<p>For CSS codes</p>width: ' + w + 'px;<br>height: ' + h + 'px;';
    document.querySelector('#w').value = w;
    document.querySelector('#h').value = h;
};

document.querySelector('#rangeHeight').oninput = function() {
    h = this.value * 2;
    document.querySelector('.div_1').style = 'width: ' + w + 'px;height: ' + h + 'px;';
    document.querySelector('.info').innerHTML = '<p>For CSS codes</p>width: ' + w + 'px;<br>height: ' + h + 'px;';
    document.querySelector('#w').value = w;
    document.querySelector('#h').value = h;
}