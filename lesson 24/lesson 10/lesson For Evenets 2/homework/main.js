
document.querySelector('#range').addEventListener('input', function(){
    console.log(this.value/100);
    document.querySelector('#image').style = 'opacity: ' + this.value/100 + ';';
});