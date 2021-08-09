// let number = Number(prompt())

// for(let n = 1; n <= number; n++){
//     console.log(n+ '- Bobur');  
// };

// let n = Number(prompt('son kiriting')),
//     a = [];

// for(let b = 1; b <=n; b++){
//     a.push(b);
// }

// console.log(a);

let massiv = [45,86, true, 'salom', 98, false];
    bol = []
    nu = []
    str = []
for(let i = 2; i < massiv.length; i++){
    if(typeof(massiv[i]) == 'boolean'){
        console.log(massiv[i]);
    } else if (typeof(massiv[i]) == 'string'){
        str.push(massiv[i]);
    } 
}