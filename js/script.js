/* =====================================================
   SAFAR NORTH - shared script.js
   Used by ALL 12 pages. It only holds:
     1. Sample prices (fake demo data, in PKR)
     2. Small helper functions every page uses
   Each page's own logic is inside that page,
   in a <script> at the bottom of the HTML file.
   ===================================================== */


/* ---------- 1. SAMPLE DATA (demo prices in PKR) ---------- */

// Local cost per person at each destination (jeeps, entry tickets, guide)
const destinationPrices = {
  "Hunza Valley": 12000,
  "Skardu": 15000,
  "Naran Kaghan": 6000
};

// Package price per person, and how many nights it lasts
const packages = {
  "Basic":     { price: 20000, nights: 3 },
  "Comfort":   { price: 35000, nights: 5 },
  "Adventure": { price: 48000, nights: 6 }
};

// Return (two-way) coach fare per person from each city
const cityFares = {
  "Islamabad": 6000,
  "Rawalpindi": 6000,
  "Peshawar": 9000,
  "Lahore": 12000,
  "Faisalabad": 13000,
  "Multan": 16000,
  "Karachi": 30000
};


/* ---------- 2. HELPER FUNCTIONS ---------- */

// Save a value in the browser's memory (localStorage)
function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Read a value back. If nothing is saved, give back the "empty" value.
function getData(key, empty) {
  let text = localStorage.getItem(key);
  if (text == null) {
    return empty;
  }
  return JSON.parse(text);
}

// Turn 45000 into "PKR 45,000"
function pkr(amount) {
  return "PKR " + amount.toLocaleString("en-US");
}

// Open and close the menu on phones
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("open");
}

// Show how many items are in the cart (number next to "Cart" in the menu)
function updateCartCount() {
  let cart = getData("cart", []);
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count = count + cart[i].qty;
  }
  document.getElementById("cart-count").innerText = count;
}

// Total price of everything in the cart
function cartTotal() {
  let cart = getData("cart", []);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].qty;
  }
  return total;
}

// "Start Over" button in the footer: clears all demo data
function startOver() {
  if (confirm("Clear your demo trip, cart and details and start again?")) {
    localStorage.removeItem("trip");
    localStorage.removeItem("cart");
    localStorage.removeItem("customer");
    localStorage.removeItem("booking");
    window.location.href = "index.html";
  }
}

// Runs on every page
updateCartCount();
