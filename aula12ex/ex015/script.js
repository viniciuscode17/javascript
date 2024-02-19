function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src', 'criançaHomem.jpg')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'HomemJovem.jpg')
            } else if (idade < 42) {
                //adulto
                img.setAttribute('src', 'HomemAdulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'IdosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //criança 
                img.setAttribute('src', 'criançaMulher.jpg')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'MulherJovem.jpg')
            } else if (idade < 42) {
                //adulto
                img.setAttribute('src', 'MulherAdulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'IdosoMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}