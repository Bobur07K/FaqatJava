// let num = Number(prompt('son kirit')),
//     natija = 0;

// for(let a = 1; a<= num; a++){
//     if(a % 3 == 0){
//         console.log(a);
//         

function Texnologie(marka, rang, ram, Memory){
    return{
        markasi: marka,
        color: rang,
        ozu: ram,
        Joiy: Memory,
    }
}
console.log(Texnologie('Lenovo', 'black', '500GB', '2'));

let texno = Texnologie('acer', 'white', '1TB', '4');

let computers = Texnologie('LINUX', 'red', '800GB', '5')

console.log(texno, computers);