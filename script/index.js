const data = new Date()
// let anoAtual = data.getFullYear()
// console.log(anoAtual)
function entrar() {
    alert('Este estabelecimeento só aceita pessoas maiores de idade.')
    let nome = prompt('Informe seu primeiro nome.')
    let sobrenome = prompt('Informe seu sobrenome.')
    let nascimento = parseInt(prompt('Informe o seu ano de cascimento com quatro dígitos.')) 
    let anoAtual = data.getFullYear()

    let idade =  anoAtual - nascimento

    if (nome.length == 0 || sobrenome.length == 0 || idade.length == 0) {//Verifica se tem algum valor no campo
        alert('Você deixou de preencher algum campo, tente novamente')
    } else {
        if (Number.isInteger(idade)) {//Verifica se a idade é do tipo inteiro
            if (idade >= 18) {//verifica se é maior de idade
                alert(`Muito bem ${nome} ${sobrenome} você tem ${idade} anos e pode adentrar no recinto`)
            } else {
                alert(`Sentimos muito  ${nome} ${sobrenome} você ainda tem ${idade} anos e não pode adentrar no recinto`)
            }
        } else {
            alert('Não existe idade que contenha letras, tente outra novamente')
        }
    }
}