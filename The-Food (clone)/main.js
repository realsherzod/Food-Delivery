document.addEventListener("DOMContentLoaded", function() {
  var homeIcon = document.querySelector(".ri-home-line");
  if (homeIcon) {
    homeIcon.click();
  }
});

// background color change start
const targetElements2 = document.getElementsByClassName("back-change");
for (let i = 0; i < targetElements2.length; i++) {
  targetElements2[i].setAttribute(
    "data-original-color",
    targetElements2[i].style.backgroundColor
  );
}

const buttons2 = document.getElementsByClassName("back-change");
for (let i = 0; i < buttons2.length; i++) {
  buttons2[i].addEventListener("click", function () {
    const targetElement = targetElements2[i];
    const originalColor = targetElement.getAttribute("data-original-color");

    for (let j = 0; j < targetElements2.length; j++) {
      targetElements2[j].style.backgroundColor = targetElements2[
        j
      ].getAttribute("data-original-color");
    }

    targetElement.style.backgroundColor = "#252836";
  });
}

const targetElements = document.getElementsByClassName("icons");
for (let i = 0; i < targetElements.length; i++) {
  targetElements[i].setAttribute(
    "data-original-color",
    targetElements[i].style.backgroundColor
  );
}

const buttons = document.getElementsByClassName("back-change");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const targetElement = targetElements[i];
    const originalColor = targetElement.getAttribute("data-original-color");

    for (let j = 0; j < targetElements.length; j++) {
      targetElements[j].style.backgroundColor = targetElements[j].getAttribute(
        "data-original-color"
      );
    }

    targetElement.style.backgroundColor = "#ea7c69";
  });
}
// background color change end

// icon color change start

const btn = document.getElementsByClassName("back-change");
const targetElements1 = document.getElementsByClassName("icons-io");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const targetElement = targetElements1[i];
    const originalColor = targetElement.getAttribute("data-original-color");

    for (let j = 0; j < targetElements1.length; j++) {
      targetElements1[j].style.color = targetElements1[j].getAttribute(
        "data-original-color"
      );
    }

    targetElement.style.color = "white";
  });
  targetElements1[i].setAttribute("data-original-color", btn[i].style.color);
}

//icon color change end

// date start
let date = new Date();
data = date.getFullYear();
let now = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
let all = now + " " + data;
document.getElementById("date").innerHTML = all;
// date end

// menu start
const menuItems = document.querySelectorAll(".menu-item");

function changeMenu(index) {
  menuItems.forEach((menuItem, i) => {
    if (i === index) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });
}
// Function to simulate the click event
function simulateClick(element) {
  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    element.dispatchEvent(event);
  } else {
    element.click();
  }
}
// Function to trigger the automatic click on "Hot Dishes"
function autoClickHotDishes() {
  var hotDishesItem = document.querySelector('li[value="All"]');
  simulateClick(hotDishesItem);
}
// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  autoClickHotDishes();
});

// menu end

// order history popup start
const orderhistory = document.getElementById("orderhistory");
const order = document.getElementById("order");
const closeorder = document.getElementById("closeorder");

orderhistory.addEventListener("click", () => {
  order.style.display = "block";
});

closeorder.addEventListener("click", () => {
  order.style.display = "none";
});

// order history popup end

// info popup start
const closeinfo = document.getElementById("closeinfo");
const info = document.getElementById("info");

information.addEventListener("click", () => {
  info.style.display = "block";
});

closeinfo.addEventListener("click", () => {
  info.style.display = "none";
});
// info popup end

// Function to close all popups except the specified one
function closeOtherPopups(exceptPopupId) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    const popupId = popup.id;
    if (popupId !== exceptPopupId && popup.style.display === "block") {
      popup.style.display = "none";
    }
  });
}

// open payment window

const payopen = document.getElementById("payopen");
const payclose = document.getElementById("payclose");
const buy = document.getElementById("buy");
const payment = document.getElementById("pay-inp4");

payclose.addEventListener("click", () => {
  buy.style.display = "none";
  card.style.display = "block";
});

payment.addEventListener("click", () => {
  const homeIcon = document.querySelector(".ri-home-line");

  alert("Your order accepted successfully");
  localStorage.removeItem("listCards");
  listCards = [];
  quantity.innerHTML = 0;
  popup7.style.display = "none";
  buy.style.display = "none";
  card.style.display = "none";
  listCards.innerHTML = "";

  if (homeIcon) {
    homeIcon.click();
  }
});


function openPopup() {
  buy.style.display = "block";
}
function closePopup() {
  buy.style.display = "none";
  popup7.style.display = "none";
}

payopen.addEventListener("click", openPopup);

// close payment window

