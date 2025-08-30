// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger && hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if(targetId && targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navList.classList.remove('open');
        // Highlight active link
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
      }
    }
  });
});
