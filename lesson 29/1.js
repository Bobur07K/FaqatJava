// document.querySelector('#btn').onclick = function(){
//     let num = prompt('Son kiriting')
//     let fas =document.querySelector('#btn').value
//     if(num>300){
//         alert('300 oshdi')
//     }else if (num<300){
//         alert('togri son')
//     }else if (s=''){
//         alert('bosh')
//     }else if (s<0){
//         alert('boshlar')
//     }
// }

// document.querySelector('#input').oninput = function(){
//     let s = document.querySelector('#input').value
//     if(s>300){
//         alert('300 oshmang')
        
//     }else if (s<300){
//         alert('togri son')
//     }else if (s=''){
//         alert('bosh')
//     }else if (s=0){
//         alert('boshlar')
//     }
// }

// document.querySelector('#input').oninput = function(){
//     document.querySelector('#hi').innerHTML = this.value;
// }

let massiv = ['sxwaxa',55,555,888,'xawx',true, 'sas',],
    bool = [],
    num = [],
    str = [];

for(let i = 0; i < massiv.length; i++){
    if(typeof(massiv[i]) == 'number'){
        num.push(massiv[i]);
    }else {
        alert('bosh');
    }
    if(typeof(massiv[i])== 'string'){
        str.push(massiv[i])
        // console.log(str);
    }else if (massiv[i].length < 0){
        alert('text arrayda yoq')
    }if(typeof(massiv[i])== 'boolean'){
        bool.push(massiv[i])
        // console.log(bool);
    }else if (massiv[i].length < 0){
        alert('true yoki false arrayda yoq')
    }else if(0 ==massiv[i].length){
        alert('array bosh')
    }
            
     else if(typeof(massiv[i]) == 'string'){
        str.push(massiv[i]);
    } else if(typeof(massiv[i]) == 'boolean'){
        bool.push(massiv[i]);
    }
}

console.log(massiv);
console.log(num);
console.log(str);
console.log(bool);
