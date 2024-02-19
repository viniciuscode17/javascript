function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
var data2 = new Date()
var minuto = data2.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto}`
if (hora >=0 && hora < 12 ){
    //BOM DIA!
    img.src = 'manha.jpg'
    document.body.style.background = '#D48485'
} else if (hora >=12 && hora <18){
    //BOA TARDE
    img.src = 'tarde.jpg'
    document.body.style.background = '#8A4419'
} else {
    //BOA NOITE
    img.src = 'noite.jpg'
    document.body.style.background = 'darkblue'
}
}