# Social Media App

Welcome to the Social Media App! This application provides a platform for users to connect, share, and interact with each other through posts and profiles.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Splash Screen**

   - Display a visually appealing splash screen when the application is launched.

2. **Login**

   - Secure login mechanism with email/username and password.

3. **Signup**

   - Users can create a new account with a name and valid email address.

4. **Forgot Password**

   - Enable users to request a password reset via email using Firebase.

5. **Reset Password**

   - Allow users to change their password.

6. **Home Screen**

   - Display a feed of posts from all users with infinite scrolling for uninterrupted browsing.
   - Option to view a person's profile by clicking on their profile picture.

7. **Create Post**

   - User-friendly interface for creating and publishing new posts.

8. **Profile Screen (Own Profile)**

   - Display user's profile information, including username, profile picture, bio, and post history.
   - Allow users to edit their profile information.

9. **Profile Screen (Other User Profile)**

   - View profiles of other users including their username, profile picture, bio, and post history.

10. **Edit Profile**
    - Dedicated screen for users to edit their profile information, including updating their profile picture and bio.
    - Implement proper validation for profile edits.

## Tech Stack

- **React Native CLI** - Framework for building native apps using React.
- **TypeScript** - Strongly typed programming language for better development experience.
- **Redux Toolkit** - State management tool for efficient state management.
- **Firebase Client SDK** - For authentication and password reset functionalities.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/techlosetbootcamp/social-media-app-muhammad-qasim.git

   ```

2. **Navigate to the project directory:**
   ```bash
   cd social-media-app-muhammad-qasim-main
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure Firebase:**

   - Set up Firebase project and add configuration to the app.

5. **Run the application:**

   ```bash
   npm start
   ```

   - Alternatively, you can use `npm run android` or `npm run ios` to run on specific platforms.

## Usage

- **Splash Screen:** See the splash screen when launching the app.
- **Login/Signup:** Access the login and signup screens for authentication.
- **Home Screen:** Browse through posts and view user profiles.
- **Create Post:** Publish new posts through the create post interface.
- **Profile Management:** View and edit your profile and view other users' profiles.

## Contributing

We welcome contributions to improve the app. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
   Make your changes.
3. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
