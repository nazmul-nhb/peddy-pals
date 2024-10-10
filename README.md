# Peddy Pals 🐾

- DOM for Fun with TypeScript

Peddy Pals is a responsive pet adoption platform that allows users to browse, like, and adopt their favorite pets. The platform features multiple categories of pets, with detailed information about each animal. Users can filter pets by category and sort by price. Additionally, the platform stores liked pets locally, ensuring that the information is retained even after the page is refreshed. Built with Vanilla TypeScript and bundled with Vite, Peddy Pals aims to create a seamless experience for users looking to adopt a new pet.

## 🐕 Project Overview

Peddy Pals is a user-friendly platform designed for browsing and adopting pets from various categories such as dogs, cats, birds, and more. The platform fetches real-time pet data from the Peddy API and displays it in a visually appealing interface. The adoption process is gamified, offering a countdown before marking a pet as "Adopted." The app is fully responsive, ensuring optimal performance across desktop, tablet, and mobile devices.

### 🚀 Live Demo

- [Visit Peddy Pals Live](https://peddy-pals-nhb.vercel.app)

## 🎯 Key Features

1. **Dynamic Pet Categories & Pet Listings**:
   - Fetches real-time pet data from the Peddy API, displaying pets in categories such as dogs, cats, birds, and rabbit.
   - Each pet card includes essential details like name, breed, birth date, gender, and price, with the option to view further details in a custom made modal.

2. **Like & Local Storage Integration**:
   - Users can "like" pets, which adds the pet’s thumbnail to a right-side grid along with a like count.
   - The like count is persistent and saved in the browser’s local storage, so it remains intact upon page refresh.

3. **Adopt Button with Countdown**:
   - When the "Adopt" button is clicked, a countdown from 3 to 1 is triggered before the pet is marked as adopted.
   - A success message is displayed using Toastr, and the button is disabled once the adoption is complete.

4. **Price Sorting**:
   - Users can sort pets by price, either from low to high or high to low, with a single button toggle.

5. **Fully Responsive Design**:
   - The entire platform is optimized for desktop, tablet, and mobile devices, ensuring a smooth experience regardless of screen size.

## ⚙️ ES6+ Features Used

- **Array Methods**: Array methods such as `map()`, `filter()`, `sort()`, `forEach()`, `find()`, `reduce()` etc. are used throughout the project for dynamically rendering pet cards, filtering pets by category, sorting them by price, attaching event listeners, finding specific pets by ID, and for other purpose.
- **Arrow Functions**: For cleaner and more concise function expressions.
- **Template Literals**: To handle dynamic HTML and strings efficiently.
- **Promises and Async/Await**: Used to fetch data asynchronously from the API.
- **LocalStorage API**: Stores the liked pets data to persist across page reloads.
- **Modules**: Implemented with Vite for better modularity and bundling.

## 📦 Tech Stack

- **TypeScript**: Ensures type safety and helps catch potential errors early.
- **Vite**: Fast, lightweight bundler for efficient development and production builds.
- **Tailwind CSS**: Used for styling and ensuring responsive design.
- **Axios**: For handling API requests.
- **FontAwesome**: For adding beautiful icons across the platform.
- **Toastr**: For showing toast notifications on successful actions (e.g., pet adoption, subscribe to newsletter).

## 📑 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/nazmul-nhb/peddy-pals.git
   ```

2. Navigate to the project directory:

   ```bash
   cd peddy-pals
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local server in your browser:

    ```bash
    http://localhost:5173
    ```

## 🧪 Testing the Features

1. **Browse Pets**: By default, the platform displays all available pets. Click on the category buttons to filter by specific pet types.
2. **Like a Pet**: Click the heart icon on any pet to add it to your favorites on the right panel. Refresh the page, and you’ll notice the liked pets are still there!
3. **Adopt a Pet**: Click the "Adopt" button to initiate the adoption process, where a countdown will begin, and a success message will appear.
4. **Sort Pets by Price**: Use the "Sort by Price" button to toggle between sorting pets from low to high and high to low.

## 🛠 Challenges and Solutions

1. **Handling Null or Undefined Data**: For fields like breed or birth date, if the API response contains null values, placeholders such as "Unknown" or "Not Available" are displayed instead of leaving the fields blank.

2. **Local Storage for Likes**: Ensuring the liked pets' data is saved in local storage was crucial for persisting user preferences across sessions.

3. **Adopt Button Countdown**: Implementing a countdown for the adoption process added a more engaging user experience, improving interactivity.
