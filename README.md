# NewsToday

A modern news feed application built with React that displays the latest headlines using the **NEWSDATA.IO API**. Users can browse top news, search for specific topics, and filter articles by category. The app also handles loading and error states gracefully.

**Live Demo:** [https://news-today-eta.vercel.app/](https://news-today-eta.vercel.app/)  
**GitHub Repository:** [https://github.com/Anikhe00/NewsToday](https://github.com/Anikhe00/NewsToday)

---

## Features

- Fetches and displays the latest headlines using the DATANEWS.IO API
- Search functionality to find articles by keyword
- Category filter for news topics (e.g., Technology, Sports, Health)
- Loading and error states for improved UX
- Responsive design for mobile and desktop

---

## Technologies Used

- **Frontend:** React, React Router, React Query, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- A DATANEWS.IO API key (get it from [https://newsdata.io/](https://newsdata.io/))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Anikhe00/NewsToday.git
```

2. Navigate to the project directory:

```bash
cd NewsToday
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Create a .env file in the root directory and add your API Key:

```bash
VIEW_API_KEY=YOUR_API_KEY
```

5. Start the development server:

```bash
npm start
# or
yarn start
```

---

## API Endpoint Example

1. Fetch latest news:

```http
https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY&language=en&removeduplicate=1
```

2. Search for articles:

```http
https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY&q=searchQuery&language=en&removeduplicate=1
```

3. Filter by category:

```http
https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY&language=en&category=categoryQuery&removeduplicate=1
```

---

## Folder Structure

NewsToday/
├─ public/
├─ src/
│ ├─ components/
│ ├─ pages/
│ ├─ api/
│ ├─ assets/
│ ├─ App.jsx
│ └─ index.jsx
├─ .env
├─ package.json
└─ README.md

---

## Deployment

This project is deployed on Vercel: [https://news-today-eta.vercel.app/](https://news-today-eta.vercel.app/)

---

## 👩‍💻 Author

**Shakirat Akanji**

- GitHub: [@Anikhe00](https://github.com/Anikhe00)
- LinkedIn: [Shakirat Akanji](https://www.linkedin.com/in/shakirat-akanji/)
