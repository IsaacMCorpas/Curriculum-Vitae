
let asociacion_key_sonido={};
document.querySelectorAll('.tecla').forEach(function (tecla) {
    asociacion_key_sonido[tecla.getAttribute('data-key')]=tecla.getAttribute('data-nota');
    tecla.onclick = (function () {
        let tecla = this.getAttribute('data-nota');
        let sonido = document.getElementById('sonido');
        sonido.pause();
        sonido.src = tecla;
        sonido.play();
    });
});
document.onkeydown=function(evnt){
    let tecla=evnt.key;
    let sonido_wav=asociacion_key_sonido[tecla];
    if (sonido_wav) {
        sonido.pause();
        document.getElementById('sonido').src = sonido_wav;
        sonido.play();  
    }}

