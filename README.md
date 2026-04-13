# Workshop Booking

> A Django-based workshop management portal for FOSSEE, IIT Bombay, supporting coordinators, instructors, and students with role-based access and polished portal workflows.

## What this project includes

- User registration and login system for coordinator, student, and admin roles
- Role-based portal access with clear Student and Admin login flows
- Workshop creation, proposal, schedule, acceptance, rejection, and management
- Statistics dashboards for workshop counts, upcoming sessions, and profile analytics
- Improved UI/UX with modern theme styling, responsive header navigation, and portal animation support
- React-based frontend animation loader for page transitions and mobile navigation enhancements

## Recent updates in this project

The latest updates include:

- Redesigned the login page and portal experience with:
  - `Log in` CTA button
  - clearer role selection and spacing between the instruction note and portal cards
  - better Student/Admin portal card presentation
- Updated the registration page and login workflow for a more professional onboarding experience
- Added a shared navbar component with FOSSEE branding and unified authentication links
- Added reusable flash message rendering in `workshop_app/templates/workshop_app/includes/flash_messages.html`
- Added a new theme stylesheet at `workshop_app/static/workshop_app/css/theme.css` for custom site styling
- Added `workshop_app/static/workshop_app/js/scrollAnimations.js` to initialize page reveal animations and mobile nav toggles
- Updated `workshop_app/templates/workshop_app/base.html` to load React and ReactDOM from CDN

## Files changed in the latest update

- `workshop_app/templates/workshop_app/login.html`
- `workshop_app/templates/workshop_app/register.html`
- `workshop_app/templates/workshop_app/base.html`
- `workshop_app/templates/workshop_app/includes/navbar.html`
- `workshop_app/templates/workshop_app/includes/flash_messages.html`
- `workshop_app/static/workshop_app/css/theme.css`
- `workshop_app/static/workshop_app/js/scrollAnimations.js`

## React / JavaScript library documentation

This project uses React only as a lightweight animation loader and not as a full SPA framework.

- React 18 and ReactDOM 18 are loaded from CDN in `workshop_app/templates/workshop_app/base.html`
  - `https://unpkg.com/react@18/umd/react.production.min.js`
  - `https://unpkg.com/react-dom@18/umd/react-dom.production.min.js`
- `scrollAnimations.js` mounts a small React component (`PageAnimator`) to attach reveal animations and mobile navigation toggles.
- The JS file also uses modern browser APIs like `IntersectionObserver` to animate page sections as they scroll into view.

## Project features

### Statistics

1. Instructor focused stats:
   - Monthly workshop count
   - Instructor/coordinator profile analytics
   - Upcoming workshops
   - Commenting on coordinator profiles
2. Open access stats:
   - Workshop distribution across India
   - Pie chart visualization by workshop type

### Workshop management

- Instructors can accept, reject, delete, or postpone workshop proposals
- Coordinators can propose workshops and track scheduled sessions
- Role-based access ensures experience is tailored for each user type

## Setup and run guide

### Prerequisites

- Python 3.x installed
- `pip` available
- Internet connection for CDN resources (`React`, `ReactDOM`, Google Fonts, Material Icons)

### Installation steps

1. Clone the repository:

```bash
git clone https://github.com/FOSSEE/workshop_booking.git
cd workshop_booking
```

2. Create and activate a Python virtual environment:

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:

```bash
python manage.py createsuperuser
```

### Running the server locally on your machine

```bash
python manage.py runserver 0.0.0.0:8000
```

Then open on the same machine:

- `http://127.0.0.1:8000/`
- or `http://localhost:8000/`

### Accessing from another PC or mobile device on the same network

1. Find the host machine IP address:

- Windows: run `ipconfig` and note the IPv4 address
- macOS / Linux: run `ifconfig` or `ip addr`

2. Use the host IP address and port in the browser on another device:

```text
http://<HOST_IP_ADDRESS>:8000/
```

Example:

```text
http://192.168.1.100:8000/
```

3. Ensure the host firewall allows incoming connections on port `8000`.

### Accessing from iOS devices

- Connect the iPhone/iPad to the same Wi-Fi network as the development machine.
- Open Safari and enter the host machine IP address and port, for example:

```text
http://192.168.1.100:8000/
```

> Note: iOS devices can access the Django dev server as long as the host machine and the device are on the same LAN.

## Admin setup quick reference

- Visit `http://<HOST_IP_ADDRESS>:8000/admin`
- Log in with the superuser account
- Configure user groups and permissions as needed
- Create or update users and assign appropriate roles

## Notes

- The project includes a dedicated `docs/Getting_Started.md` file for additional setup details.
- React is used only for animation and UI enhancement; the core app remains Django-based.
- If you update the frontend or React dependencies, update this README accordingly.

## Design and implementation questions

### 1. What design principles guided your improvements?

The redesign focused on improving usability while keeping the backend unchanged.

- Followed a user-first approach for a simple and clear booking flow.
- Used visual hierarchy to highlight important actions.
- Maintained consistency across all pages.
- Reduced complexity (Hick’s Law) for faster decisions.
- Improved clickability of elements (Fitts’s Law).
- Grouped related elements for better clarity.
- Followed a mobile-first approach.

### 2. How did you ensure responsiveness across devices?

- Designed with a mobile-first mindset.
- Used flexible layouts that adapt to different screen sizes.
- Made inputs and buttons touch-friendly on smaller devices.
- Ensured proper spacing and readable text.
- Tested across multiple screen sizes for consistency.

### 3. What trade-offs did you make between design and performance?

- Avoided heavy animations to keep performance smooth.
- Kept the design simple and lightweight.
- Limited complex visual effects.
- Focused on clean and reusable components.

### 4. What was the most challenging part and how did you approach it?

Challenge: Improving UI/UX without changing backend logic.

Approach:

- First understood the existing workflow.
- Improved UI step by step without breaking functionality.
- Iteratively tested to ensure responsiveness and stability.

## After Screenshots of the website

Below are the updated screenshots showing the website after the redesign. Place the screenshot files in `docs/screenshots/` or update the paths as needed.

![Updated homepage and portal selection](docs/screenshots/after-homepage-portal.png)
![Updated student portal selection and login form](docs/screenshots/after-student-portal.png)
![Updated admin portal selection and login form](docs/screenshots/after-admin-portal.png)
![Updated workshop types page](docs/screenshots/after-workshop-types.png)
![Updated workshop statistics dashboard](docs/screenshots/after-statistics.png)
![Updated registration page](docs/screenshots/after-registration.png)
