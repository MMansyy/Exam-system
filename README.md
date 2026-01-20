# Quizee - Online Exam Management System

A modern, interactive online examination platform that enables students to take quizzes and instructors to manage assessments. Built with React, TypeScript, and a RESTful backend API.

## Project Description

Quizee is a comprehensive online exam management system designed to digitize and streamline the examination process for educational institutions. The platform addresses the challenges of traditional paper-based exams by providing:

- **Automated Exam Generation**: Dynamic quiz creation from course materials
- **Real-time Assessment**: Instant exam submission and grading
- **Performance Tracking**: Comprehensive results dashboard for students and instructors
- **Role-based Access**: Separate interfaces for students and instructors
- **User-friendly Interface**: Clean, responsive design that works on all devices

This project exists to modernize the examination process, reduce manual grading workload, and provide students with immediate feedback on their performance.

## Tech Stack

### Frontend
- **React 19.2.3** - UI library for building interactive user interfaces
- **TypeScript 5.9.3** - Type-safe JavaScript for better code quality
- **React Router DOM 7.11.0** - Client-side routing and navigation
- **Vite 7.3.0** - Fast build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for styling

### UI Components & Libraries
- **Radix UI** - Accessible, unstyled component primitives
- **Framer Motion 12.23.26** - Animation library for smooth transitions
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications for user feedback
- **React Hook Form 7.69.0** - Form validation and management

