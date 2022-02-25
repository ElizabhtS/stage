const h2Text = document.querySelector('.print-text');
let text = 'Контакты';
let speed = 300;
let i = 0;
function printText (){
    if (i < text.length){
        h2Text.innerHTML += text.charAt(i);
        i++;
        setTimeout (printText,speed);
    }
}
printText()