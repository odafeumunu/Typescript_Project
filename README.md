# 🚀 Lendsqr Assessment - Streamlining User Management with React! 💻

This project is a **modern and professional** user management dashboard built with **React** and **TypeScript**. It provides a seamless experience for administrators to manage user data, filter, view user details, and perform essential actions. 

## ✨ Features

- 👤 **User Authentication**: Secure login and protected routes using `AuthContext`.
- 📊 **Dashboard**: At-a-glance view of key user metrics.
- 🔍 **User Filtering**: Advanced filtering options to find users based on various criteria.
- ℹ️ **User Details**: Comprehensive details for each user with multiple sections.
- 🛡️ **Protected Routes**: Ensure only authenticated users can access sensitive data.
- 🎨 **Styled Components**: Beautiful and responsive UI using SCSS modules.

## 🛠️ Installation

Get started by setting up the project locally:

- ⬇️ **Clone the Repository**:
 ```bash
 git clone https://github.com/odafeumunu/lendsqr-fe-test.git
 ```

- 📦 **Install Dependencies**:
 ```bash
 cd lendsqr-fe-test
 npm install
 ```

- ⚙️ **Run the Development Server**:
 ```bash
 npm run dev
 ```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 💻 Usage

### 🔑 Authentication

1.  Navigate to the root path `/` to access the **Login Page**.
2.  Use the credentials `lendsqr@gmail.com` for the username and `password123` for the password.
3.  Upon successful authentication, you will be redirected to the **Dashboard**.

### 🚀 Dashboard

1. The Dashboard provides an overview of user statistics.
2.  Use the sidebar to navigate to other sections.

### 🔎 User Filtering

1.  Click on the **User Filter** link in the sidebar.
2.  Use the filtering options to search for specific users.

### ℹ️ User Details

1.  Click on a user in the user list to view their detailed information.
2.  Use the tabs to navigate through the various sections of user details.

<details>
<summary>Detailed Usage Instructions</summary>

#### Authentication

To log in, enter the credentials `lendsqr@gmail.com` and `password123` in the login form. Upon successful login, you will be redirected to the dashboard.

```jsx
 <Route path="/" element={<Login />} />
 ```

#### Dashboard

The dashboard provides a high-level overview of user statistics. It includes components such as:

- **Header**: Contains search bar, logo, and profile info.

```jsx
<Header toggleSidebar={toggleSidebar} />
```

- **Sidebar**: Contains navigation links to different sections of the application.

```jsx
<Sidebar isOpen={isSidebarOpen} />
```

- **Content**: Displays user data and filtering options.

```jsx
 <Content filteredUsers={filteredUsers} children={undefined} />
```

#### User Filtering

The User Filter component allows you to filter users based on organization, username, email, phone number, and status.

```jsx
<Route
  path="/userfilter"
  element={
    <ProtectedRoute>
      <UserFilter />
    </ProtectedRoute>
  }
/>
```

#### User Details

The User Detail component displays comprehensive information about a selected user.

```jsx
<Route
  path="/userdetail/:id"
  element={
    <ProtectedRoute>
      <UserDetail />
    </ProtectedRoute>
  }
/>
```

</details>

## 🧰 Technologies Used

| Technology                      | Description                                                                 | Link                                                                               |
| :------------------------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **React**                       | A JavaScript library for building user interfaces                             | [https://react.dev/](https://react.dev/)                                         |
| **TypeScript**                  | A typed superset of JavaScript that compiles to plain JavaScript            | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                |
| **React Router DOM**            | Provides routing functionalities for React applications                     | [https://reactrouter.com/](https://reactrouter.com/)                               |
| **Sass**                        | A CSS preprocessor to enhance styling                                      | [https://sass-lang.com/](https://sass-lang.com/)                                   |
| **ESLint**                      | A JavaScript linting tool                                                   | [https://eslint.org/](https://eslint.org/)                                         |
| **Vite**                        | Next Generation Frontend Tooling                                            | [https://vitejs.dev/](https://vitejs.dev/)                                         |
| **React Helmet** | A component to control document head contents in a React application | [https://github.com/nfl/react-helmet](https://github.com/nfl/react-helmet) |

## 🤝 Contributing

We welcome contributions from the community! 🎉 To contribute, please follow these guidelines:

- 💡 **Fork the Repository** and create your branch from `main`.
- ✍️ **Write meaningful commit messages**.
- 🧪 **Test your changes** thoroughly.
- 🚀 **Submit a pull request** with a clear description of your changes.

## 📜 License

This project is under the [MIT License](link-to-mit-license).

## 👨‍💻 Author Info

- **Odafe Umunu** - [Github](https://github.com/odafeumunu)

---
