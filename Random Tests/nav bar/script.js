const bars = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-links');

bars.addEventListener('click', () => {
  bars.classList.toggle('change');
  if(navLinks.style.display === 'block'){
    navLinks.style.display = 'none';
  }else {
    navLinks.style.display = 'block';
  }

});
