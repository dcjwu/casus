const burgerButton = document.getElementById("burger_btn")
const menu = document.getElementById("menu")
const menuChildren = document.querySelectorAll("#menu a")

burgerButton.addEventListener("click", () => {
    if (menu.className === "burger-menu") {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = ""
    }

    burgerButton.classList.toggle("active")
    menu.classList.toggle("active")
})

menuChildren.forEach(item => {
    item.addEventListener("click", () => {
        if (menu.className === "burger-menu") {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        burgerButton.classList.remove("active")
        menu.classList.remove("active")
    })
})

const serviceBtn = document.querySelectorAll(".services__list-item")

serviceBtn.forEach(item => {
    item.addEventListener("click", () => {
        const activeElem = document.querySelector(".services__list-item.active")
        activeElem.classList.remove("active")
        const activeElemAttr = activeElem.getAttribute("data-click")
        document.querySelector(`[data-show=${activeElemAttr}]`).classList.remove("active")

        const attr = item.getAttribute("data-click")
        item.classList.add("active")
        document.querySelector(`[data-show=${attr}]`).classList.add("active")
    })
})
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const email = data.get("email")
    const name = data.get("name")
    const message = data.get("message")
})