let closePopupBtn7 = document.getElementById("closePopupBtn7");
let popup7 = document.getElementById("popup7");

closePopupBtn7.addEventListener("click", () => {
  const popup7 = document.getElementById("popup7");
  popup7.style.display = "none";
  
  const homeIcon = document.querySelector(".ri-home-line");
  if (homeIcon) {
    homeIcon.click();
  }
});

const arrow = document.getElementById("order-arrow");
arrow.addEventListener("click", () => {
  popup7.style.display = "none";
});

// ==================================================================
//=======================================================================
//===================================================================
//====================================================================

let closeShopping = document.querySelector(".ri-arrow-left-line");
let closebuy = document.getElementById("payopen");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
closebuy.addEventListener("click", () => {
  buy.style.zIndex = "100";
});

let products = [
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    image: "pizza1.png",
    price: 2.29,
    pricecon: 2.29,
    avialable: 20,
    category: "soup",
    quantity2: 1,
  },
  {
    id: 2,
    name: "Salted Pasta with mushroom sauce",
    image: "pizza2.png",
    price: 2.69,
    pricecon: 2.69,
    avialable: 11,
    category: "cold-dishes",
    category: "grill",
    quantity2: 1,
  },
  {
    id: 3,
    name: "Beef dumpling in hot and sour soup",
    image: "pizza3.png",
    price: 2.99,
    pricecon: 2.99,
    avialable: 16,
    category: "appetizer",
    quantity2: 1,
  },
  {
    id: 4,
    name: "Healthy noodle with spinach leaf",
    image: "pizza4.png",
    price: 3.29,
    pricecon: 3.29,
    avialable: 22,
    category: "grill",
    category: "cold-dishes",
    quantity2: 1,
  },
];

let listCards = [];

function initApp(txt) {
  txt.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="image/${value.image}" class="rasm">
      <div class="title">${value.name}</div>
      <div class="price">${"$" + value.price.toLocaleString()}</div>
      <div class="avialable">${
        value.avialable.toLocaleString() + " " + "Bowls avialable"
      }</div>
      <button class="addbtn" onclick="addToCard(${key})">Add</button">`;
    list.appendChild(newDiv);
  });
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value !== null) {
      // Check if the product exists (not null)
      totalPrice = totalPrice + value.price;
      count = count + 1;
      let newDiv = document.createElement("li");

      newDiv.innerHTML = `
        <div class="pizza-div">
          <div><img class="pizza-image" src="image/${value.image}"/></div>
          <div class="name-text">${value.name}</div>
        </div>
        <div class="price-div">
          <div class="price-item">
            <button class="minusbtn" onclick="changeQuantity(${key}, ${
        value.quantity2 - 1
      })">-</button>
            <div class="count">${value.quantity2}</div>
            <button class="plusbtn" onclick="changeQuantity(${key}, ${
        value.quantity2 + 1
      })">+</button>
          </div>
          <div class="pricees">
          <div class="pricecon">${"$" + value.pricecon}</div>
          <div class="price">${
            "$" + (value.pricecon * value.quantity2).toFixed(2)
          }</div>
          </div>
        </div>
        <div class="comment-div">
          <input class="comment-inp" type="text" placeholder="Order note...">
          <button class="trash-btn" onclick="removeFromCard(${key})"><i class="ri-delete-bin-line"></i></button>
        </div>
      `;

      listCard.appendChild(newDiv);
    }
  });

  total.innerText = `$ ${totalPrice.toFixed(2)}`;
  quantity.innerText = count;
}

function changeQuantity(key, quantity1) {
  if (quantity1 == 0) {
    delete listCards[key];
  } else if (quantity1 <= listCards[key].avialable) {
    listCards[key].quantity2 = quantity1;
    listCards[key].price = quantity1 * products[key].price;
  } else if (quantity1 > listCards[key].avialable) {
    alert("You cannot buy more than this avialable");
  }
  reloadCard();
  saveToLocalStorage(); // Save the listCards to localStorage after updating it

  // Check if the cart is empty and hide the card window if it is
  if (isCartEmpty()) {
    card.style.display = "none";
  }
}

function removeFromCard(key) {
  delete listCards[key];
  reloadCard();
  saveToLocalStorage(); // Save the listCards to localStorage after updating it
}

function saveToLocalStorage() {
  localStorage.setItem("listCards", JSON.stringify(listCards));
}

// Load data from localStorage on page load
function loadFromLocalStorage() {
  const storedData = localStorage.getItem("listCards");
  if (storedData) {
    listCards = JSON.parse(storedData);
    reloadCard();
  }
}

// Call the functions to initialize the app and load data from localStorage
initApp(products);
loadFromLocalStorage();

