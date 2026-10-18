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

## 📁 Repository Structure & Modules

```
CampusBazar/
├── index.html                 # Homepage with header, search & horizontal navigation
├── login.html                 # Unified multi-role login portal
├── student_registration.html  # Student registration (buyer & seller)
├── alumni_registration.html   # Dedicated registration form for alumni
├── teacher.html               # Faculty member registration
├── admin.html                 # System administration portal
├── README.md                  # Project overview and documentation
└── css/                       # Modular CSS Design System (Lab Task 02)
    ├── base.css               # Box model reset, containers & buttons
    ├── navbar.css             # Sticky header & horizontal menu with hover/active states
    ├── forms.css              # Universal form containers, fieldsets & inputs
    ├── home/home.css          # Homepage hero, cards & category styling
    ├── auth/login.css         # Unified login styling
    ├── student/student.css    # Student portal styling
    ├── alumni/alumni.css      # Alumni portal styling
    ├── teacher/teacher.css    # Faculty portal styling
    └── admin/admin.css        # Admin portal styling
```

---

## 👥 Project Team & Contributors

| Name | Role | GitHub Profile | Responsibilities |
|---|---|---|---|
| **Akhtaruzzaman Rimon** | Project Lead & Full UI/Architecture | [@rimonxyg](https://github.com/rimonxyg) | Core application architecture, Homepage, Unified UI/UX, CSS design system, and multi-portal integration on `main` |
| **Ahnaf** | Project Contributor | [@ahnaf-prog](https://github.com/ahnaf-prog) | Contributed to initial student registration module *(archived in `team-contributions` branch)* |
| **Shekhar Roy** | Project Contributor | [@shekhar-roy001](https://github.com/shekhar-roy001) | Contributed to initial faculty registration module *(archived in `team-contributions` branch)* |
| **M. Hasibul Khan** | Project Contributor | [@ehacker76](https://github.com/ehacker76) | Contributed to initial admin registration module *(archived in `team-contributions` branch)* |

> **Note on Branching:** Individual/draft submissions from group members are preserved in the [`team-contributions`](https://github.com/rimonxyg/campusbazar/tree/team-contributions) branch. The production-ready unified codebase runs on `main`.

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (semantic elements, native form validation, table grid layouts)
- **Styling:** CSS3 (modular design system, CSS variables, Flexbox, Grid, responsive `@media` queries)
- **Scripting:** Vanilla JavaScript (ES6+, client-side persistence via `localStorage`)
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

