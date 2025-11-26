function inserirTitulo() {
  // pega o valor digitado no input
  const valor = document.getElementById('txt-titulo').value;

  // pega o h1 pelo id
  const h1 = document.getElementById('titulo');

  // insere o texto e altera a cor
  h1.innerText = valor;
  h1.style.color = 'blue';
}