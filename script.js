
// ======== Modo Alto Contraste ========
const btnAcessibilidade = document.getElementById('btnAcessibilidade');

btnAcessibilidade.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');

  const ativado = document.body.classList.contains('high-contrast');
  btnAcessibilidade.setAttribute('aria-pressed', ativado ? 'true' : 'false');
  btnAcessibilidade.setAttribute(
    'aria-label',
    ativado ? 'Desativar modo alto contraste' : 'Ativar modo alto contraste'
  );
});

// ======== Controle do Menu Ativo + Scroll Suave ========
const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o salto brusco (pode remover se quiser o padrão)

    // Remover "active" de todos
    menuBtns.forEach((b) => b.classList.remove('active'));

    // Adicionar "active" ao clicado
    btn.classList.add('active');

    // Scroll suave até a seção
    const href = btn.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ======== Controle de Tamanho da Fonte ========
const btnFonteAumentar = document.getElementById('btnFonteAumentar');
const btnFonteDiminuir = document.getElementById('btnFonteDiminuir');

let fontSize = 16; // Tamanho inicial em px
const minFontSize = 12;
const maxFontSize = 24;

function atualizarFonte() {
  document.body.style.fontSize = fontSize + 'px';
}

btnFonteAumentar.addEventListener('click', () => {
  if (fontSize < maxFontSize) {
    fontSize += 2;
    atualizarFonte();
  }
});

btnFonteDiminuir.addEventListener('click', () => {
  if (fontSize > minFontSize) {
    fontSize -= 2;
    atualizarFonte();
  }
});

// Inicializa fonte no tamanho padrão
atualizarFonte();
const btnVoltarTopo = document.getElementById('btnVoltarTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // mostrar após rolar 200px
    btnVoltarTopo.classList.add('show');
  } else {
    btnVoltarTopo.classList.remove('show');
  }
});

btnVoltarTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
