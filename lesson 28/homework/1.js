// document.querySelector('#btn').onclick = function(){
//     let num = prompt('son kiririting');
//     for( var i =0; i<num; i++){
//         if(i %2 !==0){
//             // console.log(0);
//             console.log(i);
//         }
//     }
// }



document.querySelector('#btn').onclick = function(){
    let num = document.querySelector('input').value
    i=0;
    for( var i = 3; i<=num; i++){
        if (i%2 !==0){
            alert('togri sonlar')
        }else if (num>1000){
            alert('notogri son')
        }
    }
}            

document.querySelector('#input1').oninput = function(){
    let vl = document.querySelector('#input1').value;
    if(vl.length>10){
        document.write('#card').style = 'background-color: yellow ;'.value
    }else if(vl.length>15){
        document.write('#card').style = 'background-color: black;'.value
    }else if(vl.length>20){
        document.write('#card').style = 'background-color: red;'.value
    }
    }
// document.querySelector('#input1').oninput = function(){
//     let ss = document.querySelector('#input1').value;
//     if(ss.length>15){
//         document.querySelector('#card').style = 'background-color: yellowgreen;'
//     }
// }

// document.querySelector('#input1').oninput = function(){
//     let aa = document.querySelector('#input1').value;
//     if(aa.length>20){
//         document.querySelector('#card').style = 'background-color: red;'
//     }
// }
