window.onload = function() {
    document.querySelector('.backToTop').style.display = 'none';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        loadColorScheme(1);
    } else {
        loadColorScheme(0);
    }
    const navLinks = document.querySelectorAll('.navitem');
        if (window.innerWidth < 600) {
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    document.getElementById('burgers').style.display = 'none';
                    document.getElementById('hamburger').style.display = 'flex';
                });
            });
        }

    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('burgers').style.display = 'block';
        document.getElementById('hamburger').style.display = 'none';
        document.getElementById('navlist').style.backdropFilter = 'blur(5px)';
    });
}

const loadColorScheme = (scheme) => {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (scheme == 1) {
        link.href = 'style_light.css';
    }
    else {
        link.href = 'style_dark.css';
    }
    head.appendChild(link);
}

window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.backToTop');
    
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});