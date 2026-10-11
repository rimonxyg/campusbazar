# CampusBazar — University Marketplace & Community Portal

**CampusBazar** is a Daraz-style, hyper-local e-commerce marketplace and community platform built specifically for university students, faculty, and alumni in Bangladesh.

---

## 📌 Project Overview

Every semester, students struggle to find affordable textbooks, lab equipment, course notes, and dorm essentials, often relying on unorganized Facebook groups with no search filters and no trust verification. Graduating seniors also face difficulties offloading their semester gear and books before leaving campus.

**CampusBazar** solves this problem by providing a centralized, verified campus marketplace tailored to university needs. Transactions are completed through convenient **on-campus meetups**, eliminating courier fees and shipping delays.

---

## 🎯 Key Features

1. **Course-Code Search:** Search textbooks and reference materials directly by university course code (e.g., `CSE 3101`, `EEE 2103`).
2. **Semester Bundles:** Graduating seniors and upperclassmen bundle all required books, notes, and lab supplies for an entire semester into one affordable package.
3. **Campus Meetup Checkout:** Orders are exchanged directly on campus at designated spots (e.g., cafeteria, study halls, main gates), removing courier logistics.
4. **Multi-Entity Community:** Tailored accounts and workflows for Students, Teachers, and Alumni.
5. **Verification & Trust:** Accounts are linked to university credentials (student ID, alumni status, institutional email) to ensure safety.

---

## 👥 Platform Roles & Entities

CampusBazar is designed around four key entities:

| Role | Description & Primary Capabilities |
|---|---|
| **Student** | Browse listings, search by course code, add to cart/wishlist, place orders with on-campus meetup scheduling, and review sellers. |
| **Teacher / Faculty** | Share recommended reading lists, post academic materials, and participate in campus exchanges. |
| **Alumni** | Sell or donate graduation bundles, mentor juniors, share career advice, and post lab gear or books. |
| **Admin** | Manage users, verify seller/alumni credentials, moderate listings, handle dispute reports, and oversee platform analytics. |

---

## 📁 Repository Structure & Current Modules

```
CampusBazar/
├── README.md                  # Project overview and documentation
├── login.html                 # Unified login portal for all entities
├── alumni_registration.html   # Dedicated registration form for alumni
└── admin                      # Administrative management module
```

### Current Implementation Highlights:
* **Unified Login (`login.html`):** A single, clean login gateway with role selectors (Student, Teacher, Alumni, Admin) enabling access across all four entities.
* **Alumni Registration (`alumni_registration.html`):** A comprehensive registration portal capturing alumni credentials, graduation year, degree, employment details, community mentorship interests, and verification documents.
* **Strict Semantic HTML5:** Built using 100% pure HTML5 with `<fieldset>`, `<legend>`, and table-based alignment without external dependencies, adhering strictly to course requirements.

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (semantic elements, native form validation, table grid layouts)
- **Styling:** CSS3 (modular design system, responsive layout)
- **Scripting:** Vanilla JavaScript (ES6+, DOM manipulation, client-side persistence via `localStorage`)
- **Compatibility:** 100% dependency-free, running natively in any modern web browser.

---

## 🚀 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/rimonxyg/campusbazar.git
   ```
2. Navigate to the project directory:
   ```bash
   cd campusbazar
   ```
3. Open any HTML file directly in your preferred web browser:
   - Double-click `login.html` to access the main portal.
   - Double-click `alumni_registration.html` to test the alumni registration workflow.
   - No servers, compilers, or build tools required.

---

## 🎓 Academic Context

- **Course:** Web Technology
- **Institution:** American International University-Bangladesh (AIUB)
- **Project Type:** Semester Web Technology Project
