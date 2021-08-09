let user = [


];

document.querySelector('.btn-success').onclick = function(){
    let ism = document.querySelector('#name').value,
        yosh = document.querySelector('#age').value,
        kasb = document.querySelector('#job').value
               if(ism!=='' && yosh!==null && kasb!==''){
            admin = {
                name:ism,
                age:yosh,
                job:kasb,
            }
            ismBormi =false
            for(let a = 0; a < user.length; a++){
                if(user[a].name == ism){
                    ismBormi = true;
                } else {
                    ismBormi = false;
                }
            }
    
            if(ismBormi == false) {
                yoshBormi =false
            for(let a = 0; a < user.length; a++){
                if(user[a].age == yosh){
                    yoshBormi = true;
                } else {
                    yoshBormi = false;
                }
            }
    
            if(yoshBormi == false) {
                user.push(admin);
                console.log(admin);
            } else {
                alert('Bunday yoshli foydalanuvchi bor! Boshqa user kiriting')
            };
                // user.push(admin);
            } else {
                alert('Bunday yoshli foydalanuvchi bor! Boshqa user kiriting')
                
            };
        document.querySelector('#tv').innerHTML = '';
        for(let i =0; i<user.length; i++){
            document.querySelector('#tv').innerHTML += '<tr><td>' + [i+1] + '</td><td>' +user[i].name +'</td><td>' + user[i].age + '</td><td>' + user[i].job + '</td></tr>';
            document.querySelector('#name').value = '',
            document.querySelector('#age').value = null,
            document.querySelector('#job').value = '';
            
        }}else
        alert('inputlar bosh, malumot kiriting')
    };                  

// let users = [


// ];

// document.querySelector('.btn-info').onclick = function(){
//      ism = document.querySelector('#name').value,
//         yosh = document.querySelector('#age').value,
//         kasb = document.querySelector('#job').value
//                if(ism!=='' && yosh>=30 && kasb!==''){
//             admin = {
//                 name:ism,
//                 age:yosh,
//                 job:kasb,
//             }
//             yoshBormi =false
//             for(let a = 0; a < users.length; a++){
//                 if(users[a].age == yosh){
//                     yoshBormi = true;
//                 } else {
//                     yoshBormi = false;
//                 }
//             }
    
//             if(yoshBormi == false) {
//                 users.push(admin);
//             } else {
//                 alert('Bunday yoshli foydalanuvchi bor! Boshqa user kiriting')
//             };
//         document.querySelector('#tv').innerHTML = '';
//         for(let i =0; i<users.length; i++){
//             document.querySelector('#tv').innerHTML += '<tr><td>' + [i+1] + '</td><td>' +users[i].name +'</td><td>' + users[i].age + '</td><td>' + users[i].job + '</td></tr>';
//             document.querySelector('#name').value = '',
//             document.querySelector('#age').value = null,
//             document.querySelector('#job').value = '';
//             console.log(admin);
//         }}else
//         alert('inputlar bosh, malumot kiriting')
//     };    







