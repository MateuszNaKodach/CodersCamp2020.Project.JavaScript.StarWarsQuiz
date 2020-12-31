export const Logo = () => {
  const logo = document.createElement('img');
  logo.src = '../../../static/assets/ui/StarWarsLogo.png';
  logo.href = '.';
  logo.id = 'logo';
  logo.classList.add('logo');
  logo.addEventListener('click', function (event) {
    event.preventDefault();
    window.location = this.href;
  });
  return logo;
};
