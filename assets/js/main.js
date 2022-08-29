// =============== INITIAL SETTINGS ===============
window.addEventListener('scroll', onScroll)
const bodyElement = document.body

function onScroll() {

    const menu = document.querySelector('#header')
    const AlreadyHaveClass = menu.classList.contains('fixed-menu')

    if((scrollY > 10) && (!AlreadyHaveClass)) {
        changeColorMenuOnScroll(menu)
    }

    if((scrollY <= 0) && (AlreadyHaveClass)){
        menu.classList.remove('fixed-menu')
    }
}

// =============== MENU ===============
(function activeMenuOnCurrentPage(){
    const page = `/SavPetsFrontend/panel.html${location.pathname}`

    const headerListOption = document.querySelector(`.header-list_option[href="${page}"]`)
    if(headerListOption.textContent == 'cadastre-se') {
        headerListOption.classList.add('menu-active-btn')
    }
    headerListOption.classList.add('menu-active')
})()

function changeColorMenuOnScroll(menu) {
    menu.classList.add('fixed-menu')
}

const burger = document.querySelector('.burger')
const menuMobile = document.querySelector('.menu-mobile')

burger.addEventListener('click', () => openMobileMenu(burger))

function openMobileMenu(burger){
    burger.classList.toggle('open')
    menuMobile.classList.toggle('active-menu-mobile')
    bodyElement.classList.toggle('active-menu-mobile')
}
