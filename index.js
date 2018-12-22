console.log("Connected");

function toggleCollapseMenu () {
  const nav = document.querySelector('.main-nav');

  nav.classList.toggle('navbar-toggleshow');
}

document.querySelector('.navbar-toggler').addEventListener('click', toggleCollapseMenu);

