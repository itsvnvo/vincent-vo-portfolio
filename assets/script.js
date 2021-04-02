// Toggles menu
function menuToggle(){
    const menu = document.querySelector('.menuButton')
    const sideMenu = document.querySelector('.sideMenu')
    menu.classList.toggle('active')
    sideMenu.classList.toggle('active')
}