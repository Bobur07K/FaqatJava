// function  bolta() {
//     console.log('nimanidir')
// }

// let a = 'nimadir';

// console.log(typeof(a));

// if(typeof(a) == "number"){
//     console.log(a);
// } else {
//     alert('bu raqam ekan');
// }


// console.log((12 + 1) == 13);

// let num = 330;

// console.log(typeof(num) == 'string');


// if(false){
//     document.write('hullas');
// } else {
//     document.write('hullas emas');
// }

// console.log( 12 == 12);

// let boltavoy = Number(prompt());

// if(boltavoy > 10){
//     console.log('Bu son 10dan katta');
// }
// else {
//     console.log('Bu son 10ga teng yoki kichik');
// }

// let num = Number(prompt('Bironta son kiriting!'));

// if(num > 0) {
//     console.log('Bu son musbat!');
// } else {
//     console.log('Bu son yoki 0 yoki manfiy!');
// }


// function btn() {
//     let number = Number(prompt('Ixtiyoriy son kiriting'));

//     if(number == 0) {
//         console.log('Bu son 0!');
//     } else if(number > 0) {
//         console.log('Bu son musbat!');
//     } else {
//         console.log('Bu son manfiy!');
//     }
// }

// let ism = prompt('Ismni kiriting!');

// console.log(ism);

// if(ism == 'Ziyodbek') {
//     console.log('Bu ism to`g`ri!');
// } else {
//     console.log('Bu ism noto`g`ri!');
// }

function btn() {
    let login = document.querySelector('#login').value,
        parol = document.querySelector('#parol').value;

    if(login == 'Ziyodbek' && parol == 'Hullas') {
        document.write('<h1>Hush kelibsiz!</h1>')
    } else {
        document.write("<h1 style='text-align: center;'>404 Not Found</h1>")
    }
}