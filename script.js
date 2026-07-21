const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add('is-visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
