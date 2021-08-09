// document.querySelector('#btn').onclick = function(){
// let num = Number(prompt('raqam kiriting'));

// if(num>0){
//     alert('musbat')
// }else if(num<0){
//     alert('manfiy')
// }else if(num==0){
//     alert('bu nol')
// }
// }
document.querySelector('#btn').onclick = function(){
    let p = prompt('Malumot kiriting');
    document.querySelector('#tb1').innerHTML += '<tr><td>' + p + '</td></tr>'
}

document.querySelector('#btn2').onclick = function(){
    let n = Number(prompt('Son kiriting'))
    if(n%10 == 0){
        alert('sonning yonida 0')
    }else{
        alert('notogri son')
    }
}


document.querySelector('#btn3').onclick = function(){
    let color = prompt('RAng kiriting');
    document.querySelector('#body').style = 'background: ' + color+ ';'
};