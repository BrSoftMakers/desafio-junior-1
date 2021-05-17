const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .link a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}