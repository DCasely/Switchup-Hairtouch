const homeLink = document.querySelector('.home-link');
const pricingLink = document.querySelector('.pricing-link');
const contactLink = document.querySelector('.contact-link');

document.addEventListener('scroll', () => {
  let vertical = window.scrollY;
  console.log(vertical);

  // Home Link
  vertical < 500
    ? homeLink.classList.add('highlighted')
    : homeLink.classList.remove('highlighted');

  // Pricing Link
  if (vertical > 500 && vertical < 3000) {
    pricingLink.classList.add('highlighted');
  } else if (vertical < 500 || vertical > 3000) {
    pricingLink.classList.remove('highlighted');
  }

  // Contact Link
  vertical > 3000
    ? contactLink.classList.add('highlighted')
    : contactLink.classList.remove('highlighted');
});
