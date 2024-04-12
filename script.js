
/* *** CRIA UM EFEITO DE ROLAGEM SUAVE AO CLICAR NOS LINKS DA PÁGINA *** */
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

/* *** ATUALIZA O ANO NO RODAPÉ DO SITE *** */
document.getElementById("ano-atual").textContent = new Date().getFullYear();


function mostrarConteudo(conteudo) {
  var divsImagens = document.querySelectorAll('.imagem-texto > div');
  divsImagens.forEach(function (div) {
    div.style.display = 'none';
  });

  var divSelecionada = document.querySelector('.' + conteudo);
  divSelecionada.style.display = 'block';

  var menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(function (item) {
    item.classList.remove('active');
  });

  var itemClicado = document.querySelector('[onclick="mostrarConteudo(\'' + conteudo + '\')"]');
  itemClicado.classList.add('active');
}

function toggleAnswer(id) {
  var answer = document.getElementById(id + '-answer');
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
  } else {
    answer.style.display = 'none';
  }
}



