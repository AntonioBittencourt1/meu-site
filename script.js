const botao = document.getElementById('meuBotao');

botao.addEventListener('click', function() {
  const divMensagem = document.getElementById('mensagem');
  divMensagem.innerHTML = 'Seja bem-vindo! Você consegue conquistar seus objetivos!';
});
