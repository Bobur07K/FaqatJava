document.querySelector('.tb').innerHTML = '';

document.querySelector('.btn-success').onclick = function(){
    let name = document.querySelector('#input1').value,
        age = document.querySelector('#input2').value,
        job = document.querySelector('#input3').value;

    if(name !== '' && age !== null && job !== ''){
        let user = {
            ism: name,
            yosh: age,
            kasb: job 
        };
    
    
            console.log(user);
            document.querySelector('.tb').innerHTML += '<tr><td>' + user.ism + '</td><td>' + user.yosh + '</td><td>' + user.kasb + '</td></tr>'
    
            document.querySelector('#input1').value = '';
            document.querySelector('#input2').value = null;
            document.querySelector('#input3').value = '';
    } else {
        alert('Bironta input bosh qolmasin!');
    }

}