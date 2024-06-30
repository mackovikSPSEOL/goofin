let koste = 0;
let scroll_koste = 0;
scroll_koste = window.scrollY;

window.addEventListener('scroll', function() {
    scroll_koste = window.scrollY;
    console.log(scroll_koste);
});

function skripticek(){
    koste = koste + 1;
    
    if (koste == 1){
        document.querySelector('#button-container').style = 'opacity: 0.1;';
        document.querySelector('#behind-button').style = 'opacity: 1';
    }
    else{
        document.querySelector('#button-container').style = 'opacity: 1;';
        koste = 0;
        document.querySelector('#behind-button').style = 'opacity: 0';
    }
}