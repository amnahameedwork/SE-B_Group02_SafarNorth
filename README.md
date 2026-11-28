# SE-B_Group02_SafarNorth
Safar North – Northern Pakistan Tour Company (Theme #24), CL-1000 ICT Project, Group 02, SE-B

## Team Contributions

| Name | Roll No | Pages | Responsibilities |
| --- | --- | --- | --- |
| Umar Hassan | 26I-3056 | `destination-details.html` (Destination Details), `packages.html` (Travel Packages), `booking.html` (Plan a Trip) | Destination details page driven by URL parameter, Package selection saved to trip, Plan-a-Trip booking form with validation and full trip cost calculation. |

## Student 2: Choose a Trip

- **Owner:** Umar Hassan (`26I-3056`) — Step 2 of the booking journey (`Discover → Choose a Trip → Stay & Gear → Review & Confirm`).
- `destination-details.html`: Reads `?place=` from `URLSearchParams` (defaulting to `hunza`), displays destination info, season, local costs, and starting estimate from Islamabad, saves `trip.destination` to `localStorage`, and navigates to `packages.html`.
- `packages.html`: Shows the selected destination note, compares `Basic` (3 nights, PKR 20,000), `Comfort` (5 nights, PKR 35,000), and `Adventure` (6 nights, PKR 48,000), saves `trip.package` and `nights` to `localStorage`, and navigates to `booking.html`.
- `booking.html`: Prefills saved trip choices, validates required fields, traveller count (`1–20`), and future travel date, computes `(local costs + package price + return coach fare) × travellers`, saves the updated `trip` object to `localStorage`, and links to `accommodation.html` or `customer-info.html`.
