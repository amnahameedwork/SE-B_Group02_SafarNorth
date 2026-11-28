# Student 3: Stay and Gear

**Student 3 name:** Amna Hameed (26I-3058), branch `i263058`  
**Module / feature:** Choose accommodation and optional camping gear for the trip.  
**My three pages:** `accommodation.html`, `camping-shop.html`, `cart.html`

This is one part of **Safar North**, a 12-page demo website for a Northern Pakistan tour company. The whole site is one booking journey: **Discover → Choose a Trip → Stay & Gear → Review & Confirm**. I built step 3.

---

## 1. Horizontal prototype (all 3 pages, full layout)

Redraw these on paper. Rules followed:

- All 3 of my pages are drawn in **desktop view**, top to bottom, as complete pages.
- At least one page is also drawn in **mobile view**.
- The **header, nav bar and footer are exactly the same** on every page. Copy them the same way each time. Only the highlighted menu item changes.
- All text is **real Safar North text**, the same as on the website. There is no placeholder text.
- `[photo: ...]` means a photo box and says which real place the photo shows. `[ Button ]` is a button and `[ ... ▼ ]` is a dropdown.

### Desktop 1: Accommodation (`accommodation.html`)

```text
+--------------------------------------------------------------------------------------------
| HEADER + NAV BAR  (same on every page; current page = Stays)
| [سفر North]    Home   About   Destinations   Packages   Plan a Trip   Stays   Gear   Cart (0)
+--------------------------------------------------------------------------------------------
| BANNER (photo: Hunza Valley from above Baltit Fort)
|                  Choose a Stay
|  A guest house, a hotel or a campsite: or skip this step
+--------------------------------------------------------------------------------------------
| Steps:  (1. Destination) (2. Package) (3. Plan) (4. Stay & Gear) (5. Confirm)   <- steps 1-4 filled in

| [ note ] Prices are per room (or tent) per night. Sample stays. Photos show the area.
|  +--------------------------+  +--------------------------+  +--------------------------+
|  | [area photo: Karimabad,  |  | [area photo: Lower       |  | [area photo: Lake Saiful |
|  |  Hunza]                  |  |  Kachura Lake, Skardu]   |  |  Muluk, Naran]           |
|  | (Guest House · Area photo)| | (Hotel · Area photo)     |  | (Campsite · Area photo)  |
|  | Karimabad Family         |  | Skardu Lakeside Hotel    |  | Naran Riverside Campsite |
|  | Guest House              |  | 📍 Near Kachura, Skardu   |  | 📍 Naran, Kaghan Valley   |
|  | 📍 Karimabad, Hunza       |  | ✓ Restaurant             |  | ✓ Tent and mattress      |
|  | ✓ Home-cooked meals      |  | ✓ Room heating           |  | ✓ Bonfire                |
|  | ✓ Hot water, valley view |  | ✓ Parking                |  | ✓ Shared washrooms       |
|  | PKR 6,500 / night        |  | PKR 12,000 / night       |  | PKR 3,500 / night        |
|  | [ Select ]               |  | [ Select ]               |  | [ Select ]               |
|  +--------------------------+  +--------------------------+  +--------------------------+
|  +--------------------------------------------------------------------------------+
|  | No stay selected yet.                                                          |
|  | [ ← Back to Plan a Trip ]  [ I don't need a stay ]  [ Next: Camping Gear → ]   |
|  +--------------------------------------------------------------------------------+
+--------------------------------------------------------------------------------------------
| FOOTER  (same on every page)
| سفر North                1. Discover        2. Choose a Trip      3. Stay & Gear     4. Review & Confirm
| A student demo of a      Home               Destination Details   Accommodation      Your Details
| Northern Pakistan tour   About Safar North  Travel Packages       Camping Gear       Checkout Summary
| company. No real         Destinations       Plan a Trip           Cart               Confirmation
| bookings or payments.
| 0300-0000000 (demo) · hello@safarnorth.example      [ Start Over ]
| © 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons
+--------------------------------------------------------------------------------------------
```

**What the user does:** The visitor clicks **Select** on a guest house, hotel or campsite. The card gets a brown border and the cost for the package's nights is shown. Or they click **I don't need a stay**. Then **Next: Camping Gear**.

### Desktop 2: Camping Gear (`camping-shop.html`)

