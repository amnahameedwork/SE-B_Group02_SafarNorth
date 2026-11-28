# SE-B_Group02_SafarNorth
Safar North – Northern Pakistan Tour Company (Theme #24), CL-1000 ICT Project, Group 02, SE-B

**🌐 Live website:** https://amnahameedwork.github.io/SE-B_Group02_SafarNorth/

## Project Overview
A 12-page static website (HTML5, CSS3, vanilla JavaScript) presenting a comprehensive Northern Pakistan tour company demo.

---

## Contribution Table

| Name | Roll Number | Pages Built | Features Built |
| :--- | :--- | :--- | :--- |
| Muhammad Qasim | 26i-3055 | `index.html` (Home)<br>`about.html` (About Safar North)<br>`destinations.html` (Destinations) | Shared responsive layout & navigation, Interactive FAQ accordion with expand/collapse all, Dynamic destination catalogue rendering, Real-time search filter with empty state, Trip Budget Estimator with validation & localStorage persistence, Local image optimization & asset attribution. |
| Umar Hassan | 26i-3056 | `destination-details.html` (Destination Details)<br>`packages.html` (Travel Packages)<br>`booking.html` (Plan a Trip) | Destination details driven by a URL parameter (Hunza, Skardu, Naran Kaghan), Highlights / activities / travel notes with a per-person estimate, Three tour packages (Basic, Comfort, Adventure) with selection, Plan a Trip booking form with field validation, Estimated trip cost breakdown, Trip saved in localStorage and pre-filled across pages. |
| Amna Hameed | 26i-3058 | `accommodation.html` (Accommodation)<br>`camping-shop.html` (Camping Gear)<br>`cart.html` (Cart) | Stay selection (guest house, hotel, campsite) with per-night cost × package nights and a "no stay" option, Camping gear shop with Add to Cart, live cart count and confirmation message, Mountain safety tips, Cart with quantity editing (1–10 validation), item removal, live subtotal and empty-cart state. |
| Muhammad Sufyan Ali Shah | 26i-3057 | `customer-info.html` (Your Details)<br>`checkout.html` (Checkout Summary)<br>`confirmation.html` (Booking Confirmation) | Customer details form with name, email and Pakistani mobile validation, Checkout summary combining trip, stay, gear and customer data with an estimated total, Confirm button disabled with guidance when information is missing, Demo booking confirmation with reference code, itinerary summary and Start Over. |

---

## Feature Table

| Feature | Category | Page | Member |
| :--- | :--- | :--- | :--- |
| Shared Responsive Header, Mobile Drawer & Footer | Layout & Navigation | `index.html`, `about.html`, `destinations.html` | Muhammad Qasim (26i-3055) |
| Hero Banner & Featured Destination Previews | Content & Presentation | `index.html` | Muhammad Qasim (26i-3055) |
| Process Overview ("How Trip Planning Works") & Customer Testimonials | Content & Presentation | `index.html` | Muhammad Qasim (26i-3055) |
| Company Story, Team Roles & Mission | Content & Presentation | `about.html` | Muhammad Qasim (26i-3055) |
| Interactive Collapsible FAQs with Single/Bulk Toggle | Dynamic Interaction | `about.html` | Muhammad Qasim (26i-3055) |
| Dynamic Destination Card Catalog (Data Model Rendering) | Dynamic Data / DOM Manipulation | `destinations.html` | Muhammad Qasim (26i-3055) |
| Real-time Instant Destination Search & Keyword Filter | Search & Filtering | `destinations.html` | Muhammad Qasim (26i-3055) |
| No-Results Empty State with Quick Reset Action | UX / Search State Handling | `destinations.html` | Muhammad Qasim (26i-3055) |
| Trip Budget Estimator (Destination selection, integer traveller validation 1–50) | Form Validation & Cost Computation | `destinations.html` | Muhammad Qasim (26i-3055) |
| Estimator Calculation Breakdown & Clear Reset Flow | UX & Computation | `destinations.html` | Muhammad Qasim (26i-3055) |
| Isolated Preference Persistence (`localStorage` key: `estimator`) | Client-Side Storage | `destinations.html` | Muhammad Qasim (26i-3055) |
| Local Image Asset Optimization & Fallback SVG Handling | Asset Management & Accessibility | `index.html`, `about.html`, `destinations.html` | Muhammad Qasim (26i-3055) |
| Destination Details from URL Parameter (`?place=hunza`, `skardu`, `naran`) | Dynamic Data / DOM Manipulation | `destination-details.html` | Umar Hassan (26i-3056) |
| Highlights, Activities, Travel Notes & Best Season | Content & Presentation | `destination-details.html` | Umar Hassan (26i-3056) |
| Per-person "Estimate from" Cost & Choose a Package Action | Cost Computation & Navigation | `destination-details.html` | Umar Hassan (26i-3056) |
| Three Tour Packages (Basic, Comfort, Adventure) with Nights, Prices & Inclusions | Content & Presentation | `packages.html` | Umar Hassan (26i-3056) |
| Package Selection Saved to Trip (`localStorage` key: `trip`) | Client-Side Storage | `packages.html` | Umar Hassan (26i-3056) |
| Plan a Trip Booking Form (destination, departure city, date, travellers, package) | Forms | `booking.html` | Umar Hassan (26i-3056) |
| Booking Form Validation (required fields, travellers 1–20) | Form Validation | `booking.html` | Umar Hassan (26i-3056) |
| Estimated Trip Cost Breakdown ((local costs + package + return coach) × travellers) | Cost Computation | `booking.html` | Umar Hassan (26i-3056) |
| Stay Selection: Guest House, Hotel or Campsite with Highlighted Choice | Selection & UI State | `accommodation.html` | Amna Hameed (26i-3058) |
| Stay Cost = Price per Night × Package Nights, with "No Stay Needed" Option | Cost Computation & Client-Side Storage | `accommodation.html` | Amna Hameed (26i-3058) |
| Camping Gear Catalogue with Add to Cart (quantity merges for repeat items) | Shopping Cart | `camping-shop.html` | Amna Hameed (26i-3058) |
| Live Cart Count in Navigation & Add-to-Cart Confirmation Message | UX Feedback | `camping-shop.html` | Amna Hameed (26i-3058) |
| Mountain Safety Tips | Content & Presentation | `camping-shop.html` | Amna Hameed (26i-3058) |
| Cart Table with Quantity Editing (1–10 validation) & Item Removal | Shopping Cart & Form Validation | `cart.html` | Amna Hameed (26i-3058) |
| Live Gear Subtotal & Empty-Cart State (`localStorage` key: `cart`) | Computation & Client-Side Storage | `cart.html` | Amna Hameed (26i-3058) |
| Customer Details Form (full name, email, mobile) with Saved Pre-fill | Forms & Client-Side Storage | `customer-info.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Details Validation (name, email format, 11-digit mobile starting with 03) | Form Validation | `customer-info.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Checkout Summary of Trip, Stay, Gear & Customer with Edit Links | Data Aggregation & Presentation | `checkout.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Estimated Grand Total (trip + stay + gear) | Cost Computation | `checkout.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Confirm Button Disabled with Guidance When Trip or Details Are Missing | UX / Error State Handling | `checkout.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Demo Booking Confirmation with Reference Code (`SN-DEMO-xxxx`) & Itinerary Summary | Dynamic Data / DOM Manipulation | `confirmation.html` | Muhammad Sufyan Ali Shah (26i-3057) |
| Return to Home & Plan a New Trip (clears demo data) | Navigation & Client-Side Storage | `confirmation.html` | Muhammad Sufyan Ali Shah (26i-3057) |
