// document.querySelector('#input1').oninput = function(){
    // console.log(this.value);
    // let in1 = document.querySelector('#input2').value,
    //     in2 = document.querySelector('#input3').value,
    //     in3 = document.querySelector('#input4').value,
    //     in4 = document.querySelector('#input5').value,
    //     in5 = document.querySelector('#input6').value;

        // document.querySelector('#input2').value = this.value;
        // document.querySelector('#input3').value = this.value;
        // document.querySelector('#input4').value = this.value;
        // document.querySelector('#input5').value = this.value;
        // document.querySelector('#input6').value = this.value;
        // in2 = this.value
// }

// document.querySelector('#input').oninput = function(){
    // document.querySelector('#h1').innerHTML = this.value;
    // document.querySelector('#h1').innerHTML = document.querySelector('#input').value;
// }

// document.querySelector('#hullas').onclick = function(){
//     let natija = document.querySelector('#text').value;
//     alert(natija);
//     document.querySelector('#text').value = '';
// };

// document.querySelector('#btn').onclick = function(){
//     let natija = document.querySelector('#input').value;
//     alert(natija);
//     document.querySelector('#input').value = '';
// }

document.querySelector('#btn').onclick = function(){
    let text = document.querySelector('#input').value;
    if(text.length > 10) {
        alert('Siz belgilangan miqdordan ortiqcha belgi kiritdingiz!')
    } else {
        alert('Belgilangan miqdorda belgilar qabul qilingdi!')
    }
    document.querySelector('#input').value = '';
}