```text
+--------------------------------------------------------------------------------------------
| HEADER + NAV BAR  (same on every page; current page = Gear)
| [سفر North]    Home   About   Destinations   Packages   Plan a Trip   Stays   Gear   Cart (0)
+--------------------------------------------------------------------------------------------
| BANNER (photo: Lake Saiful Muluk, Naran)
|                  Camping Gear
|            Optional extras for your trip
+--------------------------------------------------------------------------------------------
| Steps:  (1. Destination) (2. Package) (3. Plan) (4. Stay & Gear) (5. Confirm)   <- steps 1-4 filled in

| (green message appears here: "✓ 3-Person Tent added to your cart. View cart")
|  +--------------------------+  +--------------------------+  +--------------------------+
|  | [photo: dome tent]       |  | [photo: sleeping bag]    |  | [photo: backpacks]       |
|  | 3-Person Tent            |  | Sleeping Bag             |  | Hiking Backpack 50L      |
|  | Waterproof dome tent.    |  | Rated to -5°C.           |  | Padded straps, rain cover|
|  | PKR 14,500               |  | PKR 6,800                |  | PKR 8,900                |
|  | [ Add to Cart ]          |  | [ Add to Cart ]          |  | [ Add to Cart ]          |
|  +--------------------------+  +--------------------------+  +--------------------------+
|  +--------------------------+  +--------------------------+  +--------------------------+
|  | [photo: LED flashlights] |  | [photo: trekking poles]  |  | [photo: steel bottle]    |
|  | LED Flashlight           |  | Trekking Poles (Pair)    |  | Steel Water Bottle       |
|  | PKR 1,800                |  | PKR 4,800                |  | PKR 2,200                |
|  | [ Add to Cart ]          |  | [ Add to Cart ]          |  | [ Add to Cart ]          |
|  +--------------------------+  +--------------------------+  +--------------------------+
| ⚠ Safety tips for the mountains: warm layer at night · drink water · tell your guide
| [ ← Back to Stays ]  [ View Cart → ]
+--------------------------------------------------------------------------------------------
| FOOTER  (same on every page)
| سفر North                1. Discover        2. Choose a Trip      3. Stay & Gear     4. Review & Confirm
| A student demo of a      Home               Destination Details   Accommodation      Your Details
| Northern Pakistan tour   About Safar North  Travel Packages       Camping Gear       Checkout Summary
| company. No real         Destinations       Plan a Trip           Cart               Confirmation
| bookings or payments.
| 0300-0000000 (demo) · hello@safarnorth.example      [ Start Over ]
| © 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons
+--------------------------------------------------------------------------------------------
```

**What the user does:** The visitor clicks **Add to Cart** on items they want. A green message confirms it and the number next to **Cart** goes up. Then **View Cart**.

### Desktop 3: Cart (`cart.html`)

```text
+--------------------------------------------------------------------------------------------
| HEADER + NAV BAR  (same on every page; current page = Cart)
| [سفر North]    Home   About   Destinations   Packages   Plan a Trip   Stays   Gear   Cart (0)
+--------------------------------------------------------------------------------------------
| BANNER (photo: Lower Kachura Lake, Skardu)
|                    Your Cart
|          Camping gear you added to this trip
+--------------------------------------------------------------------------------------------
| Steps:  (1. Destination) (2. Package) (3. Plan) (4. Stay & Gear) (5. Confirm)   <- steps 1-4 filled in

|  +--------------------------------------------------------------------------------+
|  | Item              | Price      | Quantity | Total       |                      |
|  |-------------------+------------+----------+-------------+----------------------|
|  | 3-Person Tent     | PKR 14,500 |  [ 2 ]   | PKR 29,000  | [ Remove ]           |
|  | Sleeping Bag      | PKR 6,800  |  [ 1 ]   | PKR 6,800   | [ Remove ]           |
|  | (red error message here)                                                       |
|  | Gear subtotal ..................................................... PKR 35,800 |
|  +--------------------------------------------------------------------------------+
| [ note ] Change a quantity and the totals update straight away. Gear is optional.
| [ ← Add More Gear ]  [ Back to Planning ]  [ Continue to Your Details → ]
+--------------------------------------------------------------------------------------------
| FOOTER  (same on every page)
| سفر North                1. Discover        2. Choose a Trip      3. Stay & Gear     4. Review & Confirm
| A student demo of a      Home               Destination Details   Accommodation      Your Details
| Northern Pakistan tour   About Safar North  Travel Packages       Camping Gear       Checkout Summary
| company. No real         Destinations       Plan a Trip           Cart               Confirmation
| bookings or payments.
| 0300-0000000 (demo) · hello@safarnorth.example      [ Start Over ]
| © 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons
+--------------------------------------------------------------------------------------------
```

**What the user does:** The visitor changes quantities or removes items and watches the subtotal update, then clicks **Continue to Your Details**.

### Mobile view: Cart (`cart.html`): phone view

On a phone the menu folds into a ☰ button and the columns stack one under another.

