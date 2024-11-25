// Wait for the document to fully load before executing the code
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav__links');
  
    // When the menu toggle button is clicked, toggle the visibility of the nav links
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Smooth scrolling when a link is clicked
    const links = document.querySelectorAll('.nav__links a');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjusting for the header height
          behavior: 'smooth'
        });
      });
    });
  
    // Sticky navigation bar functionality
    const navbar = document.querySelector('nav');
    const stickyNav = navbar.offsetTop;
  
    window.onscroll = function () {
      if (window.pageYOffset >= stickyNav) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };
  
    // Button hover effect - adds a subtle scale effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-in-out';
      });
      button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
      });
    });
  });
  