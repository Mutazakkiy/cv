// navbar dan tombol scroll atas
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixnavbar = header.offsetTop;
    const atassc = document.querySelector('#atas-sc');

    if (window.pageYOffset > fixnavbar) {
        header.classList.add('navbar-fixed');
        atassc.classList.remove('hidden');
        atassc.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        atassc.classList.remove('flex');
        atassc.classList.add('hidden');
    }
}

const tombol = document.querySelector('#tombol');
const navmenu = document.querySelector('#nav-menu');

tombol.addEventListener('click', function () {
    tombol.classList.toggle('tombol-aktiv');
    navmenu.classList.toggle('hidden');
})
window.addEventListener('click', function (p) {
    if (p.target != tombol && p.target != navmenu) {
        tombol.classList.remove('tombol-aktiv');
        navmenu.classList.add('hidden');
    }
})
const modedark = document.querySelector('#mode');
const html = document.querySelector('html');
modedark.addEventListener('click', function () {
    if (modedark.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    modedark.checked = true;
} else {

    modedark.checked = false;
}

