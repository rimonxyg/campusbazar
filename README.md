# CampusBazar

A campus-focused marketplace and community portal designed for university students, faculty, and alumni.

## Overview

This repository contains the pure HTML implementation for the **Alumni Registration** and **Unified Login** interfaces developed for the Web Technology course.

The project strictly follows the instruction to use **100% pure HTML5** (no CSS frameworks, inline styles, or external stylesheets).

---

## Files Included

1. **`alumni_registration.html`**
   - Comprehensive registration form tailored for university alumni.
   - Structured into clean sections using `<fieldset>` and `<legend>`:
     - **Account Credentials:** Full name, email, password, confirm password.
     - **Personal Details:** Gender radio buttons, phone number, date of birth, blood group dropdown.
     - **Academic Background:** Former student ID, department, degree completed, graduation year.
     - **Professional Status:** Current employment status, organization, designation, LinkedIn profile URL.
     - **CampusBazar Involvement:** Areas of interest (selling books/notes, bundles, mentorship, gadgets) and bio textarea.
     - **Verification Documents:** File uploads for alumni/student ID card and profile photo.
     - **Confirmation & Actions:** Terms agreement checkbox, submit, reset, and direct login navigation.

2. **`login.html`**
   - Unified login portal supporting all four campus roles: **Student**, **Teacher**, **Alumni**, and **Admin**.
   - Role selection via radio buttons.
   - University email / user ID and password input fields with `placeholder` shadow hint text.
   - "Remember me" option and submit button.
   - Direct quick-links to registration modules.

---

## Key HTML Features Used

- **Table Grid Layout:** Form elements and labels are neatly aligned using `<table>`, `<tr>`, and `<td>` for structured presentation without CSS.
- **HTML5 Form Validation:** Using native attributes such as `required`, `type="email"`, and `type="password"`.
- **Shadow Hint Text:** Utilizing the `placeholder` attribute on input boxes to provide format guidance to users before typing.
- **Multipart Data Encoding:** Form configured with `enctype="multipart/form-data"` and `method="post"` to support document and photo uploads.
- **Accessibility & Linking:** Every input is connected to its label via `for` and `id` attributes. Navigation between pages is provided via standard anchor `<a>` tags.

---

## How to Run

Simply open either file in any web browser:
- Double-click `login.html` or `alumni_registration.html` from your file explorer.
- No local server or build tools required.
