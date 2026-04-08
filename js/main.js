// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  
  
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    htmlElement.classList.add('dark');
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      htmlElement.classList.toggle('dark');
      
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }
  
  
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  
  const typedWordElement = document.querySelector('.typed-word');
  if (typedWordElement) {
    const words = ['Full-Stack Developer', 'DSA Certified', 'Problem Solver', 'Project Builder', 'Real-World Creator'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typedWordElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedWordElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, speed);
    }
    
    typeEffect();
  }
  
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';
      
      if (name && email && message) {
        formStatus.innerHTML = '✨ Thanks ' + name + '! Your message has been sent. I\'ll reply within 24 hours.';
        formStatus.classList.add('text-green-600');
        formStatus.classList.remove('text-red-500');
        contactForm.reset();
        setTimeout(() => { formStatus.innerHTML = ''; }, 4000);
      } else {
        formStatus.innerHTML = '⚠️ Please fill in all fields.';
        formStatus.classList.add('text-red-500');
        setTimeout(() => { formStatus.innerHTML = ''; }, 3000);
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    } else if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    }
  });
});
