let users = [
    {name: 'Ali', surname: 'Vafa', age: 24, Isman: true, locate:'Usa', telegram:'<a href="https://www.youtube.com/">'},
    {name: 'Rayona', surname: 'Maliyeva', age: 31, Isman: false, locate:'Paris', telegram:'<a href="https://www.youtube.com/">'},
    {name: 'Oyatillo', surname: 'Oripov', age: 55, Isman: true, locate:'UK', telegram:'<a href="https://www.youtube.com/">'},
    {name: 'Rayhon', surname: 'Adbullayeva', age: 74, Isman: false, locate:'Usa', telegram:'<a href="https://www.youtube.com/">'},
    {name: 'Abu Bakr', surname: 'Alimov', age: 14, Isman: true, locate:'Russia', telegram:'<a href="https://www.youtube.com/">'},
    {name: 'Sardor', surname: 'Raximov', age: 44, Isman: true, locate:'Uzbekiston', telegram:'<a href="https://www.youtube.com/">'}


];

for(let i = 0; i<users.length; i++){
    document.querySelector('tbody').innerHTML += '<tr><td>'+(i+1)+'</td><td>'+users[i].name+'</td><td>'+users[i].surname+'</td><td>'+users[i].age+'</td><td>'+users[i].Isman+'</td><td>'+users[i].locate+'</td><td><a href="https://www.t.me/'+users[i].telegram+'<button class="btn btn-info">Go Tg</button></td></tr>'
}

document.querySelector('.btn2').onclick = function(){
    let name = document.querySelector('#name').value,
        surnam = document.querySelector('#Surname').value,
        age = document.querySelector('#age').value,
        locat = document.querySelector('#location').value,
        isman = document.querySelector('#isMan').value
        telegram = document.querySelector('#telegram').value, 
        user = [
            {name:name,
            surname:surnam,
            age:age,
            locate:locat,
            isman:isman,
            telegram:telegram}];
        
        users.push(user);
        // document.querySelector('tbody').innerHTML = '';
    for(let i = 0; i<user.length; i++){
    document.querySelector('#tv').innerHTML += '<tr><td>'+(i+1)+'</td><td>'+user[0].name+'</td><td>'+user[0].surname+'</td><td>'+user[0].age+'</td><td>'+user[0].isman+'</td><td>'+user[0].locate+'</td><td><button class="btn btn-info"><a href="https://t.me/'+user[0].telegram+'">Go Tg</button></td></tr>'   
}
}
