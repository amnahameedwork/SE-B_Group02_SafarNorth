# SE-B_Group02_SafarNorth
Safar North – Northern Pakistan Tour Company (Theme #24), CL-1000 ICT Project, Group 02, SE-B

## Project Overview
A 12-page static website (HTML5, CSS3, vanilla JavaScript) presenting a comprehensive Northern Pakistan tour company demo.

---

## Contribution Table

| Name | Roll Number | Pages Built | Features Built |
| :--- | :--- | :--- | :--- |
| Muhammad Qasim | 26i-3055 | `index.html` (Home)<br>`about.html` (About Safar North)<br>`destinations.html` (Destinations) | Shared responsive layout & navigation, Interactive FAQ accordion with expand/collapse all, Dynamic destination catalogue rendering, Real-time search filter with empty state, Trip Budget Estimator with validation & localStorage persistence, Local image optimization & asset attribution. |
| Umar Hassan | 26I-3056 | `destination-details.html` (Destination Details)<br>`packages.html` (Travel Packages)<br>`booking.html` (Plan a Trip) | Destination details page driven by URL parameter (`?place=`), Package selection saved to trip via localStorage, Plan-a-Trip booking form with future-date validation, traveller count validation (1–20), and full trip cost calculation `(local costs + package price + return coach fare) × travellers`. |
| Student 3 (Teammate) | TBD | `accommodation.html`, `camping-shop.html`, `cart.html` | Lodging options, Camping gear shop, Shopping cart & item storage. |
| Student 4 (Teammate) | TBD | `customer-info.html`, `checkout.html`, `confirmation.html` | Traveller details form, Order summary, Final booking confirmation receipt. |

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
| Destination details driven by `?place=` URL parameter (defaults to `hunza`) | Dynamic Data / URL Routing | `destination-details.html` | Umar Hassan (26I-3056) |
| Local cost, season info and "Estimate from Islamabad" per destination | Content & Computation | `destination-details.html` | Umar Hassan (26I-3056) |
| Highlights, Activities and Travel Notes populated from JS data model | Dynamic Data / DOM Manipulation | `destination-details.html` | Umar Hassan (26I-3056) |
| Package comparison cards (Basic / Comfort / Adventure) with per-person price | Content & Presentation | `packages.html` | Umar Hassan (26I-3056) |
| Package selection saved to `localStorage` with nights count | Client-Side Storage | `packages.html` | Umar Hassan (26I-3056) |
| Plan-a-Trip booking form with prefill from previous pages | UX & Form State | `booking.html` | Umar Hassan (26I-3056) |
| Future travel date validation (HTML `min` + JS guard) | Form Validation | `booking.html` | Umar Hassan (26I-3056) |
| Traveller count validation (1–20) | Form Validation | `booking.html` | Umar Hassan (26I-3056) |
| Full trip cost calculation: `(local + package + coach) × travellers` | Cost Computation | `booking.html` | Umar Hassan (26I-3056) |
| Auto-clear stale cost breakdown on any form field change | UX & State Management | `booking.html` | Umar Hassan (26I-3056) |
| Trip saved to `localStorage` for downstream pages | Client-Side Storage | `booking.html` | Umar Hassan (26I-3056) |

---

## Student 2: Choose a Trip

- **Owner:** Umar Hassan (`26I-3056`) — Step 2 of the booking journey (`Discover → Choose a Trip → Stay & Gear → Review & Confirm`).
- `destination-details.html`: Reads `?place=` from `URLSearchParams` (defaulting to `hunza`), displays destination info, season, local costs, and starting estimate from Islamabad, saves `trip.destination` to `localStorage`, and navigates to `packages.html`.
- `packages.html`: Shows the selected destination note, compares `Basic` (3 nights, PKR 20,000), `Comfort` (5 nights, PKR 35,000), and `Adventure` (6 nights, PKR 48,000), saves `trip.package` and `nights` to `localStorage`, and navigates to `booking.html`.
- `booking.html`: Prefills saved trip choices, validates required fields, traveller count (`1–20`), and future travel date (HTML `min` attribute + JS comparison against today), computes `(local costs + package price + return coach fare) × travellers`, resets the cost box when any field changes so stale totals are never shown, saves the updated `trip` object to `localStorage`, and links to `accommodation.html` or `customer-info.html`.
