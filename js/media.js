var nota1 = parseFloat(prompt('Informe a primeira nota?'))
var nota2 = parseFloat(prompt('Informe a segunda nota? '))
var nota3 = parseFloat(prompt('Informa a terceira nota?'))

var media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    alert('Aluno aprovado com média '+media)
}else {
    alert('Aluno reprovado com média '+media)
}