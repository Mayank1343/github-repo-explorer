# GitHub Developer Dashboard

> A full-stack analytics dashboard that transforms raw GitHub profile data into meaningful developer insights.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![GitHub API](https://img.shields.io/badge/GitHub-REST_API-181717?logo=github)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7)

---

## Live Demo

🌐 Frontend: https://github-dev-dashboard.vercel.app

⚙️ Backend API: https://github-dashboard-api-zz83.onrender.com

---

## Overview

GitHub Developer Dashboard is a full-stack web application that allows users to search any public GitHub profile and instantly explore developer statistics, repository insights, language distribution, and repository analytics.

The project was built to demonstrate practical full-stack engineering concepts including API integration, caching, state management, data visualization, responsive UI design, deployment, and production-ready architecture.

---

## Features

### Developer Profile Dashboard

* Developer avatar and profile information
* Bio, followers, following, and repository statistics
* Clean and responsive profile layout

### Repository Explorer

* Search repositories by name
* Sort repositories dynamically
* Expand repository details
* View repository metadata including:

  * Stars
  * Forks
  * Open Issues
  * Default Branch
  * Last Updated Date

### Developer Analytics

* Primary language detection
* Most starred repository
* Recently updated repository
* Total stars and forks
* Repository language distribution

### Data Visualization

* Interactive language distribution pie chart
* Repository analytics overview
* Dynamic metric generation from GitHub data

### User Experience

* Dark theme interface
* Recent search history using Local Storage
* Full-screen loading spinner
* Render server wake-up notification
* Error handling and validation
* Responsive design across devices

### Performance Optimization

* Server-side caching layer
* Reduced GitHub API requests
* Faster repeated searches
* GitHub Personal Access Token integration to avoid rate limiting

---

## Assessment Requirements Coverage

| Requirement | Status |
|------------|---------|
| React Frontend | ✅ Implemented |
| Node.js + Express Backend | ✅ Implemented |
| GitHub REST API Integration | ✅ Implemented |
| Developer Profile Dashboard | ✅ Implemented |
| Repository Explorer | ✅ Implemented |
| Analytics Dashboard | ✅ Implemented |
| Data Visualization | ✅ Implemented |
| Responsive UI | ✅ Implemented |
| Error Handling | ✅ Implemented |
| Caching Layer | ✅ Implemented |
| Environment Configuration | ✅ Implemented |
| Deployment | ✅ Implemented |
| README Documentation | ✅ Implemented |
| API Documentation | ✅ Implemented |

---

## System Architecture

| Layer | Responsibility |
|---------|---------------|
| React Frontend | User interface, state management, data visualization |
| Express Backend | API orchestration and data transformation |
| Cache Service | Reduces redundant GitHub API requests |
| GitHub REST API | Source of developer and repository data |

### Architecture Flow

```text
┌─────────────────────┐
│    React Client     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Express API      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Cache Service    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   GitHub REST API   │
└─────────────────────┘
```

### Request Flow

1. User enters a GitHub username.
2. React frontend sends a request to the Express backend.
3. Backend checks the cache for an existing response.
4. If cached data exists, it is returned immediately.
5. Otherwise, the backend fetches data from the GitHub REST API.
6. Data is transformed into a clean response format.
7. Response is cached for future requests.
8. Analytics and visualizations are rendered on the dashboard.


## API Documentation

### Base URL

Development

```text
http://localhost:5000/api/github
```

Production

```text
https://github-dashboard-api-zz83.onrender.com/api/github
```

---

### Get GitHub User Profile & Repositories

**Method**

```http
GET
```

**Endpoint**

```http
/api/github/:username
```

**Example**

```http
GET /api/github/mayank1343
```

**Request Body**

```json
None
```

**Success Response (200)**

```json
{
  "profile": {
    "login": "mayank1343",
    "name": "Mayank Sharma",
    "avatar": "https://...",
    "bio": "Software Developer",
    "followers": 1,
    "following": 0,
    "publicRepos": 16
  },
  "repos": [
    {
      "id": 123,
      "name": "github-repo-explorer",
      "description": "GitHub analytics dashboard",
      "language": "JavaScript",
      "stars": 5,
      "forks": 1,
      "updatedAt": "2026-06-06T12:00:00Z",
      "openIssues": 0,
      "defaultBranch": "main",
      "repoUrl": "https://github.com/..."
    }
  ]
}
```

**Error Response (404)**

```json
{
  "message": "GitHub user not found"
}
```

**Error Response (500)**

```json
{
  "message": "Internal server error"
}
```

### Response Fields

#### Profile Object

| Field | Type | Description |
|---------|---------|---------|
| login | string | GitHub username |
| name | string | Developer name |
| avatar | string | Profile image URL |
| bio | string | Developer bio |
| followers | number | Follower count |
| following | number | Following count |
| publicRepos | number | Total public repositories |

#### Repository Object

| Field | Type | Description |
|---------|---------|---------|
| id | number | Repository ID |
| name | string | Repository name |
| description | string | Repository description |
| language | string | Primary language |
| stars | number | Stargazer count |
| forks | number | Fork count |
| updatedAt | string | Last update timestamp |
| openIssues | number | Open issues count |
| defaultBranch | string | Default branch |
| repoUrl | string | GitHub repository URL |

---

## Tech Stack

### Frontend

| Technology | Purpose |
|------------|----------|
| React | Component-based UI development |
| Tailwind CSS | Utility-first responsive styling |
| Axios | HTTP requests to backend APIs |
| Recharts | Data visualization and analytics charts |
| React Icons | Lightweight icon library |

### Backend

| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript runtime environment |
| Express.js | REST API development |
| Axios | GitHub API communication |

### APIs

| API | Purpose |
|------|----------|
| GitHub REST API | Fetch public developer and repository data |

### Deployment

| Platform | Purpose |
|----------|----------|
| Vercel | Frontend hosting |
| Render | Backend hosting |

---

## Project Structure

```text
github-repo-explorer
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── DeveloperAnalytics.jsx
│   │   │   ├── ProfileCard.jsx
│   │   │   ├── RepoCard.jsx
│   │   │   ├── RepoList.jsx
│   │   │   └── StatsCards.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services
│   │   │   └── githubService.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   │   └── github.controller.js
│   │
│   ├── routes
│   │   └── github.routes.js
│   │
│   ├── services
│   │   ├── cacheService.js
│   │   └── githubService.js
│   │
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## Analytics Implemented

The dashboard derives several metrics directly from GitHub repository data:

| Metric                      | Description                        |
| --------------------------- | ---------------------------------- |
| Total Stars                 | Combined stars across repositories |
| Total Forks                 | Combined forks across repositories |
| Primary Language            | Most frequently used language      |
| Most Starred Repository     | Repository with highest stars      |
| Recently Updated Repository | Most active repository             |
| Language Distribution       | Repository breakdown by language   |

---

## Screenshots

### Dashboard Overview

![Dashboard](https://raw.githubusercontent.com/Mayank1343/github-repo-explorer/main/image.png)

### Profile & Analytics

![Analytics](https://raw.githubusercontent.com/Mayank1343/github-repo-explorer/main/image-1.png)

### Language Distribution

![Language Chart](https://raw.githubusercontent.com/Mayank1343/github-repo-explorer/main/image-2.png)

### Repository Explorer

![Repository Explorer](https://raw.githubusercontent.com/Mayank1343/github-repo-explorer/main/image-3.png)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Mayank1343/github-repo-explorer.git
cd github-repo-explorer
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

---

## Environment Variables

### Backend

Create:

```text
server/.env
```

```env
PORT=5000
GITHUB_TOKEN=your_github_personal_access_token
```

### Frontend

Create:

```text
client/.env
```

```env
VITE_API_URL=http://localhost:5000/api/github
```

---

## Production Deployment

### Frontend

Hosted on Vercel

### Backend

Hosted on Render

### Note

The backend runs on Render's free tier. The first request after inactivity may take a few seconds while the server wakes up.

---

## Challenges Solved

### GitHub API Rate Limiting

Implemented GitHub Personal Access Token authentication to increase API request limits from:

```text
60 requests/hour
```

to

```text
5000 requests/hour
```

### Faster Response Times

Implemented server-side caching to reduce redundant GitHub API requests and improve response times.

### Production Deployment

Configured environment-based API endpoints and deployed the application using Vercel and Render.

---

## Learning Outcomes

This project strengthened practical understanding of:

* Full-Stack Application Development
* REST API Integration
* Backend Service Architecture
* Caching Strategies
* Environment Configuration
* Data Transformation
* State Management
* Data Visualization
* Deployment Workflows
* Production Debugging

---

## Next Steps

Due to the limited assessment timeline, the following features were intentionally left out:

- Repository pagination for users with large repository counts
- Debounced search-as-you-type
- Automated backend testing
- Persistent server-side cache using Redis

Future improvements:

- GitHub OAuth Authentication
- Repository Comparison Tool
- Contribution Activity Tracking
- Advanced Developer Insights
- Repository Trend Analysis
- Redis-based distributed caching

---

## Author

**Mayank Sharma**

B.Tech Computer Science Engineering
Graphic Era Hill University

GitHub: https://github.com/Mayank1343

LinkedIn: https://www.linkedin.com/in/mayanksharmaa13/

---

⭐ If you found this project interesting, consider giving it a star.