// Function to close all popups
function closeAllPopups() {
  const popups = document.querySelectorAll(".popup, .popup8, .popup7");
  popups.forEach((popup) => {
    popup.style.display = "none";

  });
}
// Shopping popup start
const openShoppingBtn = document.getElementById("openPopupBtn7");
const shoppingPopup = document.getElementById("popup7");
const card = document.getElementById("card");
openShoppingBtn.addEventListener("click", () => {
  if (listCards.some((item) => item !== null)) {
    card.style.display = "block";
  }
});

let shoppingPopupOpen = false;

openShoppingBtn.addEventListener("click", () => {
  // Close popup8 before opening the shopping popup
  const popup8 = document.getElementById("popup8");
  popup8.style.display = "none";

  const homeIcon = document.querySelector(".ri-home-line");
  const shoppingPopup = document.getElementById("popup7");

  // Toggle shopping popup visibility
  if (shoppingPopup.style.display === "block") {
    shoppingPopup.style.display = "none";
    document.body.classList.remove("active");
    shoppingPopupOpen = false;
  } else {
    closeAllPopups();
    shoppingPopup.style.display = "block";
    document.body.classList.add("active");
    shoppingPopupOpen = true;
  }

  if (!shoppingPopupOpen && homeIcon) {
    homeIcon.click();
  }
});

// Shopping popup end

// Icon 1 popup start
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");


openPopupBtn.addEventListener("click", () => {
  info.style.display = "none";
  order.style.display = "none";
  popup8.style.display = "none";
  const homeIcon = document.querySelector(".ri-home-line");

  // Close shopping popup before opening the target popup
  const shoppingPopup = document.getElementById("popup7");
  if (shoppingPopup.style.display === "block") {
    shoppingPopup.style.display = "none";
    document.body.classList.remove("active");
  }

  // Toggle the visibility of the target popup
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
    if (homeIcon) {
      homeIcon.click();
    }
  }
});

// Icon 1 popup end

// Icon 8 popup start
const openPopupBtn8 = document.getElementById("openPopupBtn8");
const popup8 = document.getElementById("popup8");

openPopupBtn8.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
  const shoppingPopup = document.getElementById("popup7");
  const homeIcon = document.querySelector(".ri-home-line");

  // Close shopping popup before opening popup8
  if (shoppingPopup.style.display === "block") {
    shoppingPopup.style.display = "none";
    document.body.classList.remove("active");
  }

  // Toggle popup8
  if (popup8.style.display === "block") {
    popup8.style.display = "none";
    if (homeIcon) {
      homeIcon.click();
    }
  } else {
    closeAllPopups();
    popup8.style.display = "block";
  }
});

// Icon 8 popup end

// Closepop button click event
const closepopButtons = document.querySelectorAll(".closepop-button");
closepopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAllPopups();
    document.body.classList.remove("active");
  });
});

// Function to check if the cart is empty
function isCartEmpty() {
  return listCards.every((item) => item === null);
}

const changeQuantity1 = (key) => {
  listCards[key].quantity2++;
};
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity2 = 0;
  }
  // console.log(listCards[key].quantity2);
  if (listCards[key].quantity2 >= listCards[key].avialable) {
    alert("You cannot buy more than this avialable");
  } else if (listCards[key].quantity2 < listCards[key].avialable) {
    changeQuantity1(key);
  }
  reloadCard();
  saveToLocalStorage();

  if (isCartEmpty()) {
    card.style.display = "none";
  }
  
}

function removeFromCard(key) {
  delete listCards[key];
  reloadCard();

  saveToLocalStorage();
  if (isCartEmpty()) {
    card.style.display = "none";
  }
}

