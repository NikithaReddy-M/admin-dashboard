export const USERS = [
  { id: 1, name: "Aisha Patel",      email: "aisha@nexatech.io",  role: "Admin",  status: "Active",    joined: "2024-01-12", orders: 14, spend: "$1,840" },
  { id: 2, name: "Marcus Chen",      email: "marcus@nexatech.io", role: "Editor", status: "Active",    joined: "2024-02-05", orders: 9,  spend: "$920"   },
  { id: 3, name: "Priya Reddy",      email: "priya@nexatech.io",  role: "Viewer", status: "Inactive",  joined: "2024-03-20", orders: 3,  spend: "$210"   },
  { id: 4, name: "James Okafor",     email: "james@nexatech.io",  role: "Editor", status: "Active",    joined: "2024-04-01", orders: 21, spend: "$3,100" },
  { id: 5, name: "Sara Lindqvist",   email: "sara@nexatech.io",   role: "Viewer", status: "Active",    joined: "2024-04-18", orders: 7,  spend: "$650"   },
  { id: 6, name: "Dev Nair",         email: "dev@nexatech.io",    role: "Admin",  status: "Suspended", joined: "2024-05-03", orders: 0,  spend: "$0"     },
  { id: 7, name: "Lucia Morales",    email: "lucia@nexatech.io",  role: "Editor", status: "Active",    joined: "2024-05-22", orders: 16, spend: "$2,300" },
  { id: 8, name: "Ethan Brooks",     email: "ethan@nexatech.io",  role: "Viewer", status: "Inactive",  joined: "2024-06-10", orders: 2,  spend: "$88"    },
  { id: 9, name: "Yuki Tanaka",      email: "yuki@nexatech.io",   role: "Editor", status: "Active",    joined: "2024-07-01", orders: 11, spend: "$1,420" },
  { id: 10, name: "Fatima Al-Rashid",email: "fatima@nexatech.io", role: "Viewer", status: "Active",    joined: "2024-08-14", orders: 5,  spend: "$380"   },
];

export const ORDERS = [
  { id: "#ORD-001", user: "Aisha Patel",     product: "Enterprise Plan", date: "2025-05-01", amount: "$499", status: "Completed"  },
  { id: "#ORD-002", user: "Marcus Chen",     product: "Pro Plan",        date: "2025-05-03", amount: "$149", status: "Pending"    },
  { id: "#ORD-003", user: "James Okafor",    product: "Enterprise Plan", date: "2025-05-05", amount: "$499", status: "Completed"  },
  { id: "#ORD-004", user: "Sara Lindqvist",  product: "Starter Plan",    date: "2025-05-08", amount: "$49",  status: "Pending"    },
  { id: "#ORD-005", user: "Lucia Morales",   product: "Pro Plan",        date: "2025-05-10", amount: "$149", status: "Refunded"   },
  { id: "#ORD-006", user: "Yuki Tanaka",     product: "Enterprise Plan", date: "2025-05-12", amount: "$499", status: "Processing" },
  { id: "#ORD-007", user: "Fatima Al-Rashid",product: "Starter Plan",    date: "2025-05-14", amount: "$49",  status: "Completed"  },
  { id: "#ORD-008", user: "Priya Reddy",     product: "Pro Plan",        date: "2025-05-16", amount: "$149", status: "Pending"    },
];

export const TASKS = [
  { id: 1, title: "Review Q2 analytics report",    priority: "High",   due: "2025-05-20", status: "Pending"     },
  { id: 2, title: "Onboard 3 new team members",    priority: "Medium", due: "2025-05-22", status: "In Progress" },
  { id: 3, title: "Update billing integration",    priority: "High",   due: "2025-05-19", status: "Pending"     },
  { id: 4, title: "Design system audit",           priority: "Low",    due: "2025-05-28", status: "Pending"     },
  { id: 5, title: "Security compliance review",    priority: "High",   due: "2025-05-21", status: "In Progress" },
];

export const STATS = [
  { label: "Total Users",    value: "2,841",    change: "+12%", trend: "up",   icon: "👥" },
  { label: "Total Orders",   value: "10,492",   change: "+8%",  trend: "up",   icon: "📦" },
  { label: "Total Revenue",  value: "$184,320", change: "+23%", trend: "up",   icon: "💰" },
  { label: "Pending Tasks",  value: "14",       change: "-3",   trend: "down", icon: "📋" },
];
