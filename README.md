# 🔐 PassOP — Your Own Password Manager

**PassOP** is a sleek, responsive, and modern web-based password manager built to securely store, manage, and organize your website credentials in one convenient place. Designed with a clean user interface and intuitive controls, PassOP takes the hassle out of remembering complex passwords across multiple platforms.

## ✨ Features

* **Add & Save Credentials:** Easily store website URLs, usernames, and passwords with instant form validation.

* **Show / Hide Password Toggle:** Safely toggle password visibility while typing or viewing saved credentials.

* **One-Click Copy:** Copy URLs, usernames, or passwords directly to your clipboard with instant toast notifications.

* **Edit & Delete Entries:** Seamlessly update existing credentials or remove outdated ones with confirmation prompts.

* **Persistent Storage:** All your saved credentials remain intact across browser sessions (supports LocalStorage / MongoDB backend integration).

* **Responsive & Clean UI:** Built with a modern green-and-dark aesthetic, animated icons, and full responsiveness across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS

* **Icons & Notifications:** Lordicon (Animated Icons), React Toastify

* **Storage / Backend:** LocalStorage *(or Node.js, Express & MongoDB if using the full-stack version)*

* **Version Control:** Git & GitHub

## 🚀 Getting Started

Follow these steps to run **PassOP** locally on your machine.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/your-username/passop.git
   
   ```

2. **Navigate to the project directory**

   ```
   cd passop
   
   ```

3. **Install dependencies**

   ```
   npm install
   
   ```

4. **Start the development server**

   ```
   npm run dev
   
   ```

5. **Open in Browser**
   Visit `http://localhost:5173` (or the port shown in your terminal) to start managing your passwords.

## 📂 Project Structure

```
passop/
├── public/               # Static assets and icons
├── src/
│   ├── components/       # Reusable UI components (Navbar, Manager, Footer)
│   ├── App.jsx           # Main application component
│   ├── index.css         # Tailwind CSS configuration and custom styles
│   └── main.jsx          # Application entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation

```

## 📸 Screenshots

*(Tip: Add screenshots of your dashboard and password table here to make your GitHub repository stand out!)*

```
![PassOP Dashboard](./screenshots/dashboard.png)

```

## 🔮 Future Enhancements

* \[ \] Implement end-to-end encryption for stored passwords

* \[ \] Add a built-in strong password generator

* \[ \] Add search and category filtering for saved accounts

* \[ \] Export/Import vault data as an encrypted JSON file

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/passop/issues) if you want to contribute.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).