tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Roboto', 'serif'],
            },
        }
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    menu.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', menu.classList.contains('menu-open'));
}