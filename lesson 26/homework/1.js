document.querySelector('#btn').onclick = function(){
    let a  =  Number(prompt('son kiriting'));
        b = 100,
        c = 10;    
    if(a.length>c){
        alert('togri son')
    }else(a.length>= 100)
        alert('100dan kop son')
    
}    
document.querySelector('#btn2').onclick = function(){
    let k = document.querySelector('#input').value;
    // let k = Number(prompt('son kiriting'));
    if (k > 0 ) {
        alert('musbat')
    }else if (k < 0){
        alert('manfiy')
    } else if (k == 0){
        alert('input bosh')
    // } else if (k == null){
    // alert('input toldiring')
    document.querySelector('#input').value = ''; 
}
}
document.querySelector('#btn3').onclick = function(){
    let m = document.querySelector('#input2').value;
    alert(m.length)
    if (m== null){
        alert('bosh')
    }else if (m== ''){
        alert('bosh')
    }
    document.querySelector('#input2').value = ''; 
};
document.querySelector('#btn4').onclick = function(){
    let u = document.querySelector('#input3').value;
    if(u.length > 10) {
        document.write('<body style=background-color:red; </body>')
        alert('10dan ortiq malumot kiritish mumkin emas')
    } else {
        alert('Belgilangan miqdorda belgilar qabul qilingdi!')
        document.querySelector('#input3').value = '';
    }
    // document.querySelector('#input3').value = '';
}
document.querySelector('#input4').oninput = function(){
    let vl = document.querySelector('#input4').value;
    if(vl.length>10){
        alert('10dan oshmang')
        document.querySelector('#input4').value = '';
    }
};
document.querySelector('#btn5').onclick = function(){
    let name = document.querySelector('#birinchi').value;
        age = document.querySelector('#secondary').value;
        job = document.querySelector('#thirst').value;
        
    if(name !== '' && age !== null && job !== ''){
    let user ={
        ism:name,
        yosh:age,
        kasbi:job
    };     
            document.querySelector('#birinchi').value = '',
            document.querySelector('#secondary').value = null,
            document.querySelector('#thirst').value = '';
    } else {
        alert('Bironta input bosh qolmasin!');
    }
    if(name.length>10){
       alert('10dan oshiq')
    }else if(name.length>0){
        alert('Malumot kirilidi')
    }else {
        alert('1chi inputga malumot kiritimadingiz')
    }
    
    if(age.length>10){
        alert('10dan oshiq')
    }else if(age.length>0){
        alert('Malumot kirilidi')
    }else {
        alert('2chi inputga malumot kiritimadingiz')
    }
    
    if(job.length>10){
        alert('10dan oshiq')
    }else if(job.length>0){
        alert('Malumot kirilidi')
    }else {
        alert('3chi inputga malumot kiritimadingiz')
    }
}     
