// document.querySelector('#input1','#input2', '#input3').oninput = function(){
//     document.querySelector('#h1').innerHTML = this.value;
//     document.querySelector('#h1').innerHTML = document.querySelector('#input1').value;
// }

// document.querySelector('#input2').oninput = function(){
//     let ism = prompt('malumot');
//     document.querySelector('ul').innerHTML += '<li>'  + ism+ '</li>'
    // document.querySelector('#h2').innerHTML = this.value;
    // document.querySelector('#h2').innerHTML = document.querySelector('#input2').value;
// // }
// alert('first information')


document.querySelector('#btn').onclick = function(){
    let islar = document.querySelector('#input1').value;
    let isml = document.querySelector('#input2').value;
    let ism = document.querySelector('#input3').value;
    
    if('comp1'.length>3){
        document.querySelector('#ul').innerHTML += '<li>'+'Name: ' + islar +  '</li>'
        document.querySelector('#ul').innerHTML += '<li>'+'Age: ' + isml +  '</li>'
        document.querySelector('#ul').innerHTML += '<li>'+'Job: ' + ism +  '</li>'
    }else {
        document.querySelector('#ul').innerHTML += '<li>' + islar +  '</li>'
        document.querySelector('#ul').innerHTML += '<li>' + isml +  '</li>'
        document.querySelector('#ul').innerHTML += '<li>' + ism +  '</li>'
    }
    
    if(islar,isml,ism.length>10){
        alert('Thanks for information')
        console.log('Thanks for information');
    }  else {
        console.log('First enter information');
        alert('First enter informaion')
    }
    
    // if(arr.length>4){
    //     alert('Enter information')
    //     console.log('Enter information');
    // }

    // let arr = ['Name: '+islar,'Age: '+isml,'Job: '+ism];
    // console.log(arr);

    
    function  createComputer(marka, isSsd, ram){
        return {
            Name: marka,
            Age: isSsd,
            Jobe: ram,
        }
    }
    comp1 = createComputer(islar, isml, ism,);
    console.log(comp1);




    // console.log('Object',islar,  isml, ism)
}

document.querySelector('#btn').onclick = function(){
    let name = document.querySelector('#input1').value,
        age = document.querySelector('#input2').value,
        job = document.querySelector('#input3').value;

    if(name !=='' && age !==null && job !==''){
        let user ={
            ism: name,
            yosh: age,
            kasb:job
        };




        console.log(user);
        document.querySelector('#b').innerHTML += ' <div class="col-12"><div class="col-3"><table ><tr><td>'+user.ism+'</td><td>'+user.yosh+'</td><td>'+user.kasb+'</td></tr> </table></div>'
        document.querySelector('#input1').value = '',
        document.querySelector('#input2').value = null,
        document.querySelector('#input3').value = '',
        

        document.querySelector('#input1')
    }else {
        alert('Input bosh yoqi siz 30 yoshdan kichiksiz')
    }
    age
    document.querySelector('#btn2').onclick = function(){
        if(age>30){
            ' <div class="col-12"><div class="col-3"><table ><tr><td>'+name+'</td><td>'+age+'</td><td>'+job+'</td></tr> </table></div>'
        }else{
            alert('30ga etmadingiz')
            document.querySelector('#input1').value = '',
            document.querySelector('#input2').value = null,
            document.querySelector('#input3').value = '';
        }
    }    
}
        
