const moblileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenuElement.classList.toggle('open');
}

mobileMenuElement.addEventListener('click', toggleMobileMenu);