# MERN Authentication with Dark Mode Toggle and CRUD Operations

Welcome to the MERN Authentication platform! This comprehensive solution provides user authentication, CRUD operations, password reset functionality via email, and a dark/light mode toggle. This README outlines the key features, technical requirements, and future scope of the platform.

## Live Demo
Experience a live demo of the platform at ([https://your-demo-url.com](https://mern-auth-1-u8gw.onrender.com/)). Explore the features and see how the platform works in real-time.

## Features

### User Authentication
- **User Registration**: Users can sign up by providing their personal details.
- **User Login**: Users can log in with their credentials.
- **Profile Management**: Users can update their profile information.
- **Sign Out**: Users can securely sign out of the platform.

### Password Reset
- **Forgot Password**: Users can request a password reset link via email.
- **Password Reset**: Users can reset their password using the link sent to their email.

### CRUD Operations
- **Create**: Users can create new entries.
- **Read**: Users can view their entries.
- **Update**: Users can update their entries.
- **Delete**: Users can delete their entries.

### Theme Toggle
- **Dark Mode/Light Mode**: Users can toggle between dark mode and light mode for a better user experience.

## Future Scope
- **Enhanced Security Features**: Implement additional security measures like account lockout after multiple failed login attempts.
- **Two-Factor Authentication**: Add support for two-factor authentication (2FA) to enhance security.
- **Admin Dashboard**: Create an admin dashboard for managing users and monitoring platform activity.

## Technical Requirements

### Backend
- **Node.js**: Runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: Database.
- **Mongoose**: ODM for MongoDB.
- **Nodemailer**: For sending emails.
- **JWT**: For managing authentication tokens.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Frontend build tool.
- **Firebase**: For OAuth (Google authentication).

## Installation and Setup
Follow these steps to set up and run the platform:

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
# Navigate to the api directory
cd api

# Install dependencies
npm install

# Create a `.env` file in the server directory and add the following:
# MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/mydatabase?retryWrites=true&w=majority
# JWT_SECRET=your_jwt_secret
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_email_password_or_app_password

# Start the backend server
npm start
# Navigate to the client directory
cd ../client

# Install dependencies
npm install

# Create a `.env` file in the client directory and add the following:
# VITE_FIREBASE_API_KEY=your_firebase_api_key
# VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
# VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
# VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
# VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
# VITE_FIREBASE_APP_ID=your_firebase_app_id

# Start the frontend development server
npm run dev

# Build the frontend for production
npm run build
```
## Contributing
Contributions are welcome! If you'd like to contribute to the Nirakshak platform, please submit a pull request or open an issue on the repository.
## License

This README file provides a comprehensive overview of your platform, including its features, technical requirements, installation steps, and future scope. It also includes guidance on how to contribute and mentions the licensing information.
