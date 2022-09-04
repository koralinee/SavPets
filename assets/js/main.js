// =============== INITIAL SETTINGS ===============
window.addEventListener('scroll', onScroll)
const bodyElement = document.body

function onScroll() {

    const menu = document.querySelector('#header')
    const AlreadyHaveClass = menu.classList.contains('fixed-menu')

    if((scrollY >= 0) && (!AlreadyHaveClass)) {
        changeColorMenuOnScroll(menu)
    }

    if((scrollY <= 0) && (AlreadyHaveClass)){
        menu.classList.remove('fixed-menu')
    }
}

// =============== MENU ===============
(function activeMenuOnCurrentPage(){
    const page = `./${bodyElement.classList}.html`

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
const containerWelcome = document.querySelector('.presentation-container_welcome')

burger.addEventListener('click', () => openMobileMenu(burger))

function openMobileMenu(burger){
    containerWelcome.setAttribute('style', '')
    burger.classList.toggle('open')
    menuMobile.classList.toggle('active-menu-mobile')
    bodyElement.classList.toggle('active-menu-mobile')
}

// =============== SCROLL REVEAL SETTINGS ===============
const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: '800',
    delay: 150
})

scrollReveal.reveal(`
    .presentation-container_welcome,
    .optionshelp-container_title,
    .optionshelp-group_card,
    .about-container,
    .difference-container_description,
    .difference-highlights_item,
    .start-container,
    .contact-container
`)

scrollReveal.reveal(`
    .footer-container
`, {origin: 'top'})