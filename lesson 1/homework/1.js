document.querySelector('#btn').onclick = function(){
    let num= Number(prompt('Son Kiriting'));

    for(i=0;i<=num;i++){
        if(num%10 == 0){
            document.querySelector('#ul').innerHTML +='<li>'+i +'</li>'
        }else{
            console.log('notogri son');
        }
    }
}

document.querySelector('#btn2').onclick = function(){
    let n = Number(prompt('Sonning Kvadrati'));
    for(let i = 1; i <= n; i++){
        if(n*n) {
            console.log(n*n);
        };
    };

}

document.querySelector('#btn3').onclick = function(){
    let n = Number(prompt('Tub sonlar kiriting'));
    for(let i=2; i<=n; i++){
        if((i%3===0) || (i%2===0)){
            console.log(i);
        }
    }
};    

// let k = Number(prompt('Son'));
// var array =  Array(k);

// for (var i=3; i<=array.length-1; i++) {
//     if((i%3===0) || (i%2===0))
//     console.log(i);
// }
// let list = [1,2,3,4,5,6,7,8,9,10];
// let result = list.map(x => x*x);
// console.log(result);

document.querySelector('#btn4').onclick = function(){

let s = Number(prompt('son'))

let array = [s];
arrSquare = array.map(function (a){return a*a;})
arrSquare.push(s)
console.log(arrSquare);
}

