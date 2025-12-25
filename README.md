# Enrollment Form App

A modern, multi-step enrollment form built with Next.js (App Router).
The app guides users through multiple steps to collect academic, address, and guardian details, with validation at each stage and a final review before submission.

## Features:
- Multi-step enrollment flow (Step 1 - Step 2 - Step 3 - Review)
- Persistent form data across steps using **React Context API**
- Form validation using **React Hook Form + Zod**
- Clean black–indigo UI with Tailwind CSS
- Responsive layout for all screen sizes
- Review page showing all entered data before final submission

## Tech Stack:
- **Next.js (App Router)** – Framework for routing and server/client components
- **JavaScript** – Core language
- **React** – UI components and hooks
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Prebuilt UI components
- **Radix UI** – Accessible primitives used by shadcn
- **React Hook Form** – Form handling and performance
- **Zod** – Schema-based form validation
- **React Context API** – Global form state management

## How the App Works:
- Each step is a separate route under **/enroll**
- User cannot move to the next step unless required data is filled
- Data from all steps is stored in a shared context
- The Review page displays all collected information before submission
- Navigation is protected

## How to Run the Project:
### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start development server
```bash
npm run dev
```

The app will be available at: `http://localhost:3000/enroll`

## Improvements Planned:
- Back button support on each step
- PIN Auto-Fill (mock): auto-fill State & City based on PIN
- Disable Next button while submitting
- Subject catalog by Class (subjects update dynamically)


### Author:
Khushi | sharmakhushi1501@gmail.com
Form step transition animations

Dark/Light theme toggle
