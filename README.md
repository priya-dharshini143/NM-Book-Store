# NM-Book-Store
BOOK-STORE  is a full-featured online bookstore web application developed using the MERN stack (MongoDB, Express, React, Node.js). Users can browse, search, and purchase books, while sellers can list their books and manage orders. The application includes user authentication, wishlist functionality, and admin control over user and seller accounts.

# Features
  ->User Authentication: Register, login, and logout functionality with secure password hashing.
  
  ->Book Browsing & Searching: Users can browse books, search by title, author, or genre.
  
  ->Wishlist & Orders: Users can add books to their wishlist, place orders, and view their order history.
  
  ->Seller Dashboard: Sellers can add, update, and delete books, and manage incoming orders.
  
  ->Admin Dashboard: Admins can manage users, view all listings, and oversee application activities.
  
  ->Responsive Design: Accessible on both desktop and mobile devices.

# Technologies
Frontend: React (with Vite), React Router, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose ORM

Other: Axios for HTTP requests, JWT for user authentication, bcrypt for password hashing

# Setup
  # Install server dependencies:
           cd server
           npm install
  # Install client dependencies:
          cd ../client
          npm install
  # Environment Variables: Create a .config file in the server directory with the following:
          MONGO_URI=your-mongodb-uri
          JWT_SECRET=your-jwt-secret
  # Run the server and client:
   # In one terminal, start the server:
          cd server
          npm start
  #  In another terminal, start the client:
          cd client
          npm run dev
Visit the App: Open your browser and navigate to http://localhost:5173 for the client.

# Usage
  1. Register as a new user or log in with existing credentials.
    
  2. Browse books by genre, title, or author.

  3. Add books to your wishlist for future reference.

  4. Sellers can log in to manage their book listings and view orders.
  
  5. Admin access provides control over users and listings.