```text
+------------------------------------
| HEADER (same on every page)
| [سفر North]                  [☰]
+------------------------------------
| BANNER: Your Cart
+------------------------------------
| Table scrolls sideways  ⇄
| Item         | Qty | Total
| 3-Person Tent| [2] | PKR 29,000
|              [ Remove ]
| Sleeping Bag | [1] | PKR 6,800
|              [ Remove ]
| Gear subtotal ..... PKR 35,800
+------------------------------------
| [ ← Add More Gear ]
| [ Back to Planning ]
| [ Continue to Your Details → ]
| (buttons wrap one under another)
+------------------------------------
| FOOTER (same on every page,
| columns stack one under another)
| سفر North
| A student demo of a Northern
| Pakistan tour company.
| 1. Discover: Home, About,
|    Destinations
| 2. Choose a Trip: Details,
|    Packages, Plan a Trip
| 3. Stay & Gear: Stays, Gear, Cart
| 4. Review & Confirm: Your Details,
|    Checkout, Confirmation
| [ Start Over ]
| © 2026 Safar North
+------------------------------------
```

## 2. Vertical prototype (one feature, step by step)

**Feature:** Add to cart and edit the cart (`camping-shop.html` → `cart.html`)

Draw each state as its own small screen, left to right, with an arrow between them. There are 6 states, including error states (marked ⚠). Under each arrow, write what the user clicks.

### State 1: Camping Gear page, cart empty

```text
+------------------------------------------------------------------+
| HEADER ...................................... Cart (0)           |
| [Tent PKR 14,500 (Add to Cart)] [Sleeping Bag PKR 6,800 (Add)]   |
+------------------------------------------------------------------+
```

⬇ **User action:** User clicks **Add to Cart** on the tent twice and on the sleeping bag once.

### State 2: Items added (message + count)

```text
+------------------------------------------------------------------+
| HEADER ...................................... Cart (3)  <- went up|
| ✓ Sleeping Bag added to your cart. View cart   (green message)   |
| [Tent (Add to Cart)] [Sleeping Bag (Add to Cart)] ...            |
+------------------------------------------------------------------+
```

⬇ **User action:** User clicks **View Cart →**.

### State 3: Cart table

```text
+------------------------------------------------------------------+
| 3-Person Tent | PKR 14,500 | [ 2 ] | PKR 29,000 | [Remove]       |
| Sleeping Bag  | PKR 6,800  | [ 1 ] | PKR 6,800  | [Remove]       |
| Gear subtotal ................................... PKR 35,800     |
+------------------------------------------------------------------+
```

⬇ **User action:** User types **0** in the tent quantity box.

### State 4: ERROR (bad quantity)

```text
+------------------------------------------------------------------+
| 3-Person Tent | PKR 14,500 | [ 2 ] | PKR 29,000 | [Remove]       |
|                               ^ old number put back              |
| Sleeping Bag  | PKR 6,800  | [ 1 ] | PKR 6,800  | [Remove]       |
| ⚠ Quantity must be a whole number from 1 to 10.   (red)          |
| Gear subtotal ................................... PKR 35,800     |
+------------------------------------------------------------------+
```

⬇ **User action:** User changes the sleeping bag quantity to **2** (a valid number).

### State 5: Totals update

```text
+------------------------------------------------------------------+
| 3-Person Tent | PKR 14,500 | [ 2 ] | PKR 29,000 | [Remove]       |
| Sleeping Bag  | PKR 6,800  | [ 2 ] | PKR 13,600 | [Remove]       |
| Gear subtotal ................................... PKR 42,600     |
+------------------------------------------------------------------+
```

⬇ **User action:** User clicks **Remove** on every item.

### State 6: Empty cart

```text
+------------------------------------------------------------------+
| Your cart is empty. Add camping gear  (link)                     |
| Gear subtotal ......................................... PKR 0    |
| HEADER ...................................... Cart (0)           |
+------------------------------------------------------------------+
```

➡ **What happens next:** User can click **Add camping gear** to go back, or **Continue to Your Details →** (gear is optional).

## 3. How my three pages connect

Booking (Student 2) leads here. The stay is saved into the same `trip` object (`trip.stay`, `trip.stayPrice`). Gear goes into a separate `cart` list. The cart page leads to Student 4's **Your Details** page.

## 4. How the feature works

**Stay cost** = price per night × nights. The nights come from the package (Basic 3, Comfort 5, Adventure 6). If no package is chosen yet, the page uses 3 nights.

