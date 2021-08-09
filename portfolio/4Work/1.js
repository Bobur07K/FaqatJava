// document.querySelector('#btn1').onclick = function (){
//     let login = document.querySelector('#login').value,
//         parol = document.querySelector('#parol').value;

//     if(login == 'MuhammadBobur' && parol == '7777') {
//          document.querySelector('body').innerHTML = '<button id="btn">Add</button>'
//     } else {
//         alert('Who are you?')
//     };


document.querySelector('#btn').onclick = function(){
    document.querySelector('.card-body').innerHTML +=('<button style="border: solid 2px black;"><img src="../../../img/6ab0474bb0cb02cae8341a7fdce3ea8762997f60f767acf86ecb567381f06521_83h0bH_320l.jpg" alt=""><ul><li><span>Name: Lenovo</span></li><li><span>Memory: 2Tb</span></li><li><span>Ram: 2Gb</span></li><li"><span style="font-size: small;>Date of manufacture: 2015</span></li><li"><span style="font-size: small;>CPU: Intel HD Graphics</span></li><li>Graphics: 2Mb</li></ul></button>')
}


document.querySelector('#boss').addEventListener('mouseenter', function(){
    document.querySelector('.card').innerHTML ='<button id="boss2"><img src="../../../img/6ab0474bb0cb02cae8341a7fdce3ea8762997f60f767acf86ecb567381f06521_83h0bH_320l.jpg" alt=""></button><ul><li>Name: Lenovo</li><li>Memory: 2Tb</li><li>Ram: 2Gb</li><li style="font-size: small;">Date of manufacture: 2017</li><li style="font-size: small;">CPU: Intel HD Graphics</li><li>Graphics: 2Mb</li></ul>'
})
document.querySelector('#boss2').addEventListener('mouseenter', function(){
    document.querySelector('.card2').innerHTML ='<button class="w-100" id="boss2"><img src="../../../img/6ab0474bb0cb02cae8341a7fdce3ea8762997f60f767acf86ecb567381f06521_83h0bH_320l.jpg" alt=""></button><ul><li>Name: Lenovo</li><li>Memory: 2Tb</li><li>Ram: 2Gb</li><li style="font-size: small;">Date of manufacture: 2017</li><li style="font-size: small;">CPU: Intel HD Graphics</li><li>Graphics: 2Mb</li></ul>'
})

document.querySelector('#boss3').addEventListener('mouseenter', function(){
    document.querySelector('.card3').innerHTML ='<button id="boss2"><img src="../../../img/6ab0474bb0cb02cae8341a7fdce3ea8762997f60f767acf86ecb567381f06521_83h0bH_320l.jpg" alt=""></button><ul><li>Name: Lenovo</li><li>Memory: 2Tb</li><li>Ram: 2Gb</li><li style="font-size: small;">Date of manufacture: 2017</li><li style="font-size: small;">CPU: Intel HD Graphics</li><li>Graphics: 2Mb</li></ul>'
})
