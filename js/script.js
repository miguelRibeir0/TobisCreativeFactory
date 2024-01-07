const menuBtn = document.querySelector(".hamburguer");
const mobileMenu = document.querySelector(".mobileNav");
const carousel = document.querySelectorAll(".photoGallery");
const photoOver = document.querySelectorAll(".blockOverlay");
const photoText = document.querySelectorAll(".oBlockText");
const shopOver = document.querySelectorAll(".blockOverlay2");
const itemPrice = document.querySelectorAll(".itemPricing");

let artists = ["Pedro Álvaro", "Duarte Marques", "Ana Martins" , "Josez", "Carla Vento", "Miguel Afonso", "Rodrigo Bruno", "Jzrt", "Bruno Maymone", "dzrt", "Carlos afonso", "Beatriz Beto", "catarina silva"];
let colorsOverlay = ["rgba(226, 160, 65, 0.5)", "rgba(126, 226, 65, 0.5)", "rgba(226, 65, 220, 0.5)", "rgba(226, 65, 65, 0.5)", "rgba(78, 65, 226, 0.5)"]; //order = orange[0],green[1],purple[2],red[3],blue[4]

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


for (let i = 0; i < photoOver.length; i++ ) {  //overlay color for the blocks on the artist page
    photoOver[i].addEventListener("mouseover", () => {
        photoOver[i].style.opacity = "100%";
         if (i <= 3) { //defining the block color depending on row
            photoOver[i].style.backgroundColor = colorsOverlay[0];
        } else if (i > 3 && i < 9) {
            photoOver[i].style.backgroundColor = colorsOverlay[1];
        } else {
            photoOver[i].style.backgroundColor = colorsOverlay[2];
        };
        photoText[i].innerText = artists[i];
    })
    photoOver[i].addEventListener("mouseleave", () => {
        photoOver[i].style.opacity = "0%";
    })
}

for (let i = 0; i < shopOver.length; i++) { //overlay color for the blocks on the shop page
    shopOver[i].addEventListener("mouseover", () => {
        shopOver[i].style.opacity = "100%";
        switch (i) {
            case 0:
                shopOver[i].style.backgroundColor = colorsOverlay[2];
                break
            case 4:
                shopOver[i].style.backgroundColor = colorsOverlay[4];
                break
            case 7:
                shopOver[i].style.backgroundColor = colorsOverlay[1];
                break
            case 1:
            case 6:
                shopOver[i].style.backgroundColor = colorsOverlay[3];
                break
            default:
                shopOver[i].style.backgroundColor = colorsOverlay[0];
        }
        
    });
    shopOver[i].addEventListener("mouseleave", () => {
        shopOver[i].style.opacity = "0%";
    })
}