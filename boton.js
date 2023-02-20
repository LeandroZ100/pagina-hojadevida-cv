let esconderTexto_btn = document.getElementById('esconderTexto_btn');

let esconderTexto = document.getElementById('esconderTexto');

esconderTexto_btn.addEventListener('click', toggleTexto);

function toggleTexto() {
    esconderTexto.classList.toggle('show');


if(esconderTexto.classList.contains('show')){
esconderTexto_btn.innerHTML = 'Esconder';
}
else{
    esconderTexto_btn.innerHTML = 'Leer Mas';
}
}