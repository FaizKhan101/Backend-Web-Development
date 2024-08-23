const drawerBtnElement = document.getElementById("drawer-btn")
const mobileMenuElement = document.getElementById("mobile-drawer")

function toggleDrawer() {
    mobileMenuElement.classList.toggle('open')
}

drawerBtnElement.addEventListener("click", toggleDrawer)