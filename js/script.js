const menuBtn = document.querySelector(".hamburguer");
const mobileMenu = document.querySelector(".mobileNav")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active")
});
