Raushan Kumar

## Briefly write about the project that you have submitted from the perspective of the user.
The Form Builder Application is a user-friendly tool for creating, submitting, and analyzing forms.

Admins can design forms with up to 100 questions (text, checkbox, dropdown), manage questions, and access detailed analytics like response counts and popular answers.
Users can submit responses anonymously without limits and view public analytics.
Built with Django and Django Rest Framework, it’s API-driven, modular, and scalable for future enhancements.

## Assumptions you have made for this project?
Users:
Admins are authenticated; end users submit responses anonymously.

Forms & Questions:
Forms have a max of 100 questions.
Supported question types: text, checkbox, dropdown.

Responses:
Unlimited submissions per form; checkbox/dropdown answers stored as JSON.
Analytics:

Text: Top 5 words (≥5 characters).
Checkbox/Dropdown: Top 5 options or combinations, others grouped as "Others."
Public Access:

Form analytics are accessible via public URLs.

Tech Choices:
SQLite database; scalable to PostgreSQL/MySQL.
Optional React frontend communicates via APIs.

Future-Ready:
Modular design allows easy addition of features like new question types or file uploads.

## Other information (like testing credentials)
Admin Credentials:
Username: admin
Password: admin123

API Testing:
Base URL: http://127.0.0.1:8000/api/

Example Endpoints:
Forms: /api/forms/
Analytics: /api/forms/<form_id>/analytics/

Frontend Access:
Start React app with npm start at http://localhost:3000/.

Database:
Default: SQLite (easily switchable).

Admin Panel:
URL: http://127.0.0.1:8000/admin/

## Did you learn anything new while doing this assignment? Please explain.

This assignment enhanced my skills in designing scalable, API-driven systems using Django and React. I learned how to create modular forms with dynamic question types, implement real-time analytics, and ensure clean architecture following best practices. It also reinforced the importance of proper validations, efficient ORM usage, and seamless frontend-backend integration.

## How much time did it take for you complete the project?

The project took approximately 15-20 hours to complete, including designing the architecture, implementing the backend and frontend, testing, and documentation.

## If you had more time, what enhancements will you make?

With more time, I would enhance analytics, add advanced question types, implement user authentication, improve the UI, enable role-based access, add form-sharing options, write comprehensive tests, and optimize performance.








