export const Logo = () => {
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.id = 'logo';
  logo.innerHTML = `
    <img src="../../../static/assets/ui/StarWarsLogo.png" class='logo__img' />
    `;

  return logo;
};
