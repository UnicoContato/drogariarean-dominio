document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('main-header');
const headerBg = document.getElementById('header-bg');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScrollY && currentScroll > 100) {
        header.classList.add('-translate-y-full');
    } else {
        header.classList.remove('-translate-y-full');
    }

    if (currentScroll > 50) {
        headerBg.classList.add('bg-white/90', 'shadow-md');
        headerBg.classList.remove('bg-white/0');
    } else {
        headerBg.classList.remove('bg-white/90', 'shadow-md');
        headerBg.classList.add('bg-white/80');
    }

    lastScrollY = currentScroll;
});

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
        document.body.style.overflow = 'hidden';
        mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    } else {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
        document.body.style.overflow = 'auto';
        mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
    }
}

mobileBtn.addEventListener('click', toggleMenu);

const modal = document.getElementById('privacy-modal');
const modalContent = document.getElementById('modal-content');

function toggleModal() {
    const isHidden = modal.classList.contains('hidden');
    
    if (isHidden) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom').forEach((el) => {
    observer.observe(el);
});