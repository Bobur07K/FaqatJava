// document.querySelector('#btn').onclick = function(){
//     document.querySelector('#input').value
// }

document.querySelector('#btn').onclick = function(){
let ss = document.querySelector('#input').value;
    if(ss.length>10){
        alert('10 dan korpoq')
    }  else {
        alert('Belgilangan miqdorda belgilar qabul qilingdi!')
    }
    document.querySelector('#input').value = ''; 
    
}