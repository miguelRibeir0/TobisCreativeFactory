const menuBtn = document.querySelector(".hamburguer");
const mobileMenu = document.querySelector(".mobileNav");
const carousel = document.querySelectorAll(".photoGallery");
const photoOver = document.querySelectorAll(".blockOverlay");
const photoText = document.querySelectorAll(".oBlockText");
const shopOver = document.querySelectorAll(".blockOverlay2");
const itemPrice = document.querySelectorAll(".itemPricing");
const itemPopUp = document.querySelector(".itemPopUp");
const itemImage = document.querySelector(".itemPopUp img");
const itemName = document.querySelectorAll(".itemPricing h4");
const itemPriceP = document.querySelectorAll(".itemPricing p");
const popUpTitle = document.querySelector(".card .ticketInformation h1");
const popUpH3 = document.querySelector(".card .ticketInformation h3");
const popUpText = document.querySelector(".card .ticketInformation p");
const popUpBtn = document.querySelector(".card .pricingTicket button");
const popUpPrice = document.querySelector(".card .pricingTicket p");

let artists = ["Pedro Álvaro", "Duarte Marques", "Ana Martins" , "Josez", "Carla Vento", "Miguel Afonso", "Rodrigo Bruno", "Jzrt", "Bruno Maymone", "dzrt", "Carlos afonso", "Beatriz Beto", "catarina silva"];
let colorsOverlay = ["rgba(226, 160, 65, 0.5)", "rgba(126, 226, 65, 0.5)", "rgba(226, 65, 220, 0.5)", "rgba(226, 65, 65, 0.5)", "rgba(78, 65, 226, 0.5)"]; //order = orange[0],green[1],purple[2],red[3],blue[4]
let imageSrcs = ["images/caderno.jpg", "images/tape mockup.jpg", "images/PAPER BAG.jpg", "images/toolbag.jpg", "images/T-shirt 2.jpg", "images/T-shirt 1.jpg", "images/calendario.jpg", "images/Steel Mugs Minimalistic Mockup.jpg"];
let shopText = [
    "This recycled notebook is a sustainable and environmentally-friendly writing companion. It is created using paper that has been processed from post-consumer waste or recycled materials, reducing the need for fresh paper production and minimizing deforestation. These notebooks often feature covers made from recycled cardboard or other eco-friendly materials.",

    "Introducing our innovative sticker tape product—a versatile and convenient solution for all your adhesive needs. This sticker tape is designed to provide a hassle-free way to stick and secure items effortlessly. Whether you're organizing your workspace, crafting, or wrapping gifts, this adhesive tape is a reliable and efficient companion.",

    "Introducing our eco-friendly recycled paper bag, the perfect companion for your sustainable shopping experience. This paper bag is thoughtfully crafted from recycled materials, reducing the demand for new paper production and minimizing environmental impact. Its sturdy construction ensures reliable strength and durability, making it capable of carrying your groceries, clothing ..",

    "Introducing our recycled gym bag, a sustainable choice for the fitness enthusiast on the go. This bag is crafted from recycled materials, embodying our commitment to environmental responsibility. Its durable design ensures longevity, capable of withstanding the demands of your active lifestyle. With ample storage space and thoughtful compartmentalization, it accommodat ..",

    "Introducing our Organic Cotton T-Shirt, a sustainable and conscious choice for your wardrobe. Crafted from 100% organic cotton, this shirt embodies a commitment to both comfort and environmental responsibility. Grown without synthetic pesticides or fertilizers, organic cotton promotes soil health and reduces the environmental impact associated with conventional cotton.",

    "Introducing our Organic Cotton T-Shirt, a sustainable and conscious choice for your wardrobe. Crafted from 100% organic cotton, this shirt embodies a commitment to both comfort and environmental responsibility. Grown without synthetic pesticides or fertilizers, organic cotton promotes soil health and reduces the environmental impact associated with conventional cotton.",

    "Introducing our Recycled Calendar, a thoughtful blend of functionality and sustainability. This calendar is crafted with a commitment to the environment, utilizing recycled materials to minimize its ecological footprint. Each month is a testament to responsible living, featuring recycled paper that otherwise would contribute to waste. The calendar's design is both stylish ..",

    "Introducing our Ceramic Mug, a perfect blend of timeless style and functional elegance. Crafted with precision from high-quality ceramic, this mug offers a delightful way to savor your favorite beverages. The smooth, glazed surface not only adds a touch of sophistication but also makes for easy cleaning. Its sturdy handle provides a comfortable grip, ensuring a pleasurable .."
];
let shopH3 = ["recycled paper 300gm","BIO-DEGRADABLE 5X5CM STICKERS", "RECYCLED PAPER BAG 300/GM", "100% recycled polyester","250gsm organic cotton","250gsm organic cotton","recycled paper 400gm","ceramic mug"];




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
console.log(itemPriceP[3]);

for (let i = 0; i < shopOver.length; i++) {  // block pop up for when you click a shop item
    shopOver[i].addEventListener("click", () => {
        itemPopUp.classList.add("visible");
        itemImage.src = imageSrcs[i];
        popUpTitle.innerText = itemName[i].innerText;
        popUpH3.innerText = shopH3[i];
        popUpText.innerText = shopText[i];
        popUpPrice.innerText = itemPriceP[i].innerText;
        switch (i) {
            case 0:
                popUpH3.style.color = "var(--purple)";
                popUpBtn.style.backgroundColor = "var(--purple)";
                break
            case 4:
                popUpH3.style.color = "var(--blue)";
                popUpBtn.style.backgroundColor = "var(--blue)";
                break
            case 7:
                popUpH3.style.color = "var(--green)";
                popUpBtn.style.backgroundColor = "var(--green)";
                break
            case 1:
            case 6:
                popUpH3.style.color = "var(--red)";
                popUpBtn.style.backgroundColor = "var(--red)";
                break
            default:
                popUpH3.style.color = "var(--orange)";
                popUpBtn.style.backgroundColor = "var(--orange)";
        }

    })
    itemPopUp.addEventListener("click", (event) => {
        if (event.target === itemPopUp) {
            itemPopUp.classList.remove("visible");
        }
    })
}


