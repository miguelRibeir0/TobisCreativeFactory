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
let windowWidth = window.matchMedia("(min-width: 1151px)");




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
    if (windowWidth.matches) { // media querry
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
}


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
        popUpBtn.addEventListener("click", () => {
            sessionStorage.setItem("imgSrc" + [i].toString(), imageSrcs[i].toString());
            sessionStorage.setItem("title" + [i].toString(), itemName[i].innerText.toString());
            sessionStorage.setItem("subTitle" + [i].toString(), shopH3[i].toString());
            sessionStorage.setItem("price" + [i].toString(), itemPriceP[i].innerText.toString());
        })
    })
    itemPopUp.addEventListener("click", (event) => {
        if (event.target === itemPopUp) {
            itemPopUp.classList.remove("visible");
        }
    })
}



/* NOT DEPLOYED */


const checkoutWrapper = document.querySelector(".checkoutWrapper");

function create(tag, text, className) {   // function that allows us to create tags and add an inner text and class name if needed
    const elem = document.createElement(tag);
    if (text) elem.innerText = text;
    if (className) elem.classList.add(className);
    return elem;
}



function checkoutMechanic() {

    let sessionImg = [];            // storing on variables the values in the session storage
    let sessionTitle = [];
    let sessionSub = [];
    let sessionPrice = [];
    let total = [];

    for (let i = 0; i < sessionStorage.length; i++) {
        let pushImg  = sessionStorage.getItem("imgSrc" + [i].toString());
        let pushTitle = sessionStorage.getItem("title" + [i].toString());
        let pushSub = sessionStorage.getItem("subTitle" + [i].toString());
        let pushPrice = sessionStorage.getItem("price" + [i].toString());
        if (pushImg != null) { 
            sessionImg.push(pushImg);
            sessionTitle.push(pushTitle);
            sessionSub.push(pushSub);
            sessionPrice.push(pushPrice);

            let trash = pushPrice.split("");            //since I didnt separate the € from the numbers before i have to do it here so i can turn my string into a number
            let decimalNumber = trash.join("");
            let number = parseFloat(decimalNumber.replace(',', '.'));
            total.push(number);
        }
        
    }

    for (let i = 0; i < (sessionStorage.length / 4 - 1); i++) {      // sessionStorage.length / 4 because every item has 4 items stored

        let itemContainer = create("div", null, "itemContainer");
        let checkoutImage = create("img");
        checkoutImage.src = sessionImg[i];
        let checkoutInfo = create("div", null, "checkoutInfo");
        let span1 = create("span");
        let checkoutName = create("h2", sessionTitle[i]);
        let checkoutSub = create("h3", sessionSub[i]);
        let x = create("span", "x", "itemDelete")
        let span2 = create("span");
        let span2_1 = create("span");
        let amount = create("p", "Amount:");
        let minus = create("p", "\u2212"); //unicode in js for -
        let count = create("p", "1");
        let plus = create("p", "\u002B"); //unicode in js for +
        let value = create("p", sessionPrice[i]);

        x.addEventListener("click", () => {
            itemContainer.style.display = "none";
            for (let i = 0; i < sessionStorage.length; i ++) {
                sessionStorage.removeItem("imgSrc" + [i].toString());
                sessionStorage.removeItem("title" + [i].toString());
                sessionStorage.removeItem("subTitle" + [i].toString());
                sessionStorage.removeItem("price" + [i].toString());
            }
        })

        checkoutWrapper.appendChild(itemContainer);
            itemContainer.appendChild(checkoutImage);
            itemContainer.appendChild(checkoutInfo);
                checkoutInfo.appendChild(span1);
                    span1.appendChild(checkoutName);
                        checkoutName.appendChild(x);
                    span1.appendChild(checkoutSub);
                checkoutInfo.appendChild(span2);
                    span2.appendChild(span2_1);
                        span2_1.appendChild(amount);
                        span2_1.appendChild(minus);
                        span2_1.appendChild(count);
                        span2_1.appendChild(plus);
                    span2.appendChild(value);
    }
    let totalDisplay = 0;

    for (let i = 0; i < total.length; i++) {
        totalDisplay += total[i];
      }

   let totalContainer = document.getElementById("totalValue"); //sum of all the product value
   totalContainer.innerText = totalDisplay + " €";
};