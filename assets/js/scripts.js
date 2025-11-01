// Stop resize animations
let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const nav = document.querySelector('nav');

  // Function to highlight the active link
  function updateActiveLink() {
    const currentHash = window.location.hash;
    const navLinks = navMenu.querySelectorAll('a');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });
  }

  // Run the function on page load
  updateActiveLink();

  // Listen for hash changes
  window.addEventListener('hashchange', updateActiveLink);

  // Toggle nav bar from top to side
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });

  // Hide Side Bar when List Clicked
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('show');
      menuToggle.classList.remove('open');
    }
  });

  // Close the menu if clicking outside the menu
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navMenu.classList.contains('show') && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('show');
      menuToggle.classList.remove('open');
    }
  });
});

/*
// JavaScript to dynamically adjust section padding based on header height
document.addEventListener('DOMContentLoaded', function() {
  const headerHeight = document.querySelector('header').offsetHeight;
  const sections = document.querySelectorAll('section');
  console.log(headerHeight);
  
  sections.forEach(section => {
    section.style.paddingTop = `${headerHeight}px`; // Add extra spacing if needed
  });
});
*/
