// =============== MENU ===============
(function activeMenuOnCurrentPage(){
    const page = `.${location.pathname}`
    const headerListOption = document.querySelector(`.header-content_menu a[href="${page}"]`)
    
    headerListOption.classList.add('menu-management-active')
})()