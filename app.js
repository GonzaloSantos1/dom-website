// SELECTORS
const header$$ = document.getElementsByTagName('header')[0];
const navList = ['Live Streams', 'Tournaments', 'About Us', 'Contact'];

// EVENT LISTENERS
headerNavbar();

// FUNCTIONS
function headerNavbar() {
  //Logo div
  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo-container');
  header$$.appendChild(logoDiv);
  //Navbar div
  const navbarDiv = document.createElement('div');
  navbarDiv.classList.add('navbar-container');
  header$$.appendChild(navbarDiv);
  //Navbar div ul
  const navbarUl = document.createElement('ul');
  navbarUl.classList.add('navbar-menu');
  navbarDiv.appendChild(navbarUl);
  //Navbar div ul li
  for (i = 0; i < navList.length; i++) {
    const navbarLi = document.createElement('li');
    navbarLi.textContent = navList[i];
    navbarUl.appendChild(navbarLi);
  }
}
