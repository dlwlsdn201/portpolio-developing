let toggle = true;
let toggle2 = true;
let menu = true;
let menuDiv = document.getElementById('menuDiv');
let hdiv3 = document.getElementById('hdiv3');
let imgMenu = document.getElementById('imgM');
let i = 0;
let BImg = document.getElementById('BImg');
let num = document.getElementById('num');
let add = document.getElementById('add')
let total = document.getElementById('total');
let a = document.getElementById('a')
let b = document.getElementById('b')

hdiv3.addEventListener('click',function(){
    if(menu){
        menuDiv.style.display = 'flex'
    }
    else{
        menuDiv.style.display = 'none'
    }
    menu=!menu;
})

a.onclick = function(){
    if(toggle){
        a.style.fontWeight = "bold"
        a.style.fontSize = "17px"
        toggle = !toggle;
    }
    else{
        a.style.fontWeight = "500"
        a.style.fontSize = "15px"
        toggle = !toggle;
    }
    b.style.fontWeight = "500"
    b.style.fontSize = "15px"
}

b.onclick = function(){
    if(toggle2){
        b.style.fontWeight = "bold"
        b.style.fontSize = "17px"
        toggle2 = !toggle2;
    }
    else{
        b.style.fontWeight = "500"
        b.style.fontSize = "15px"
        toggle2 = !toggle2;
    }
    a.style.fontWeight = "500"
    a.style.fontSize = "15px"
}
