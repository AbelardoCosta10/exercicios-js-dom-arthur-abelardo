function mudarForma() {
  const forma = document.getElementById('forma');
  const botao = document.getElementById('btn-forma');

  // verifica o estado atual via style.borderRadius (ou calcula pelo valor atual)
  const radius = forma.style.borderRadius || getComputedStyle(forma).borderRadius;

  // se estiver em 50% (círculo) -> faz quadrado; caso contrário volta a 50%
  if (radius === '50%' || radius === '50% 50% 50% 50%') {
    forma.style.borderRadius = '0%';
    botao.innerText = 'Retornar forma original';
  } else {
    forma.style.borderRadius = '50%';
    botao.innerText = 'Mudar forma';
  }
}