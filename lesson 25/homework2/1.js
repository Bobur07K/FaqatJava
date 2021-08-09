document.querySelector('#btn').onclick = function(){
    let name = document.querySelector('#input1').value;
        age = document.querySelector('#input2').value;
        job = document.querySelector('#input3').value;
        
    if(name !== '' && age !== 24 && job !== ''){
    let user ={
        ism:name,
        yosh:age,
        kasbi:job
    };
    document.querySelector('#b').innerHTML += '<div class="col-3"><div class="card bg-secondary text-white text-center"><div class="card-header bg-light"><img class="w-100" src="../../../img/datur.jpg" alt=""></div><div class="cardbody bg-succes"> <p>Name <br><i class="fas fa-arrow-down"></i> <br>'+user.ism+'</p> <p>Age <br><i class="fas fa-arrow-down"></i> <br>'+user.yosh+'</p> <p class="py-3 PILLA1 ">Job <br><i class="fas fa-arrow-down"></i> <br>'+user.kasbi+'</p></div></div></div>'
    // document.querySelector('#ul').innerHTML += '<li>'+'Name: ' + islar +  '</li>'
    // document.querySelector('#ul').innerHTML += '<li>'+'Age: ' + isml +  '</li>'
    // document.querySelector('#ul').innerHTML += '<li>'+'Job: ' + ism +  '</li>'
    // document.querySelector('#img').style = 'text-center'
    // document.querySelector('#ol').innerHTML += '<li>' + 'Name'+ '</li>' + user.ism
    // document.querySelector('#il').innerHTML += '<li>' + 'Age'+ '</li>' + user.yosh 
    // document.querySelector('#ul').innerHTML += '<li>' + 'Job'+ '</li>' + user.kasbi
    // document.querySelector('.card').style = 'background-color: black; color: white;'
            document.querySelector('#input1').value = '',
            document.querySelector('#input2').value = null,
            document.querySelector('#input3').value = '';
    } else {
        alert('Bironta input bosh qolmasin!');
    }
     console.log(name,age, job);
}

        