// search function start
function filterLocalStorageItems(searchValue) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  list.innerHTML = "";

  if (filteredProducts.length === 0) {
    let bigdiv = document.createElement("div");
    bigdiv.classList.add("bigdiv");
    let noResultsDiv = document.createElement("div");
    noResultsDiv.textContent = "Product not found";
    noResultsDiv.classList.add("no-results");
    list.appendChild(noResultsDiv);
    list.appendChild(bigdiv);
  } else {
    filteredProducts.forEach((product) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
        <img src="image/${product.image}" class="rasm">
        <div class="title">${product.name}</div>
        <div class="price">${"$" + product.price.toLocaleString()}</div>
        <div class="avialable">${
          product.avialable.toLocaleString() + " " + "Bowls available"
        }</div>
        <button class="addbtn" onclick="addToCard(${product.id})">Add</button>`;
      list.appendChild(newDiv);
    });
  }
}

const searchInput = document.getElementById("myInput");
searchInput.addEventListener("input", function (event) {
  const searchValue = event.target.value.trim(); // Trim whitespace from the input value
  filterLocalStorageItems(searchValue);
});

// search function end

// menu function start
const menuItms = document.querySelectorAll(".menu1 li");
menuItms.forEach((menuItem) => {
  const menuItemValue = menuItem.getAttribute("value");

  menuItem.addEventListener("click", () => {
    list.innerHTML = "";
    console.log(menuItemValue);
    const filteredDishes = products.filter((itm) => {
      return itm.category === menuItemValue;
    });
    menuItms.forEach((menuItem) => menuItem.classList.remove("active"));
    menuItem.classList.add("active");

    if (menuItemValue === "All") {
      initApp(products);
      sorting(products);
    } else {
      initApp(filteredDishes);
      sorting(filteredDishes);
    }
  });
});
// menu function end

// sort products start

let changer = document.querySelectorAll(".changer");
let changerDefault = document.querySelector("#default");
let changer1 = document.querySelectorAll(".changer1");
let changerDefault1 = document.querySelector("#default1");

products.sort((a, b) => {
  list.innerHTML = "";

  const priceA = parseFloat(a.price);
  const priceB = parseFloat(b.price);
  return priceA - priceB;
});
initApp(products);

//Sorting A - Z

function sorting(resultArr) {
  changer[0].addEventListener("click", () => {
    list.innerHTML = "";
    products.sort(function (a, b) {
      const titleA = a.name.toLowerCase();
      const titleB = b.name.toLowerCase();
      return titleA.localeCompare(titleB);
    });
    initApp(resultArr);

    changerDefault.textContent = "A - Z";
  });

  //Sorting Z - A

  changer[1].addEventListener("click", () => {
    list.innerHTML = "";

    products.sort(function (a, b) {
      const titleA = a.name.toLowerCase();
      const titleB = b.name.toLowerCase();
      return titleB.localeCompare(titleA);
    });
    initApp(resultArr);

    changerDefault.textContent = "Z - A";
  });

  changer[2].addEventListener("click", () => {
    list.innerHTML = "";

    products.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceA - priceB;
    });
    initApp(resultArr);

    changerDefault.textContent = "Prices";
  });
}

sorting(products);

changer1.forEach(changer => {
  changer.addEventListener('click', () => {
    changerDefault1.innerHTML = changer.innerHTML;
  })
})

// sorting products end

// dropdown start
const dropdown = document.querySelector("#dropdown");
const arrow11 = document.querySelector("#arrow");
const dropdownOpen = document.querySelector("#dropdownopen");

const dropdown1 = document.querySelector("#dropdown1");
const arrow111 = document.querySelector("#arrow1");
const dropdownOpen1 = document.querySelector("#dropdownopen1");

dropdown.addEventListener("click", () => {
  dropdownOpen.classList.toggle("close");
  arrow11.classList.toggle("transform");
});
dropdown1.addEventListener("click", () => {
  dropdownOpen1.classList.toggle("close");
  arrow111.classList.toggle("transform");
});
// dropdown end

const dessert = document.getElementById("dessert");
dessert.addEventListener("click", () => {
  let newDiv1 = document.createElement("div");
  newDiv1.innerHTML = `
<div class="untext">${`This product is currently unavailable`}</div>
  `;
  list.appendChild(newDiv1);
});
 

const inputt = document.querySelectorAll(".inputt");

inputt.forEach(button => {
  button.addEventListener("click", () => {
    changerDefault1.innerHTML = button.value;
    inputt.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.style.backgroundColor = ""; // Reset other button's color
      }
    });

    button.style.backgroundColor = "#ea7c69"; // Set the clicked button's color
  });
});
const inputt1 = document.querySelectorAll(".pay-div3");

inputt1.forEach(button => {
  button.addEventListener("click", () => {
    inputt1.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.style.backgroundColor = ""; // Reset other button's color
      }
    });

    button.style.backgroundColor = "#ea7c69"; // Set the clicked button's color
  });
});


function validateInput(input) {
  // Remove any non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, '');

  var errorMessage = document.getElementById("errorMessage");

  if (input.value.length === 0) {
      errorMessage.textContent = "";
  } else {
      errorMessage.textContent = isNaN(input.value) ? "Please enter a valid number." : "";
  }
}




const targetElements3 = document.getElementById("delicon1")
targetElements3.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})
const targetElements4 = document.getElementById("delicon2")
targetElements4.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})
const targetElements5 = document.getElementById("delicon3")
targetElements5.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})
const targetElements6 = document.getElementById("openPopupBtn7")
targetElements6.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})
const targetElements7 = document.getElementById("pie")
targetElements7.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})
const targetElements8 = document.getElementById("home")
targetElements8.addEventListener("click", () => {
  order.style.display = "none";
  info.style.display = "none";
})