### Backend Integration
- **Axios 1.13.2** - HTTP client for API requests
- **Backend API** - ASP.NET Core Web API (https://localhost:7036/api)

### Development Tools
- **ESLint** - Code linting and quality checks
- **TypeScript ESLint** - TypeScript-specific linting rules

## Project Architecture

Quizee follows a modern **client-server architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│         Frontend (React SPA)             │
│  ┌─────────────────────────────────┐   │
│  │     Presentation Layer          │   │
│  │  - Pages (Login, Home, Exam)    │   │
│  │  - Components (Navbar, Cards)   │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │     State Management            │   │
│  │  - UserContext (Auth State)     │   │
│  │  - Local Storage (Persistence)  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │     API Integration Layer       │   │
│  │  - Axios Instance               │   │
│  │  - HTTP Interceptors            │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                    ↕ HTTP/REST
┌─────────────────────────────────────────┐
│      Backend API (ASP.NET Core)          │
│  ┌─────────────────────────────────┐   │
│  │     Controllers/Endpoints       │   │
│  │  - Login, Exam, Correction      │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │     Business Logic Layer        │   │
│  │  - Exam Generation              │   │
│  │  - Answer Correction            │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │     Database Layer              │   │
│  │  - SQL Server                   │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Key Architectural Patterns:
- **Component-Based Architecture**: Reusable React components with clear responsibilities
- **Context API**: Centralized user authentication state management
- **Protected Routes**: Route guards based on user roles
- **Separation of Concerns**: Clear distinction between UI, business logic, and data layers
- **RESTful API Integration**: Standardized HTTP methods for CRUD operations

## Features

### Core Features
- ✅ **User Authentication** - Role-based login system for students and instructors
- ✅ **Dynamic Exam Generation** - Automatic quiz creation with customizable question types (MCQ, True/False)
- ✅ **Interactive Exam Interface** - Clean, user-friendly exam taking experience
- ✅ **Real-time Answer Selection** - Visual feedback for selected answers
- ✅ **Automatic Grading** - Instant exam correction and scoring
- ✅ **Results Dashboard** - Comprehensive view of all exam results with scores and percentages
- ✅ **Course Management** - Browse and select available courses/quizzes
- ✅ **Search Functionality** - Quick search to find specific courses
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### Student Features
- View enrolled courses and available quizzes
- Take exams with multiple question types
- Submit answers and receive instant grades
- View historical exam results and performance metrics
- Track average scores across all exams

### Instructor Features
- Access instructor dashboard
- View student information
- Monitor exam system (expandable)

## User Roles

### 1. Student Role
**Access Level**: Standard User

**Capabilities**:
- Login with student ID
- Browse available courses and quizzes
- Search for specific courses
- Take generated exams (MCQ and True/False questions)
- Submit exam answers
- View exam results immediately after submission
- Access results history with detailed performance metrics
- Track overall academic performance (average scores, pass/fail status)

**Main Pages**: Home, Exam, Results

### 2. Instructor Role
**Access Level**: Administrative User

**Capabilities**:
- Login with instructor ID
- Access instructor-specific dashboard
- View instructor profile information
- Monitor exam system (feature in development)
- Manage course assessments (future enhancement)

**Main Pages**: Dashboard

## Installation & Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Backend API Server** - Ensure the backend API is running on `https://localhost:7036`

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MMansyy/Exam-system.git
   cd Exam-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`.

3. **Verify Installation**
   ```bash
   npm list --depth=0
   ```
   Ensure all dependencies are installed without errors.

4. **Configure Backend API**
   
   The API base URL is configured in `src/lib/axios.global.ts`. Update if needed:
   ```typescript
   baseURL: 'https://localhost:7036/api'
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:5173` (or another available port).

6. **Build for Production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `dist` directory.

7. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Serves the production build locally for testing.

## Environment Variables

Currently, the application **does not use a `.env` file**. Configuration is hardcoded in the source code.

### Current Configuration

The API base URL is configured in `src/lib/axios.global.ts`:
```typescript
const axiosInstance = axios.create({
    baseURL: 'https://localhost:7036/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
```

### Recommended: Adding Environment Variables

For better configuration management (especially for production deployments), consider creating a `.env` file:

1. **Create `.env` file** in the root directory:
   ```env
   VITE_API_BASE_URL=https://localhost:7036/api
   VITE_APP_NAME=Quizee
   ```

2. **Update `axios.global.ts`** to use environment variables:
   ```typescript
   const axiosInstance = axios.create({
       baseURL: import.meta.env.VITE_API_BASE_URL,
       headers: {
           'Content-Type': 'application/json',
       }
   });
   ```

3. **Add `.env` to `.gitignore`** (if not already there):
   ```
   .env
   .env.local
   .env.production
   ```

**Note**: Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client.

## API Endpoints

The frontend communicates with the backend API at `https://localhost:7036/api`. Below are the key endpoints:

### Authentication Endpoints
| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST | `/login/check` | Authenticate user | `{ id: string, role: string }` | `{ id: string, role: string, name: string }` |

### Student Endpoints
| Method | Endpoint | Description | Parameters | Response |
|--------|----------|-------------|------------|----------|
| GET | `/student/{studentId}/courses` | Get student's enrolled courses | `studentId` (path) | Array of courses |

### Exam Endpoints
| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| POST | `/Exam/generate` | Generate new exam | `courseName`, `mcqNum`, `tfNum` | Array of questions |
| POST | `/ExamSubEP/submit` | Submit exam answers | Request body: `ExamSubmission` | Submission confirmation |

### Correction Endpoints
| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| POST | `/ExamCorrectionEP/correct` | Auto-correct exam | `exId` (exam ID) | Correction result |
| GET | `/ExamCorrectionEP/student-grades/{studentId}` | Get student exam results | `studentId` (path) | Array of exam results |

### Request/Response Models

**ExamSubmission Model**:
```typescript
{
    ex_ID: number,           // Exam ID
    st_ID: number,           // Student ID
    answers: [
        {
            q_ID: number,    // Question ID
            st_Answer: string // Student's answer
        }
    ]
}
```

**ExamResult Model**:
```typescript
{
    ex_ID: number,
    courseName: string,
    studentDegree: number,
    totalExamDegree: number,
    examDate: string | null
}
```

**Course Model**:
```typescript
{
    crs_ID: number,
    crs_Name: string
}
```

## Database Models / Schema Overview

The backend uses **SQL Server** with the following key entities:

### Main Tables

#### 1. **Students Table**
```sql
- st_ID (Primary Key)
- st_Name
- st_Email
- [Other student information]
```

#### 2. **Instructors Table**
```sql
- ins_ID (Primary Key)
- ins_Name
- [Other instructor information]
```

#### 3. **Courses Table**
```sql
- crs_ID (Primary Key)
- crs_Name
- crs_Description
- [Course details]
```

#### 4. **Exams Table**
```sql
- ex_ID (Primary Key)
- crs_ID (Foreign Key → Courses)
- exam_Date
- total_Degree
- [Exam metadata]
```

#### 5. **Questions Table**
```sql
- q_ID (Primary Key)
- ex_ID (Foreign Key → Exams)
- q_Text (Question content)
- q_Type (MCQ, True/False)
- option_A
- option_B
- option_C (nullable for True/False)
- correct_Answer
```

#### 6. **Student_Exams Table** (Junction Table)
```sql
- st_ID (Foreign Key → Students)
- ex_ID (Foreign Key → Exams)
- submission_Date
- student_Degree
- [Exam attempt details]
```

#### 7. **Student_Answers Table**
```sql
- st_ID (Foreign Key → Students)
- q_ID (Foreign Key → Questions)
- st_Answer
- is_Correct (Boolean)
```

### Entity Relationships
- Students **many-to-many** Courses (through enrollment)
- Courses **one-to-many** Exams
- Exams **one-to-many** Questions
- Students **many-to-many** Exams (through Student_Exams)
- Students **one-to-many** Student_Answers
- Questions **one-to-many** Student_Answers

## Folder Structure Explanation

```
Exam-system/
├── public/                      # Static assets
│   └── images/                  # Image assets (course thumbnails, etc.)
│       └── Art.png              # Default course image
│
├── src/                         # Source code directory
│   ├── App.tsx                  # Main app component with routing configuration
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles and Tailwind imports
│   │
│   ├── Context/                 # React Context for state management
│   │   └── UserContext.tsx      # User authentication state and reducer
│   │
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Base UI components (shadcn/ui)
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── card.tsx         # Card component
│   │   │   ├── input.tsx        # Input field component
│   │   │   ├── label.tsx        # Label component
│   │   │   ├── select.tsx       # Select dropdown component
│   │   │   ├── badge.tsx        # Badge component
│   │   │   ├── separator.tsx    # Separator line component
│   │   │   ├── field.tsx        # Form field wrapper
│   │   │   └── radio-group.tsx  # Radio button group
│   │   │
│   │   ├── Navbar/              # Navigation components
│   │   │   ├── Navbar.tsx       # Main navigation bar
│   │   │   └── Menu.tsx         # Mobile menu component
│   │   │
│   │   ├── QuizCard/            # Quiz/Course card component
│   │   │   └── QuizCard.tsx     # Course card display
│   │   │
│   │   └── Login-from/          # Login form component
│   │       └── login-form.tsx   # Login form with validation
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Login/               # Login page
│   │   │   └── Login.tsx        # User authentication page
│   │   │
│   │   ├── Home/                # Home page (student dashboard)
│   │   │   └── Home.tsx         # Course listing and search
│   │   │
│   │   ├── Exam/                # Exam taking page
│   │   │   └── Exam.tsx         # Exam interface with questions
│   │   │
│   │   ├── Results/             # Results page
│   │   │   └── Results.tsx      # Student exam results dashboard
│   │   │
│   │   └── Dashbord/            # Instructor dashboard
│   │       └── Dashbord.tsx     # Instructor control panel
│   │
│   ├── layouts/                 # Layout components
│   │   └── MainLayout.tsx       # Main app layout with navbar
│   │
│   └── lib/                     # Utility libraries and configurations
│       ├── axios.global.ts      # Axios instance configuration
│       └── utils.ts             # Helper functions (cn utility)
│
├── components.json              # shadcn/ui components configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration (base)
├── tsconfig.app.json            # TypeScript configuration (app)
├── tsconfig.node.json           # TypeScript configuration (Node/Vite)
├── vite.config.ts               # Vite build tool configuration
└── README.md                    # Project documentation (this file)
```

### Key Directories Explained

- **`/src/pages`**: Contains all route-level components. Each subdirectory represents a page/route in the application.
- **`/src/components`**: Reusable components used across multiple pages. Organized by feature or UI library.
- **`/src/Context`**: Global state management using React Context API.
- **`/src/lib`**: Configuration files and utility functions (Axios setup, helper functions).
- **`/src/layouts`**: Layout wrappers that provide consistent structure across pages.
- **`/public`**: Static assets that are directly served (images, fonts, etc.).

## How to Run the Project

### Development Mode

Run the application in development mode with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:5173`
- **Network**: `http://<your-ip>:5173`

### Production Build

Create an optimized production build:

```bash
# 1. Build the application
npm run build

# 2. Preview the production build locally
npm run preview
```

The build output will be in the `dist/` directory.

### Linting

Check code quality and style issues:

```bash
npm run lint
```

### Additional Commands

```bash
# Install dependencies
npm install

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Clean install (removes node_modules and package-lock.json)
rm -rf node_modules package-lock.json && npm install
```

### Troubleshooting

**Port already in use:**
```bash
# Vite will automatically use the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

**Backend API connection issues:**
- Ensure the backend API is running on `https://localhost:7036`
- Check CORS settings in the backend
- Verify network connectivity

**Build errors:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

## Screenshots

<!-- Add screenshots of your application here -->

### Login Page
![Login Page Placeholder](https://via.placeholder.com/800x500?text=Login+Page+Screenshot)
*User authentication interface with role selection*

### Student Dashboard (Home)
![Student Dashboard Placeholder](https://via.placeholder.com/800x500?text=Student+Dashboard+Screenshot)
*Course listing with search functionality*

### Exam Interface
![Exam Interface Placeholder](https://via.placeholder.com/800x500?text=Exam+Interface+Screenshot)
*Interactive exam-taking experience with real-time answer selection*

### Results Dashboard
![Results Dashboard Placeholder](https://via.placeholder.com/800x500?text=Results+Dashboard+Screenshot)
*Comprehensive exam results with scores and performance metrics*

### Instructor Dashboard
![Instructor Dashboard Placeholder](https://via.placeholder.com/800x500?text=Instructor+Dashboard+Screenshot)
*Instructor control panel and system overview*

## Future Improvements

### High Priority
- [ ] **Enhanced Security**: Implement JWT-based authentication instead of simple ID lookup
- [ ] **Environment Configuration**: Move API URLs and configuration to environment variables
- [ ] **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- [ ] **Loading States**: Better loading indicators and skeleton screens
- [ ] **Exam Timer**: Add countdown timer for timed examinations
- [ ] **Question Navigation**: Allow students to skip and return to questions

### Feature Enhancements
- [ ] **Instructor Features**:
  - Create and manage custom exams
  - View detailed student analytics
  - Export results to CSV/PDF
  - Manage question banks
- [ ] **Student Features**:
  - Exam review mode (view correct answers after grading)
  - Performance analytics and progress tracking
  - Bookmark questions for review
  - Practice mode with instant feedback
- [ ] **Question Types**:
  - Essay questions with manual grading
  - Fill-in-the-blank questions
  - Matching questions
  - Image-based questions

### Technical Improvements
- [ ] **Testing**: Add unit tests (Jest/Vitest) and E2E tests (Playwright/Cypress)
- [ ] **State Management**: Consider Redux or Zustand for complex state
- [ ] **Code Splitting**: Lazy load routes and components for better performance
- [ ] **PWA**: Convert to Progressive Web App for offline support
- [ ] **Accessibility**: Improve ARIA labels and keyboard navigation
- [ ] **Internationalization**: Add multi-language support (i18n)
- [ ] **Dark Mode**: Implement system-wide dark mode theme
- [ ] **API Optimization**: Implement request caching and optimistic updates

### UI/UX Improvements
- [ ] **Animations**: Add more micro-interactions and transitions
- [ ] **Notifications**: Implement real-time notifications for exam availability
- [ ] **Pagination**: Add pagination for large result sets
- [ ] **Advanced Search**: Filter courses by category, difficulty, date
- [ ] **Mobile App**: Native mobile applications (React Native)
- [ ] **Dashboard Widgets**: Customizable dashboard with drag-and-drop widgets

### DevOps & Deployment
- [ ] **CI/CD Pipeline**: Automated testing and deployment
- [ ] **Docker**: Containerize the application
- [ ] **Monitoring**: Add error tracking (Sentry) and analytics
- [ ] **Performance**: Implement CDN for static assets
- [ ] **Documentation**: API documentation with Swagger/OpenAPI

## License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Quizee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Made with ❤️ by the Quizee Team**
