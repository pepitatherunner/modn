// Scroll suave para seções ao clicar no botão do herói
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Feedback do formulário
document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  this.reset();
});

// Efeito "header fixo" ao rolar
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
