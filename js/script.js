const menuBtn = document.querySelector(".hamburguer"); //nav
const mobileMenu = document.querySelector(".mobileNav");

const carousel = document.querySelectorAll(".photoGallery"); //artists
const photoOver = document.querySelectorAll(".blockOverlay");
const photoText = document.querySelectorAll(".oBlockText");
const artists = ["Pedro Álvaro", "Duarte Marques", "Ana Martins" , "Josez", "Carla Vento", "Miguel Afonso", "Rodrigo Bruno", "Jzrt", "Bruno Maymone", "dzrt", "Carlos afonso", "Beatriz Beto", "catarina silva"];
const colorsOverlay = ["rgba(226, 160, 65, 0.5)", "rgba(126, 226, 65, 0.5)", "rgba(226, 65, 220, 0.5)", "rgba(226, 65, 65, 0.5)", "rgba(78, 65, 226, 0.5)"]; //order = orange[0],green[1],purple[2],red[3],blue[4]

const shopOver = document.querySelectorAll(".blockOverlay2"); //shop
const itemPrice = document.querySelectorAll(".itemPricing");
const itemPopUp = document.querySelector(".itemPopUp");
const itemImage = document.querySelector(".itemPopUp img");
const itemName = document.querySelectorAll(".itemPricing h4");
const itemPriceP = document.querySelectorAll(".itemPricing p");
const shopItems = [
    {
        imageSrc: "images/caderno.jpg",
        description: "This recycled notebook is a sustainable and environmentally-friendly writing companion. It is created using paper that has been processed from post-consumer waste or recycled materials, reducing the need for fresh paper production and minimizing deforestation. These notebooks often feature covers made from recycled cardboard or other eco-friendly materials.",
        subtitle: "recycled paper 300gm",
    },
    {
        imageSrc: "images/tape mockup.jpg",
        description: "Introducing our innovative sticker tape product—a versatile and convenient solution for all your adhesive needs. This sticker tape is designed to provide a hassle-free way to stick and secure items effortlessly. Whether you're organizing your workspace, crafting, or wrapping gifts, this adhesive tape is a reliable and efficient companion.",
        subtitle: "BIO-DEGRADABLE 5X5CM STICKERS",
    },
    {
        imageSrc: "images/PAPER BAG.jpg",
        description: "Introducing our eco-friendly recycled paper bag, the perfect companion for your sustainable shopping experience. This paper bag is thoughtfully crafted from recycled materials, reducing the demand for new paper production and minimizing environmental impact. Its sturdy construction ensures reliable strength and durability, making it capable of carrying your groceries, clothing ..",
        subtitle: "RECYCLED PAPER BAG 300/GM",
    },
    {
        imageSrc: "images/toolbag.jpg",
        description: "Introducing our recycled gym bag, a sustainable choice for the fitness enthusiast on the go. This bag is crafted from recycled materials, embodying our commitment to environmental responsibility. Its durable design ensures longevity, capable of withstanding the demands of your active lifestyle. With ample storage space and thoughtful compartmentalization, it accommodat ..",
        subtitle: "100% recycled polyester",
    },
    {
        imageSrc: "images/T-shirt 2.jpg",
        description: "Introducing our Organic Cotton T-Shirt, a sustainable and conscious choice for your wardrobe. Crafted from 100% organic cotton, this shirt embodies a commitment to both comfort and environmental responsibility. Grown without synthetic pesticides or fertilizers, organic cotton promotes soil health and reduces the environmental impact associated with conventional cotton.",
        subtitle: "250gsm organic cotton",
    },
    {
        imageSrc: "images/T-shirt 1.jpg",
        description: "Introducing our Organic Cotton T-Shirt, a sustainable and conscious choice for your wardrobe. Crafted from 100% organic cotton, this shirt embodies a commitment to both comfort and environmental responsibility. Grown without synthetic pesticides or fertilizers, organic cotton promotes soil health and reduces the environmental impact associated with conventional cotton.",
        subtitle: "250gsm organic cotton",
    },
    {
        imageSrc: "images/calendario.jpg",
        description:  "Introducing our Recycled Calendar, a thoughtful blend of functionality and sustainability. This calendar is crafted with a commitment to the environment, utilizing recycled materials to minimize its ecological footprint. Each month is a testament to responsible living, featuring recycled paper that otherwise would contribute to waste. The calendar's design is both stylish ..",
        subtitle: "recycled paper 400gm",
    },
    {
        imageSrc: "images/Steel Mugs Minimalistic Mockup.jpg",
        description:   "Introducing our Ceramic Mug, a perfect blend of timeless style and functional elegance. Crafted with precision from high-quality ceramic, this mug offers a delightful way to savor your favorite beverages. The smooth, glazed surface not only adds a touch of sophistication but also makes for easy cleaning. Its sturdy handle provides a comfortable grip, ensuring a pleasurable ..",
        subtitle: "ceramic mug",
    }
];
const popUpTitle = document.querySelector(".card .ticketInformation h1");
const popUpH3 = document.querySelector(".card .ticketInformation h3");
const popUpText = document.querySelector(".card .ticketInformation p");
const popUpBtn = document.querySelectorAll(".card .pricingTicket button");
const popUpPrice = document.querySelector(".card .pricingTicket p");

