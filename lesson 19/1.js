// function btn (){
// let num = Number (prompt('Son kirit '));

// if(num == 0){
//     console.log('Bu son 0!');
// }else if (num > 0){
//     console.log('Bu son noldan katta');
// }else {
// console.log('Bun son manfiy');

// }}
// function btn () {
// let ism = prompt('ismni kirit');

// console.log(ism);

// if(ism == 'MuhammadBobur'){
//     console.log('Bu ism togri');
// }else {
//     console.log('Bu ism notogri');
// }}                  
function btn (){
    let login = document.querySelector('#login').value,
        parol = document.querySelector('#parol').value;

    if(login == 'MuhammadBobur' && parol == '7777') {
         document.write('<h1>Welcome</h1>')
    } else {
        document.write("<h1 style='text-align: center;'>404 Not Found</h1>")
    }
}

// function btn() {
//     let login = document.querySelector('#login').value,
//         parol = document.querySelector('#parol').value;

//     if(login == 'Ziyodbek' && parol == 'Hullas') {
//         document.write('<h1>Hush kelibsiz!</h1>')
//     } else {
//         document.write("<h1 style='text-align: center;'>404 Not Found</h1>")
//     }
// }