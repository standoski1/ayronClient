# Aryon snr Frontend Take-home Assignment

This is a Next.js frontend take-home assessment.


## Set up
Install dependencies
```shell
npm install
```
Start the project, the app will start on [http://localhost:3000](http://localhost:3000)
```shell
npm run dev
```
Run tests
```shell
npm run test
```

Developer
This project was developed by Ezihe Stanley, a senior frontend developer with extensive experience in designing and implementing innovative solutions across various industries.

Contact
Email: ezihestanley@gmail.com
GitHub: Ezihe Stanley
LinkedIn: Ezihe Stanley
About the Project
The Security Rules Management Dashboard is a React-powered web application that provides security teams with an efficient and user-friendly interface to manage, review, and enforce policy rules. Its purpose is to simplify the tracking and implementation of security measures, offering enhanced visibility into potential vulnerabilities while supporting compliance efforts.

Core Features:
Search and Filter Tools: Locate specific rules easily with comprehensive search and filtering capabilities.
Rule Insights: Gain detailed insights into security recommendations, including impacts, affected resources, and compliance frameworks.
High Performance: Handles large datasets seamlessly without compromising performance.
Modern UI: An intuitive and responsive interface that ensures ease of use for security teams.
With these features, the dashboard is an essential tool for prioritizing and managing security policies effectively.

Key Features
1. Dashboard Overview
Infinite scrolling for recommendations
Each recommendation displays:
Title and description
Risk scores
Quick archiving option
Responsive design with error/loading states
2. Search and Filter System
Debounced search functionality (300ms delay)
Real-time updates and "no results" feedback
3. Detailed Recommendation View
4. Archive Management
5. Authentication
Login with form validation
Protected routes for secure access
Persistent authentication state
Logout functionality
Technical Requirements
1. TypeScript
Fully typed components with strict mode enabled
Interface and type definitions
2. State Management
Redux Toolkit was used
3. Session Management (Optional)
Token-based authentication (JWT)
Automatic session timeout handling
4. Styling
Designed using TailwindCSS
Fully responsive and thematically consistent
5. Performance Optimization
Code splitting and lazy loading
Effective memoization techniques
Proper management of loading states
6. Testing
Comprehensive unit tests for components