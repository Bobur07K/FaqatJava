let user = [

];

for(let i = 0; i<user.length; i++){
    let foydanaluvchi = user[i].name;
    document.querySelector('#tb').innerHTML += '<tr><td>' +user[i].name+'</td><td>'+user[i].age+'</td><td>'+user[i].job+'</td><td><button class="btn-success" onclick delete(\''+foydanaluvchi+'\')>User Del</button></td></tr>'
}
document.querySelector('#btn').onclick = function(){
    let ism = document.querySelector('#name').value;
        yosh = document.querySelector('#age').value;
        kasb = document.querySelector('#job').value;
        users = {
            name:ism,
            age:yosh,
            job:kasb
        };

     if(ism!=='' && yosh!==null && kasb!==''){
         user.push(users);
         document.querySelector('#tb').innerHTML ='';
         for(let a=0; a<user.length; a++){
             let name = user[a].name;
             document.querySelector('#tb').innerHTML += '<tr><td>' +user[a].name+'</td><td>'+user[a].age+'</td><td>'+user[a].job+'</td><td><button class="btn-success btl" onclick="deletei(\''+name+'\')">Del</button></td></tr>'
         }
         document.querySelector('#name').value = '';
         document.querySelector('#age').value = null;
         document.querySelector('#job').value = ''
     }else{
         alert('Malumpt yoq, yoqi inputlarning biri toliq emas')
     }   
}
function deletei(ism){
    let userarr = [];
    for(let a=0; a<user.length; a++){
        if(user[a].name ==ism){
            console.log();
            delete user[a];
            alert('Yaratilgan user o"chirildi')
        }else {
            userarr.push(user[a]);
            console.log(userarr);
        }
    };
    document.querySelector('#tb').innerHTML ='';
    for(let a=0; a<userarr.length; a++){
        document.querySelector('#tb').innerHTML += '<tr><td>'+userarr[a].name+'</td><td>'+userarr[a].age+'</td><td>'+userarr[a].job+'</td><td><button class="btn btn-success" onclick="deleteUser(\''+name+'\')">DELETE</button></td></tr>'
    }
    user=userarr;
}    
