# GitHub Developer Dashboard

A full-stack analytics dashboard that transforms raw GitHub profile data into actionable developer insights.

Built using React, Node.js, Express, and the GitHub REST API, the application provides a clean interface for exploring developer profiles, repository metrics, language distribution, and repository-level analytics.

---

## Live Demo

Frontend: [Add Vercel URL]

Backend API: [Add Render URL]

---

## Project Overview

GitHub Developer Dashboard enables users to search any public GitHub profile and instantly visualize:

* Developer profile information
* Repository statistics
* Language distribution
* Repository analytics
* Recent search history
* Detailed repository insights

The project focuses on delivering a responsive and user-friendly experience while demonstrating full-stack development principles such as API integration, caching, analytics generation, state management, and scalable component architecture.

---

## Key Features

### Developer Profile Dashboard

* Profile avatar and bio
* Followers and following count
* Public repository statistics

### Repository Explorer

* Search repositories
* Sort repositories by multiple criteria
* Expand repository details
* View repository metadata

### Developer Analytics

* Primary language detection
* Most starred repository
* Language distribution visualization
* Repository activity insights

### User Experience Enhancements

* Recent search history using Local Storage
* Full-screen loading states
* Error handling and validation
* Responsive design
* GitHub-inspired dark theme

### Performance Optimizations

* Server-side caching layer
* Reduced redundant GitHub API requests
* Faster subsequent searches

---

## System Architecture

┌──────────────────────┐
│    React Frontend    │
└──────────┬───────────┘
│
▼
┌──────────────────────┐
│    Express Backend   │
└──────────┬───────────┘
│
▼
┌──────────────────────┐
│    Cache Service     │
└──────────┬───────────┘
│
▼
┌──────────────────────┐
│    GitHub REST API   │
└──────────────────────┘

### Request Flow

1. User searches a GitHub username.
2. Frontend sends request to Express backend.
3. Backend checks cache.
4. Cached response is returned if available.
5. Otherwise GitHub API is queried.
6. Data is transformed into a clean response format.
7. Response is cached and returned to frontend.
8. Analytics are generated and visualized.

---

## Tech Stack

### Frontend

* React
* Tailwind CSS
* Recharts
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* Axios

### APIs

* GitHub REST API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.jsx
│
server/
├── controllers/
├── routes/
├── services/
├── app.js
└── server.js

---

## Analytics Implemented

The dashboard generates several derived metrics from raw GitHub data:

* Total Stars
* Total Forks
* Primary Language
* Repository Distribution by Language
* Most Starred Repository
* Repository Activity Analysis

These metrics are computed dynamically from repository data returned by GitHub APIs.

---

## Screenshots

### Dashboard Overview

![alt text](image.png)
![alt text](image-1.png)

### Developer Analytics

![alt text](image-2.png)

### Repository Explorer

![alt text](image-3.png)

---

## Installation

### Clone Repository

```bash
git clone <https://github.com/Mayank1343/github-repo-explorer.git>
cd github-developer-dashboard
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
```

---

## Future Enhancements

* GitHub OAuth Authentication
* Repository Comparison Tool
* Advanced Repository Analytics
* Contribution Activity Tracking

---

## Learning Outcomes

This project strengthened understanding of:

* REST API Integration
* Backend Architecture
* Data Transformation
* Caching Strategies
* State Management
* Component-Based Design
* Data Visualization
* Responsive UI Development

---

## Author

Mayank Sharma

B.Tech Computer Science Engineering
Graphic Era Hill University

GitHub: https://github.com/Mayank1343
LinkedIn: https://www.linkedin.com/in/mayanksharmaa13/
