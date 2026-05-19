# NexaAdmin Dashboard

A responsive admin dashboard built with React + Vite.

## Features
- Login page with validation
- Dashboard with 4 summary cards
- Users, Orders, Tasks data tables with search & filter
- View Details modal for each row
- Collapsible sidebar
- Loading states & empty states
- Fully responsive

## Folder Structure
```
src/
├── components/
│   ├── ui/             # Reusable components
│   │   ├── Avatar.jsx
│   │   ├── Badge.jsx
│   │   ├── DataTable.jsx
│   │   ├── EmptyState.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── Modal.jsx
│   ├── layout/         # App shell
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   └── pages/          # Route pages
│       ├── LoginPage.jsx
│       ├── DashboardPage.jsx
│       └── DataPages.jsx
├── data/
│   └── dummyData.js    # All dummy JSON data
├── hooks/
│   └── useLoading.js   # Custom loading hook
├── App.jsx
├── main.jsx
└── index.css
```

## Setup & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel
```bash
npm run build
npx vercel
```

## Demo Login
Any valid email + password (6+ characters)
