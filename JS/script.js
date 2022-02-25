const h1Text  = document.querySelector('.text');
h1Text.onclick = function(){
    h1Text.textContent = 'Очень рады вас видеть!';
}
const imgItem = document.querySelector('.imgs');
imgItem.onclick = function(){
    let mySrc = imgItem.getAttribute('src');
    if(mySrc === 'img/devushka-maska-stil.jpg'){
        imgItem.setAttribute ('src','img/27aecf48-2c43-5420-b4aa-89cdf493b49f.jpg')
    }else{
        imgItem.setAttribute ('src','img/73f938a0bbfc86869d819aa4dfbf01cb.jpg')
    }
    if(mySrc === 'img/73f938a0bbfc86869d819aa4dfbf01cb.jpg'){
        imgItem.setAttribute ('src','img/devushka-maska-stil.jpg')
}
}

