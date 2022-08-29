// =============== MENU ===============
(function activeMenuOnCurrentPage(){
    const page = `./${document.body.classList}.html`
    const headerListOption = document.querySelector(`.header-content_menu a[href="${page}"]`)
    
    headerListOption.classList.add('menu-management-active')
})()