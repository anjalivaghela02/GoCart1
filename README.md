<div align="center">
  <h1><img src="https://gocart-gs.vercel.app/favicon.ico" width="20" height="20" alt="GoCart Favicon">
   GoCart</h1>
  <p>
    An open-source multi-vendor e-commerce platform built with Next.js, Express, Prisma, and Tailwind CSS.
  </p>
  <p>
    <a href="./LICENSE.md"><img src="https://img.shields.io/github/license/GreatStackDev/goCart?style=for-the-badge" alt="License"></a>
    <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome"></a>
  </p>
</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Project Architecture](#-project-architecture)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **Multi-Vendor Architecture:** Allows multiple vendors to register, manage their own products, and sell on a single platform.
- **Customer-Facing Storefront:** A beautiful and responsive user interface for customers to browse and purchase products.
- **Vendor Dashboards:** Dedicated dashboards for vendors to manage products, view sales analytics, and track orders.
- **Admin Panel:** A comprehensive dashboard for platform administrators to oversee vendors, products, and commissions.

---

## 🛠️ Tech Stack <a name="-tech-stack"></a>

- **Frontend:** Next.js 15, React 19, Redux Toolkit, Tailwind CSS v4, Lucide Icons, Recharts
- **Backend:** Node.js, Express.js, Prisma ORM, PostgreSQL

---

## 📁 Project Architecture <a name="-project-architecture"></a>

```
gocart/
├── frontend/                   # Next.js Frontend Application
│   ├── app/                    # Next.js App Router (pages & layouts)
│   │   ├── (public)/           # Storefront pages (cart, shop, products, etc.)
│   │   ├── admin/              # Admin dashboard pages
│   │   └── store/              # Vendor/Store dashboard pages
│   ├── assets/                 # Static images and client mock data
│   ├── components/             # Reusable UI components
│   │   ├── admin/              # Admin-specific components
│   │   └── store/              # Store-specific components
│   ├── lib/                    # Redux store and feature slices
│   ├── jsconfig.json           # Path aliases (@/*)
│   ├── next.config.mjs         # Next.js configuration
│   ├── package.json            # Frontend dependencies
│   └── postcss.config.mjs      # PostCSS configuration
│
├── backend/                    # Express.js Backend API Server
│   ├── prisma/
│   │   └── schema.prisma       # Prisma database schema (PostgreSQL)
│   ├── src/
│   │   ├── controllers/        # Route controllers (user, product, order, store, coupon)
│   │   ├── middleware/         # Custom middleware (auth, error handling)
│   │   ├── routes/             # Express API routes
│   │   └── server.js           # Server entry point
│   ├── .env.example            # Backend environment variables template
│   └── package.json            # Backend dependencies
│
├── .gitignore                  # Root Git ignore rules
├── package.json                # Root package with monorepo scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started <a name="-getting-started"></a>

### Prerequisites

- Node.js (v18.18.0 or later, v20+ recommended)
- npm or yarn

### 1. Installation

Install dependencies for frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

Or from the root directory:
```bash
npm run install:all
```

### 2. Environment Configuration

- **Frontend:** Copy `frontend/.env.example` to `frontend/.env.local`
  ```bash
  cp frontend/.env.example frontend/.env.local
  ```

- **Backend:** Copy `backend/.env.example` to `backend/.env`
  ```bash
  cp backend/.env.example backend/.env
  ```
  Configure your `DATABASE_URL` for PostgreSQL in `backend/.env`.

### 3. Running Development Servers

- **Frontend (Next.js):**
  ```bash
  cd frontend
  npm run dev
  ```
  Visit [http://localhost:3000](http://localhost:3000)

- **Backend (Express):**
  ```bash
  cd backend
  npm run dev
  ```
  API available at [http://localhost:5000](http://localhost:5000)

---

## 🤝 Contributing <a name="-contributing"></a>

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on how to get started.

---

## 📜 License <a name="-license"></a>

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
