// Verifica se a página atual corresponde à página desejada
if (window.location.href.includes("Uniformes.html")) {
  // Seletor para os elementos que você deseja esconder
  var elementosParaEsconder = document.querySelectorAll('.');
  document.getElementById('unico').style.display = 'none';
  // Oculta os elementos selecionados
  elementosParaEsconder.forEach(function(elemento) {
      elemento.style.display = 'hidden';
  });
}