const cartCounter = document.querySelector(".cartCounter"); //checkout
const cartCounterNumber = document.querySelector(".cartCounterNumber");

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

let currentIndex; //assignign a current index so ONLY the sleected item gets added to the cart

const addToCheckout = () => {
  localStorage.setItem("imgSrc" + currentIndex.toString(), shopItems[currentIndex].imageSrc);
  localStorage.setItem("title" + currentIndex.toString(), itemName[currentIndex].innerText);
  localStorage.setItem("subTitle" + currentIndex.toString(), shopItems[currentIndex].subtitle);
  localStorage.setItem("price" + currentIndex.toString(), itemPriceP[currentIndex].innerText);

  addToCart();
};

for (let i = 0; i < shopOver.length; i++) {
  shopOver[i].addEventListener("click", (event1) => {
    currentIndex = i;   //updtating the current index on click
    itemPopUp.classList.add("visible");
    itemImage.src = shopItems[i].imageSrc;
    popUpTitle.innerText = itemName[i].innerText;
    popUpH3.innerText = shopItems[i].subtitle;
    popUpText.innerText = shopItems[i].description;
    popUpPrice.innerText = itemPriceP[i].innerText;

    switch (i) {
      case 0:
        popUpH3.style.color = "var(--purple)";
        popUpBtn[0].style.backgroundColor = "var(--purple)";
        break;
      case 4:
        popUpH3.style.color = "var(--blue)";
        popUpBtn[0].style.backgroundColor = "var(--blue)";
        break;
      case 7:
        popUpH3.style.color = "var(--green)";
        popUpBtn[0].style.backgroundColor = "var(--green)";
        break;
      case 1:
      case 6:
        popUpH3.style.color = "var(--red)";
        popUpBtn[0].style.backgroundColor = "var(--red)";
        break;
      default:
        popUpH3.style.color = "var(--orange)";
        popUpBtn[0].style.backgroundColor = "var(--orange)";
    }
  });
}

popUpBtn[0].addEventListener("click", addToCheckout);

itemPopUp.addEventListener("click", (event) => {
    if (event.target === itemPopUp) {
        itemPopUp.classList.remove("visible");
    }
})
}

const addToCart = () => {
    cartCounter.style.display = "flex";
    cartCounterNumber.style.display = "block";

    if (localStorage.length === 0) {
        cartCounter.style.display = "none";
        cartCounterNumber.style.display = "none";
    } else {
        cartCounterNumber.innerText = localStorage.length / 4;
    }
    }

function create(tag, text, className) {   // function that allows us to create tags and add an inner text and class name if needed
    const elem = document.createElement(tag);
    if (text) elem.innerText = text;
    if (className) elem.classList.add(className);
    return elem;
}



