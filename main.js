
// BACK TO TOP
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
};

// MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA
const sections = document.querySelectorAll('section[id]');

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('header nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('header nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
};

window.addEventListener('scroll', () => {
  backToTop();
  activateMenuAtCurrentSection();
});