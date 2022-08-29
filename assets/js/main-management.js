// =============== MENU ===============
(function activeMenuOnCurrentPage(){
    const page = `/SavPetsFrontend/panel.html${location.pathname}`
    const headerListOption = document.querySelector(`.header-content_menu a[href="${page}"]`)
    
    headerListOption.classList.add('menu-management-active')
})()