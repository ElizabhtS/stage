const h2Text = document.querySelector('.print-text');
let text = 'О нас';
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

const Text = document.querySelector('.print');
let Htext = 'Наши постановки';
let sp = 300;
let r = 0;
function print (){
    if (r < Htext.length){
        Text.innerHTML += Htext.charAt(r);
        r++;
        setTimeout (print,sp);
    }
}
print()