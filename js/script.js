const menuBtn = document.querySelector(".hamburguer");
const mobileMenu = document.querySelector(".mobileNav");
const carousel = document.querySelectorAll(".photoGallery");

let isDragStart = false, prevPageX, prevScrollLeft;

for (let i = 0; i < carousel.length; i++) {  // carousel
    const dragStart = (e) => {
        // updating global vars on mouse down
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel[i].scrollLeft;
    }
    
    const dragging = (e) => {
        // scrolling to left acording to mouse pointer
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel[i].scrollLeft = prevScrollLeft - positionDiff;
    }
    
    const dragStop = (e) => {
        isDragStart = false;
    }
    
    carousel[i].addEventListener("mousedown", dragStart);
    carousel[i].addEventListener("touchstart", dragStart);
    
    carousel[i].addEventListener("mousemove", dragging);
    carousel[i].addEventListener("touchmove", dragging);
    
    carousel[i].addEventListener("mouseup", dragStop);
    carousel[i].addEventListener("touchend", dragStop);
}


menuBtn.addEventListener("click", () => { //hamburguer menu
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active")
});