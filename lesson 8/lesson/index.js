// let number = Number(prompt('Sonni kiriting!'));

// for(let n = 1; n <= number; n++){
//     console.log(n + ' - Ziyodbek');
// };

// let num = Number(prompt('Sonni kiriting')),
//     arr = [];

// for(let a = 1; a <= num; a++){
//     arr.push(a);
// }

// console.log(arr);

let massiv = [43, 'salom', true, 'Assalomu alaykum', false, 'Hello', 75, 534, false],
    bool = [],
    num = [],
    str = [];

for(let i = 0; i < massiv.length; i++){
    if(typeof(massiv[i]) == 'number'){
        num.push(massiv[i]);
    } else if(typeof(massiv[i]) == 'string'){
        str.push(massiv[i]);
    } else if(typeof(massiv[i]) == 'boolean'){
        bool.push(massiv[i]);
    }
}

console.log(massiv);
console.log(num);
console.log(str);
console.log(bool);