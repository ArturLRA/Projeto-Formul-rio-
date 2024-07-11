function Enviar(){
    let textoNome = document.getElementById("textoNome").value
    let textoNumero = document.getElementById("textoNumero").value
    let textoSenha = document.getElementById("textoSenha").value
    let textoConfirmarSenha = document.getElementById("textoConfirmarSenha").value
    let termos = document.getElementById('termos')

    let genero = document.querySelector("input[name='genero']:checked").value


if (termos.checked && textoSenha == textoConfirmarSenha) {

    alert('Seu nome é: '+ textoNome + '\n' +
    'Seu nûmero é: ' + textoNumero + '\n' +
    'Sua senha é: ' + textoSenha + '\n' +
    'Seu gênero é: ' + genero + '\n' +
    'Você aceitou os termos de uso.')

    window.location.href='sucessoInscrição.html'

    } else {
        alert('você não aceitou os termos de uso ou errou a senha, tente novamente para completar o cadastro')
    }
}