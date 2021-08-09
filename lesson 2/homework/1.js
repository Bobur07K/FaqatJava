let admin = [

];

for(let i=0; i<admin.length; i++){
    let name= admin[i].name;
    document.querySelector('#tb').innerHTML += '<tr><td>'+admin[i].name+'</td><td>'+admin[i].age+'</td><td>'+admin[i].job+'</td><td><button class="btn btn-success" onclick="deleteUser(\''+name+'\')">DELETE</button></td></tr>'
}
document.querySelector('.btn-info').onclick = function(){
    let ism = document.querySelector('#name').value,
        yosh = document.querySelector('#age').value,
        kasb = document.querySelector('#job').value,
        user = {
            name:ism,
            age:yosh,
            job:kasb
        };

        if(ism !=='' && yosh !==null && kasb !==''){
            admin.push(user);
            document.querySelector('#tb').innerHTML = '';
            for(let i = 0; i<admin.length; i++){
                let name = admin[i].name;
                document.querySelector('#tb').innerHTML += '<tr><td>'+admin[i].name+'</td><td>'+admin[i].age+'</td><td>'+admin[i].job+'</td><td><button class="btn btn-success" onclick="deleteUser(\''+name+'\')">DELETE</button></td></tr>'
            }
            document.querySelector('#name').value = '';
            document.querySelector('#age').value = null;
            document.querySelector('#job').value = '';
        }else {
            alert('Inputlar bosh!')
        }
}
function deleteUser(ism){
    let userarr = [];
    for(let a=0; a<admin.length; a++){
        if(admin[a].name ==ism){
            console.log();
            delete admin[a];
            alert('Yaratilgan user o"chirildi')
        }else {
            userarr.push(admin[a]);
            console.log(userarr);
        }
    };
    document.querySelector('#tb').innerHTML ='';
    for(let a=0; a<userarr.length; a++){
        document.querySelector('#tb').innerHTML += '<tr><td>'+userarr[a].name+'</td><td>'+userarr[a].age+'</td><td>'+userarr[a].job+'</td><td><button class="btn btn-success" onclick="deleteUser(\''+name+'\')">DELETE</button></td></tr>'
    }
    admin=userarr
}0