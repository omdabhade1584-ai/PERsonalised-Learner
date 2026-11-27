# PERsonalised-Learner
HEAD
🎓 Personalised Learner

An AI-Based Adaptive and Personalised Learning Platform

📌 About the Project

Personalised Learner is an AI-based educational platform designed to provide students with personalised learning experiences based on their knowledge level, learning progress, performance, and individual learning needs.

The system analyses student interactions, identifies weak concepts, recommends suitable learning resources, and dynamically adjusts assessment difficulty to improve learning outcomes.

The platform also provides teachers with student performance insights and analytics to monitor learning progress.

🎯 Project Objectives
Provide personalised learning experiences for individual students.
Track student learning activities and performance.
Identify weak concepts using knowledge tracing.
Recommend relevant learning materials and resources.
Adapt assessment difficulty based on student performance.
Provide meaningful feedback and hints.
Help teachers monitor student progress through analytics.
🧩 Project Modules
Module 1: User Authentication and Role Management

This module manages user registration, login, authentication, and role-based access.

Features:

Student registration and login.
Teacher registration and login.
Admin account management.
Secure password handling.
JWT-based authentication.
Role-based access control.
Module 2: Core Processing and Workflows

This module processes student learning activities and provides the foundation for personalised learning.

Features:

Student interaction tracking.
Learning activity processing.
Bayesian Knowledge Tracing (BKT).
Knowledge mastery estimation.
Weak-concept identification.
Performance analysis.
Module 3: Personalised Learning Path and Recommendation

This module recommends suitable learning resources according to individual student knowledge and performance.

Features:

Topic and subject management.
Topic prerequisite knowledge graph.
Personalised learning path generation.
Learning resource recommendations.
Content-based filtering.
Collaborative filtering.
Module 4: Adaptive Assessment, Feedback and Instructor Analytics

This module provides adaptive assessments and performance insights for students and teachers.

Features:

Adaptive quizzes.
Easy, medium, and hard difficulty levels.
Dynamic difficulty adjustment.
Topic-specific feedback and hints.
Student performance reports.
Teacher analytics dashboard.
Pre-test and post-test evaluation.
🛠️ Technology Stack
Component	Technology
Frontend	JavaScript, React.js
Backend	Python, FastAPI
Database	MongoDB
Authentication	JWT
Machine Learning	Python, Scikit-learn
Knowledge Tracing	Bayesian Knowledge Tracing
Data Processing	Pandas, NumPy
Knowledge Graph	NetworkX
Version Control	Git and GitHub

Technology choices will be finalised as implementation progresses.

🏗️ Project Architecture

The project follows a frontend-backend architecture.

text
              PERSONALised LEARNER
                       |
          +------------+------------+
          |                         |
     FRONTEND                   BACKEND
     React.js                   Python
          |                         |
          |                    FastAPI
          |                         |
          +---------- API ----------+
                       |
                 APPLICATION
                   LOGIC
                       |
          +------------+------------+
          |            |            |
       MongoDB      BKT Engine   Recommendation
       Database     Processing      Engine
          |            |            |
          +------------+------------+
                       |
                PERSONALIZED
                LEARNING PATH
                       |
               ADAPTIVE ASSESSMENT
                       |
               FEEDBACK & ANALYTICS

👥 Team Members

This project is developed collaboratively by a team of two members.

Team Member	GitHub Username
Member 1	@omdabhade1584-ai
Member 2	@nayanchimurkar8
📂 Planned Project Structure
text
Personalised-Learner/
│
├── backend/
│   ├── app/
│   │   ├── authentication/
│   │   ├── processing/
│   │   ├── recommendations/
│   │   ├── assessments/
│   │   └── analytics/
│   │
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   │
│   └── package.json
│
├── docs/
│
├── .gitignore
└── README.md


This is the planned structure. Folders will be created as we implement each module.

🚀 Development Roadmap
Project setup and environment configuration.
Module 1: User Authentication and Role Management.
Module 2: Core Processing and Workflows.
Module 3: Personalised Learning Path and Recommendation.
Module 4: Adaptive Assessment, Feedback and Instructor Analytics.
Frontend and backend integration.
Testing and debugging.
Final deployment and documentation.
🔄 Collaboration Workflow

We use Git and GitHub for collaborative development.

Development process:

Clone the project repository.
Create a separate feature branch.
Develop and test assigned functionality.
Commit changes with meaningful messages.
Push changes to GitHub.
Create a Pull Request.
Review and merge changes into the main branch.
🎓 Project Purpose

This project aims to demonstrate how artificial intelligence, machine learning, knowledge tracing, and adaptive assessment techniques can be applied to improve personalised education.

Project Name: Personalised Learner
Domain: Artificial Intelligence and Education Technology
Development Type: Collaborative Team Project
Team Size: 2 Members

 7f91a36 (Personalised Learner Frontend and basic set-up)
