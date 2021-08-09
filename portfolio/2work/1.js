document.querySelector('#btn1').onclick = function(){
    document.querySelector('body').innerHTML=('<div class="container d-flex"><div class="row"><div class="col-3"><button id="btn2" style="font-size: 56px;"><i class="fas fa-angle-double-right"></i></button></div></div>')

    document.querySelector('#btn2').onclick = function(){
        document.querySelector('body').innerHTML = ('<div class="container d-flex"><div class="row"><div style="height:100px;" class="col-3"><button id="btn2" style="font-size: 56px;"><i class="fas fa-angle-double-right"></i></button></div></div><div><div id="tb "></div><div class="row"><div class="col-3"><button><i class="fab fa-instagram"></i></button></div></div><div class="row"><div class="col-3"><button><i style="font-size: 14px;" class="fab fa-facebook"></i></button></div></div><div class="row"><div class="col-3"><button><i class="fab fa-tiktok"></i></button></div></div> </div>')
    };
};