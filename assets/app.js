// Scroll to form

const scrollTo = document.querySelectorAll('.scroll-to-form');
const form = document.querySelector('#form');

scrollTo.forEach( item => {
  item.addEventListener('click', (e) => {

    e.preventDefault();

    window.scrollTo({
  
      top: form.offsetTop,
      behavior: 'smooth',
  
    });
  
  });
})