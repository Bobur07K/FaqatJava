document.querySelector('#in').oninput= function(){
    let color = this.value
    // let fs= document.querySelector('#text').value=this.value
    document.querySelector('#text').value+=color;
}