**Add to Cart** looks through the cart with a `for` loop. If the item is already there, its `qty` goes up by 1. If not, it is added with `push`. **Remove** uses `cart.splice(index, 1)`. If a quantity is not a whole number from 1 to 10, `changeQty()` shows a red error and puts the old number back. Every change is saved with `saveData("cart", cart)` and the table is drawn again by `showCart()`.

The photos on the Stays page show the **area** (Karimabad, Kachura Lake, Saiful Muluk), not the actual property, and each card is labelled "Area photo". The stay names are sample businesses.

---

## Shared files you use (written once, used by all 12 pages)

| File | What it gives your pages |
|------|--------------------------|
| `css/style.css` | All colours and layout. Classes you will see: `banner`, `section`, `card`, `box`, `btn`, `steps`, `line`, `note`, `error`. |
| `js/script.js` | Sample prices and small helpers (below). It is loaded at the bottom of every page with `<script src="js/script.js"></script>`. |
| `images/placeholder.svg` | Shown instead of a photo if the photo cannot load (for example, with no internet). |

Helpers in `js/script.js`:

| Name | What it does |
|------|--------------|
| `destinationPrices`, `packages`, `cityFares` | Sample prices in PKR (local costs per destination, package price + nights, return coach fare per city). |
| `saveData(key, value)` | Saves something in **localStorage** (the browser's memory) so the next page can read it. |
| `getData(key, empty)` | Reads it back. If nothing is saved, it returns `empty` (for example `{}` or `[]`). |
| `pkr(amount)` | Turns `45000` into `"PKR 45,000"`. |
| `cartTotal()` / `updateCartCount()` | Adds up the cart / shows the number next to "Cart" in the menu. |
| `toggleMenu()` / `startOver()` | Opens the phone menu / clears all demo data (the **Start Over** button in the footer). |

What is saved in localStorage:

| Key | Example |
|-----|---------|
| `trip` | `{ destination: "Skardu", city: "Lahore", date: "2027-06-10", travellers: 3, package: "Comfort", nights: 5, tripCost: 186000, stay: "Skardu Lakeside Hotel", stayPrice: 12000 }` |
| `cart` | `[ { name: "Sleeping Bag", price: 6800, qty: 2 } ]` |
| `customer` | `{ name: "Ali Raza", email: "ali@example.com", phone: "03001234567" }` |
| `booking` | The confirmed demo booking with its reference code, e.g. `SN-DEMO-4821`. |

The header (logo + menu) and footer are the same on every page. In the code below they are part of each page, so each file is complete and works by itself.

---

## 5. Source code of my three pages

Each block is the complete file, exactly as it is in the website folder.

### `accommodation.html` (Accommodation)

```html
<!DOCTYPE html>
<!-- ===================================================
     Page 7 of 12: Accommodation
     Owner: Student 3 - Stay and Gear
     =================================================== -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accommodation | Safar North</title>
  <!-- Fonts: Poppins for English, Noto Nastaliq Urdu for the logo -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@700&family=Poppins:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ===== SHARED HEADER (same on all 12 pages) ===== -->
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Safar North home">
        <span class="logo-urdu" lang="ur" dir="rtl">سفر</span>
        <span class="logo-en">North</span>
      </a>
      <button class="menu-btn" onclick="toggleMenu()" aria-label="Open menu">☰</button>
      <nav class="nav" id="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="destinations.html">Destinations</a>
        <a href="packages.html">Packages</a>
        <a href="booking.html">Plan a Trip</a>
        <a href="accommodation.html" class="active">Stays</a>
        <a href="camping-shop.html">Gear</a>
        <a href="cart.html">Cart <span id="cart-count">0</span></a>
      </nav>
    </div>
  </header>

  <main>
    <section class="banner" style="background-image: url('images/Hunza_Landscapes.jpg')">
      <h1>Choose a Stay</h1>
      <p>A guest house, a hotel or a campsite: or skip this step</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="steps">
          <span class="done">1. Destination</span><span class="done">2. Package</span><span class="done">3. Plan</span><span class="done">4. Stay &amp; Gear</span><span>5. Confirm</span>
        </div>

        <p class="note" id="stay-info">Prices are per room (or tent) per night. Sample stays for the demo. Photos show the area, not the property.</p>

        <div class="grid-3">
          <article class="card" id="card-guesthouse">
            <img src="images/Baltit_fort.jpg" alt="Baltit Fort in Karimabad, Hunza Valley" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <span class="tag">Guest House · Area photo</span>
              <h3>Karimabad Family Guest House</h3>
              <span class="location">📍 Karimabad, Hunza</span>
              <ul class="ticks"><li>Home-cooked meals</li><li>Hot water</li><li>Valley view</li></ul>
              <p class="price">PKR 6,500 <small>/ night</small></p>
              <button class="btn btn-small" onclick="chooseStay('Karimabad Family Guest House', 6500)">Select</button>
            </div>
          </article>

          <article class="card" id="card-hotel">
            <img src="images/Skardu.jpg" alt="Lower Kachura Lake near Skardu" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <span class="tag">Hotel · Area photo</span>
              <h3>Skardu Lakeside Hotel</h3>
              <span class="location">📍 Near Kachura, Skardu</span>
              <ul class="ticks"><li>Restaurant</li><li>Room heating</li><li>Parking</li></ul>
              <p class="price">PKR 12,000 <small>/ night</small></p>
              <button class="btn btn-small" onclick="chooseStay('Skardu Lakeside Hotel', 12000)">Select</button>
            </div>
          </article>

          <article class="card" id="card-camp">
            <img src="images/Naran_Kaghan.jpg" alt="Lake Saiful Muluk in the Naran Valley" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <span class="tag">Campsite · Area photo</span>
              <h3>Naran Riverside Campsite</h3>
              <span class="location">📍 Naran, Kaghan Valley</span>
              <ul class="ticks"><li>Tent and mattress</li><li>Bonfire</li><li>Shared washrooms</li></ul>
              <p class="price">PKR 3,500 <small>/ night</small></p>
              <button class="btn btn-small" onclick="chooseStay('Naran Riverside Campsite', 3500)">Select</button>
            </div>
          </article>
        </div>

        <div class="box" style="margin-top:24px">
          <p id="stay-result">No stay selected yet.</p>
          <div class="actions">
            <a href="booking.html" class="btn btn-outline">← Back to Plan a Trip</a>
            <button class="btn btn-outline" onclick="noStay()">I don't need a stay</button>
            <a href="camping-shop.html" class="btn">Next: Camping Gear →</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ===== SHARED FOOTER (same on all 12 pages) ===== -->
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h4><span class="logo-urdu" lang="ur" dir="rtl">سفر</span> North</h4>
        <p>A student demo of a Northern Pakistan tour company. No real bookings or payments.</p>
        <p>📞 0300-0000000 (demo) · ✉ hello@safarnorth.example</p>
        <button class="btn btn-small btn-light" onclick="startOver()">Start Over</button>
      </div>
      <div>
        <h4>1. Discover</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About Safar North</a>
        <a href="destinations.html">Destinations</a>
      </div>
      <div>
        <h4>2. Choose a Trip</h4>
        <a href="destination-details.html?place=hunza">Destination Details</a>
        <a href="packages.html">Travel Packages</a>
        <a href="booking.html">Plan a Trip</a>
      </div>
      <div>
        <h4>3. Stay &amp; Gear</h4>
        <a href="accommodation.html">Accommodation</a>
        <a href="camping-shop.html">Camping Gear</a>
        <a href="cart.html">Cart</a>
      </div>
      <div>
        <h4>4. Review &amp; Confirm</h4>
        <a href="customer-info.html">Your Details</a>
        <a href="checkout.html">Checkout Summary</a>
        <a href="confirmation.html">Confirmation</a>
      </div>
    </div>
    <p class="copyright">© 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons (see ASSETS.md)</p>
  </footer>

  <script src="js/script.js"></script>
  <script>
    // ----- Student 3: choose a stay -----

    // How many nights? It comes from the package chosen on the booking page.
    function getNights() {
      let trip = getData("trip", {});
      if (trip.nights) {
        return trip.nights;
      }
      return 3;                              // no package yet: use 3 nights
    }

    // Save the chosen stay and its price per night into the trip
    function chooseStay(name, pricePerNight) {
      let trip = getData("trip", {});
      trip.stay = name;
      trip.stayPrice = pricePerNight;
      saveData("trip", trip);
      showStay();
    }

    // Remove the stay from the trip
    function noStay() {
      let trip = getData("trip", {});
      trip.stay = "None";
      trip.stayPrice = 0;
      saveData("trip", trip);
      showStay();
    }

    // Show what is selected and highlight that card
    function showStay() {
      let trip = getData("trip", {});
      let cards = ["card-guesthouse", "card-hotel", "card-camp"];
      for (let i = 0; i < cards.length; i++) {
        document.getElementById(cards[i]).classList.remove("chosen");
      }
      if (trip.stay == undefined) {
        return;
      }
      if (trip.stay == "None") {
        document.getElementById("stay-result").innerHTML = "No stay needed. You can still add camping gear.";
        return;
      }
      if (trip.stay.indexOf("Guest House") != -1) document.getElementById("card-guesthouse").classList.add("chosen");
      if (trip.stay.indexOf("Hotel") != -1) document.getElementById("card-hotel").classList.add("chosen");
      if (trip.stay.indexOf("Campsite") != -1) document.getElementById("card-camp").classList.add("chosen");

      document.getElementById("stay-result").innerHTML =
        "Selected: <b>" + trip.stay + "</b>: " + pkr(trip.stayPrice) + " × " + getNights() + " nights = <b>" + pkr(trip.stayPrice * getNights()) + "</b>";
    }

    showStay();
  </script>
</body>
</html>
```

### `camping-shop.html` (Camping Gear)

```html
<!DOCTYPE html>
<!-- ===================================================
     Page 8 of 12: Camping Gear
     Owner: Student 3 - Stay and Gear
     =================================================== -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Camping Gear | Safar North</title>
  <!-- Fonts: Poppins for English, Noto Nastaliq Urdu for the logo -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@700&family=Poppins:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ===== SHARED HEADER (same on all 12 pages) ===== -->
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Safar North home">
        <span class="logo-urdu" lang="ur" dir="rtl">سفر</span>
        <span class="logo-en">North</span>
      </a>
      <button class="menu-btn" onclick="toggleMenu()" aria-label="Open menu">☰</button>
      <nav class="nav" id="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="destinations.html">Destinations</a>
        <a href="packages.html">Packages</a>
        <a href="booking.html">Plan a Trip</a>
        <a href="accommodation.html">Stays</a>
        <a href="camping-shop.html" class="active">Gear</a>
        <a href="cart.html">Cart <span id="cart-count">0</span></a>
      </nav>
    </div>
  </header>

  <main>
    <section class="banner" style="background-image: url('images/Pasu_cones.jpg')">
      <h1>Camping Gear</h1>
      <p>Optional extras for your trip</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="steps">
          <span class="done">1. Destination</span><span class="done">2. Package</span><span class="done">3. Plan</span><span class="done">4. Stay &amp; Gear</span><span>5. Confirm</span>
        </div>

        <p class="success" id="cart-message" style="display:none"></p>

        <div class="grid-3">
          <article class="card">
            <img src="images/gear-tent.svg" alt="Illustration of a dome camping tent" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>3-Person Tent</h3>
              <p>Waterproof dome tent. Sets up in about 10 minutes.</p>
              <p class="price">PKR 14,500</p>
              <button class="btn btn-small" onclick="addToCart('3-Person Tent', 14500)">Add to Cart</button>
            </div>
          </article>
          <article class="card">
            <img src="images/gear-sleeping-bag.svg" alt="Illustration of a sleeping bag" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>Sleeping Bag</h3>
              <p>Warm mummy-style bag for cold nights, rated to -5°C.</p>
              <p class="price">PKR 6,800</p>
              <button class="btn btn-small" onclick="addToCart('Sleeping Bag', 6800)">Add to Cart</button>
            </div>
          </article>
          <article class="card">
            <img src="images/gear-backpack.svg" alt="Illustration of a hiking backpack" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>Hiking Backpack 50L</h3>
              <p>Padded straps and a rain cover for multi-day trips.</p>
              <p class="price">PKR 8,900</p>
              <button class="btn btn-small" onclick="addToCart('Hiking Backpack 50L', 8900)">Add to Cart</button>
            </div>
          </article>
          <article class="card">
            <img src="images/gear-flashlight.svg" alt="Illustration of an LED flashlight" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>LED Flashlight</h3>
              <p>Rechargeable torch for campsites and night walks.</p>
              <p class="price">PKR 1,800</p>
              <button class="btn btn-small" onclick="addToCart('LED Flashlight', 1800)">Add to Cart</button>
            </div>
          </article>
          <article class="card">
            <img src="images/gear-trekking-poles.svg" alt="Illustration of a pair of trekking poles" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>Trekking Poles (Pair)</h3>
              <p>Adjustable poles that protect your knees downhill.</p>
              <p class="price">PKR 4,800</p>
              <button class="btn btn-small" onclick="addToCart('Trekking Poles (Pair)', 4800)">Add to Cart</button>
            </div>
          </article>
          <article class="card">
            <img src="images/gear-water-bottle.svg" alt="Illustration of a steel water bottle" onerror="this.onerror=null; this.src='images/placeholder.svg';">
            <div class="card-body">
              <h3>Steel Water Bottle</h3>
              <p>1 litre bottle that keeps water hot or cold.</p>
              <p class="price">PKR 2,200</p>
              <button class="btn btn-small" onclick="addToCart('Steel Water Bottle', 2200)">Add to Cart</button>
            </div>
          </article>
        </div>

        <!-- Safety tips -->
        <div class="box" style="margin-top:28px">
          <h3>⚠ Safety tips for the mountains</h3>
          <ul class="ticks">
            <li>Nights are cold even in July. Pack a warm layer.</li>
            <li>Drink plenty of water at high places like Deosai.</li>
            <li>Tell your guide before going on a hike alone.</li>
          </ul>
        </div>

        <div class="actions">
          <a href="accommodation.html" class="btn btn-outline">← Back to Stays</a>
          <a href="cart.html" class="btn">View Cart →</a>
        </div>
      </div>
    </section>
  </main>

  <!-- ===== SHARED FOOTER (same on all 12 pages) ===== -->
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h4><span class="logo-urdu" lang="ur" dir="rtl">سفر</span> North</h4>
        <p>A student demo of a Northern Pakistan tour company. No real bookings or payments.</p>
        <p>📞 0300-0000000 (demo) · ✉ hello@safarnorth.example</p>
        <button class="btn btn-small btn-light" onclick="startOver()">Start Over</button>
      </div>
      <div>
        <h4>1. Discover</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About Safar North</a>
        <a href="destinations.html">Destinations</a>
      </div>
      <div>
        <h4>2. Choose a Trip</h4>
        <a href="destination-details.html?place=hunza">Destination Details</a>
        <a href="packages.html">Travel Packages</a>
        <a href="booking.html">Plan a Trip</a>
      </div>
      <div>
        <h4>3. Stay &amp; Gear</h4>
        <a href="accommodation.html">Accommodation</a>
        <a href="camping-shop.html">Camping Gear</a>
        <a href="cart.html">Cart</a>
      </div>
      <div>
        <h4>4. Review &amp; Confirm</h4>
        <a href="customer-info.html">Your Details</a>
        <a href="checkout.html">Checkout Summary</a>
        <a href="confirmation.html">Confirmation</a>
      </div>
    </div>
    <p class="copyright">© 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons (see ASSETS.md)</p>
  </footer>

  <script src="js/script.js"></script>
  <script>
    // ----- Student 3: add gear to the cart -----
    // The cart is a list like: [ { name: "Sleeping Bag", price: 6800, qty: 1 } ]

    function addToCart(name, price) {
      let cart = getData("cart", []);
      let found = false;

      // If the item is already in the cart, add 1 to its quantity
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
          cart[i].qty = cart[i].qty + 1;
          found = true;
        }
      }
      // Otherwise add it as a new item
      if (found == false) {
        cart.push({ name: name, price: price, qty: 1 });
      }

      saveData("cart", cart);
      updateCartCount();                     // from script.js

      let message = document.getElementById("cart-message");
      message.style.display = "block";
      message.innerHTML = "✓ <b>" + name + "</b> added to your cart. <a href=\"cart.html\">View cart</a>";
    }
  </script>
</body>
</html>
```

### `cart.html` (Cart)

```html
<!DOCTYPE html>
<!-- ===================================================
     Page 9 of 12: Cart
     Owner: Student 3 - Stay and Gear
     =================================================== -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart | Safar North</title>
  <!-- Fonts: Poppins for English, Noto Nastaliq Urdu for the logo -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@700&family=Poppins:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ===== SHARED HEADER (same on all 12 pages) ===== -->
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Safar North home">
        <span class="logo-urdu" lang="ur" dir="rtl">سفر</span>
        <span class="logo-en">North</span>
      </a>
      <button class="menu-btn" onclick="toggleMenu()" aria-label="Open menu">☰</button>
      <nav class="nav" id="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="destinations.html">Destinations</a>
        <a href="packages.html">Packages</a>
        <a href="booking.html">Plan a Trip</a>
        <a href="accommodation.html">Stays</a>
        <a href="camping-shop.html">Gear</a>
        <a href="cart.html" class="active">Cart <span id="cart-count">0</span></a>
      </nav>
    </div>
  </header>

  <main>
    <section class="banner" style="background-image: url('images/Attabad.jpg')">
      <h1>Your Cart</h1>
      <p>Camping gear you added to this trip</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="steps">
          <span class="done">1. Destination</span><span class="done">2. Package</span><span class="done">3. Plan</span><span class="done">4. Stay &amp; Gear</span><span>5. Confirm</span>
        </div>

        <div class="box table-wrap">
          <table>
            <thead>
              <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr>
            </thead>
            <tbody id="cart-rows"></tbody>
          </table>
          <p class="error" id="cart-error"></p>
          <div class="line total"><span>Gear subtotal</span><span id="cart-subtotal">PKR 0</span></div>
        </div>

        <p class="note">Change a quantity and the totals update straight away. Gear is optional, an empty cart is fine.</p>

        <div class="actions">
          <a href="camping-shop.html" class="btn btn-outline">← Add More Gear</a>
          <a href="booking.html" class="btn btn-outline">Back to Planning</a>
          <a href="customer-info.html" class="btn">Continue to Your Details →</a>
        </div>
      </div>
    </section>
  </main>

  <!-- ===== SHARED FOOTER (same on all 12 pages) ===== -->
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h4><span class="logo-urdu" lang="ur" dir="rtl">سفر</span> North</h4>
        <p>A student demo of a Northern Pakistan tour company. No real bookings or payments.</p>
        <p>📞 0300-0000000 (demo) · ✉ hello@safarnorth.example</p>
        <button class="btn btn-small btn-light" onclick="startOver()">Start Over</button>
      </div>
      <div>
        <h4>1. Discover</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About Safar North</a>
        <a href="destinations.html">Destinations</a>
      </div>
      <div>
        <h4>2. Choose a Trip</h4>
        <a href="destination-details.html?place=hunza">Destination Details</a>
        <a href="packages.html">Travel Packages</a>
        <a href="booking.html">Plan a Trip</a>
      </div>
      <div>
        <h4>3. Stay &amp; Gear</h4>
        <a href="accommodation.html">Accommodation</a>
        <a href="camping-shop.html">Camping Gear</a>
        <a href="cart.html">Cart</a>
      </div>
      <div>
        <h4>4. Review &amp; Confirm</h4>
        <a href="customer-info.html">Your Details</a>
        <a href="checkout.html">Checkout Summary</a>
        <a href="confirmation.html">Confirmation</a>
      </div>
    </div>
    <p class="copyright">© 2026 Safar North · CL-1000 ICT class project · Photos from Wikimedia Commons (see ASSETS.md)</p>
  </footer>

  <script src="js/script.js"></script>
  <script>
    // ----- Student 3: the cart page -----

    // Draw the table from the saved cart
    function showCart() {
      let cart = getData("cart", []);
      let rows = "";

      for (let i = 0; i < cart.length; i++) {
        rows +=
          "<tr>" +
          "<td>" + cart[i].name + "</td>" +
          "<td>" + pkr(cart[i].price) + "</td>" +
          "<td><input type='number' min='1' max='10' value='" + cart[i].qty + "' onchange='changeQty(" + i + ", this.value)'></td>" +
          "<td><b>" + pkr(cart[i].price * cart[i].qty) + "</b></td>" +
          "<td><button class='btn btn-small btn-outline' onclick='removeItem(" + i + ")'>Remove</button></td>" +
          "</tr>";
      }

      if (cart.length == 0) {
        rows = "<tr><td colspan='5' class='center'>Your cart is empty. <a href='camping-shop.html'>Add camping gear</a></td></tr>";
      }

      document.getElementById("cart-rows").innerHTML = rows;
      document.getElementById("cart-subtotal").innerText = pkr(cartTotal());   // cartTotal() is in script.js
      updateCartCount();
    }

    // Change how many of one item (must be a whole number from 1 to 10)
    function changeQty(index, newQty) {
      let cart = getData("cart", []);
      let qty = Number(newQty);
      let error = document.getElementById("cart-error");

      if (newQty == "" || qty < 1 || qty > 10 || qty != Math.floor(qty)) {
        error.innerText = "Quantity must be a whole number from 1 to 10.";
        showCart();                          // put the old number back
        return;
      }
      error.innerText = "";
      cart[index].qty = qty;
      saveData("cart", cart);
      showCart();
    }

    // Delete one item from the cart
    function removeItem(index) {
      let cart = getData("cart", []);
      cart.splice(index, 1);                 // remove 1 item at this position
      document.getElementById("cart-error").innerText = "";
      saveData("cart", cart);
      showCart();
    }

    showCart();
  </script>
</body>
</html>
```

---

## 6. My 60–90 second demo script

1. *(Stays)* "Three sample stays: a guest house in Hunza, a hotel near Skardu and a campsite in Naran. The photos show the area, so we labelled them."
2. Click **Select** on the Skardu hotel. "The card is highlighted. Cost = 12,000 × 5 nights (from the Comfort package) = PKR 60,000."
3. Click **Next: Camping Gear**. Click **Add to Cart** on the tent twice and the sleeping bag once. "See the green message and the number next to Cart going up."
4. Click **View Cart**. "This table is built by JavaScript from the saved cart." Type `0` in a quantity box to show the error message, then change the sleeping bag to 2 and **Remove** one item. "The subtotal updates straight away."
5. "Gear is optional: an empty cart is fine." Click **Continue to Your Details** and hand over.
