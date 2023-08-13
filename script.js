window.onload = function() {
    document.querySelector('.backToTop').style.display = 'none';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        loadColorScheme(1);
    } else {
        loadColorScheme(0);
    }
}

const loadColorScheme = (scheme) => {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
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