function checkoutMechanic() {

let cartItems = [];    // storing on variables the values in the local storage
let total = [];

for (let i = 0; i < localStorage.length; i++) {
    let pushImg  = localStorage.getItem("imgSrc" + [i].toString());
    let pushTitle = localStorage.getItem("title" + [i].toString());
    let pushSub = localStorage.getItem("subTitle" + [i].toString());
    let pushPrice = localStorage.getItem("price" + [i].toString());
    if (pushImg != null) { 
        cartItems.push(
            {
                imageSrc: pushImg,
                itemTitle: pushTitle,
                itemDescription: pushSub,
                itemPrice: pushPrice,
                itemNumber: i,   // Store the number as part of the item object
            }
        );

        let trash = pushPrice.split("");   //Since I didnt separate the € from the numbers before i have to do it here so i can turn my string into a number
        let decimalNumber = trash.join("");
        let number = parseFloat(decimalNumber.replace(',', '.'));
        total.push(number);
    }
    
}

    // Sort cartItems based on itemNumber (so we can delete them after)
    cartItems.sort((a, b) => a.itemNumber - b.itemNumber);


    if (localStorage.length >= 1) {
        let checkoutBar = document.querySelector(".checkoutPricing");
        checkoutBar.style.display = "block";
    }

    let totalDisplay = 0;

    for (let i = 0; i < total.length; i++) {  //sum of all the product value
        totalDisplay += total[i];
      }
    
    let totalContainer = document.getElementById("totalValue"); 
    totalContainer.innerText = totalDisplay.toFixed(2) + " €";

    for (let i = 0; i < (localStorage.length / 4); i++) {      // localStorage.length / 4 because every item has 4 items stored

        const checkoutWrapper = document.querySelector(".checkoutWrapper");
        const itemContainer = create("div", null, "itemContainer");
        const checkoutImage = create("img");
        checkoutImage.src = cartItems[i].imageSrc;
        const checkoutInfo = create("div", null, "checkoutInfo");
        const span1 = create("span");
        const checkoutName = create("h2", cartItems[i].itemTitle);
        const checkoutSub = create("h3", cartItems[i].itemDescription);
        const x = create("span", "x", "itemDelete")
        const span2 = create("span", null, "bottomInfo");
        const span2_1 = create("span");
        const amount = create("p", "Amount:");
        const minus = create("p", "\u2212"); //unicode in js for -
        const count = create("p", "1");
        const plus = create("p", "\u002B"); //unicode in js for +
        const value = create("p", cartItems[i].itemPrice);


        let quantity = 1;
        let retain = total[i]; //to retain the inital value

        minus.addEventListener("click", () => {     // altering the quantity
            if (quantity == 1) {
                quantity = 1;
            } else {
                quantity--;
                total[i] = total[i] - retain;
                count.innerText = quantity;
                value.innerText = total[i].toFixed(2) + "€";

                totalDisplay = totalDisplay - retain;
                totalContainer.innerText = totalDisplay.toFixed(2) + " €";  
            }

        })

        plus.addEventListener("click", () => {    // altering the quantity
            if (quantity == 10) {
                quantity = 10;
            } else {
                quantity++;
                total[i] = total[i] + retain;
                count.innerText = quantity;
                value.innerText = total[i].toFixed(2) + "€";

                totalDisplay =  totalDisplay + retain;
                totalContainer.innerText = totalDisplay.toFixed(2) + " €";    
            }
        })

        x.addEventListener("click", () => {      // deleting items
            itemContainer.style.display = "none";
            totalDisplay = totalDisplay - total[i];
            totalContainer.innerText = totalDisplay.toFixed(2) + " €";
            localStorage.removeItem("imgSrc" + cartItems[i].itemNumber); //removing the items from the local storage (using the item number to identify them)
            localStorage.removeItem("title" + cartItems[i].itemNumber);
            localStorage.removeItem("subTitle" + cartItems[i].itemNumber);
            localStorage.removeItem("price" + cartItems[i].itemNumber);
        })


        checkoutWrapper.appendChild(itemContainer);   // creating items
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
};

window.addEventListener('load', function () {
    if (!window.location.pathname.endsWith('checkout.html')) {  //so the add to cart function doesnt mess with the checkout mechanic
        addToCart();
    }
});