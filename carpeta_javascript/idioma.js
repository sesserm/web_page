function display_both_divs() {
    Array.from(document.getElementsByClassName('contenedor-idiomas')).forEach(e => e.setAttribute('style','display:flex'));
    Array.from(document.getElementsByClassName('loading-box')).forEach(e => e.setAttribute('style','display:none'));
    
}