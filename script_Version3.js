// Classic theme toggler and fade-in/slide animations for portfolio

function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    document.getElementById('theme-icon').textContent = mode === 'dark' ? '🌞' : '🌙';
}

// Detect system theme on first load
(function() {
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(savedTheme);
})();

document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Fade-in effect for all sections on scroll
const fadeEls = document.querySelectorAll('section, footer, header');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    },
    {
        threshold: 0.1
    }
);
fadeEls.forEach(el => observer.observe(el));