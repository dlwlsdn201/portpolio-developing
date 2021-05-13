<<<<<<< HEAD
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

window.onload = function(){
    for( i = 0; i < imgMenu.children.length; i++){
        imgMenu.children[i].addEventListener('click',function(){
            for(let j = 0; j < imgMenu.children.length; j++){
                imgMenu.children[j].style.border = '1px solid white'
            }
            setTimeout(()=>{
                BImg.src = `${this.id}.jpeg`
                this.style.border = '1px solid rgb(224, 224, 224)'
            },1)
        })
    }
}

num.onchange = function(e){
    total.innerText = `TOTAL : ${e.target.value * 490000} KRW`
}

add.onclick = function(){
    alert('장바구니에 담겼습니다.')
    total.innerText = `TOTAL : 490000 KRW`
    num.value = ""
}
let toggle = true;
let toggle2 = true;

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
=======
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

window.onload = function(){
    for( i = 0; i < imgMenu.children.length; i++){
        imgMenu.children[i].addEventListener('click',function(){
            for(let j = 0; j < imgMenu.children.length; j++){
                imgMenu.children[j].style.border = '1px solid white'
            }
            setTimeout(()=>{
                BImg.src = `${this.id}.jpeg`
                this.style.border = '1px solid rgb(224, 224, 224)'
            },1)
        })
    }
}

num.onchange = function(e){
    total.innerText = `TOTAL : ${e.target.value * 490000} KRW`
}

add.onclick = function(){
    alert('장바구니에 담겼습니다.')
    total.innerText = `TOTAL : 490000 KRW`
    num.value = ""
}
let toggle = true;
let toggle2 = true;

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
>>>>>>> 4c1bc80c1462ac7c2441fe49011a283734c83742
