BOOK-STORE  is a full-featured online bookstore web application developed using the MERN stack (MongoDB, Express, React, Node.js). Users can browse, search, and purchase books, while sellers can list their books and manage orders. The application includes user authentication, wishlist functionality, and admin control over user and seller accounts.

Features
User Authentication: Register, login, and logout functionality with secure password hashing.
Book Browsing & Searching: Users can browse books, search by title, author, or genre.
Wishlist & Orders: Users can add books to their wishlist, place orders, and view their order history.
Seller Dashboard: Sellers can add, update, and delete books, and manage incoming orders.
Admin Dashboard: Admins can manage users, view all listings, and oversee application activities.
Responsive Design: Accessible on both desktop and mobile devices.

Technologies
Frontend: React (with Vite), React Router, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose ORM
Other: Axios for HTTP requests, JWT for user authentication, bcrypt for password hashing

Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/bookease.git
cd bookease
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
Environment Variables: Create a .env file in the server directory with the following:

plaintext
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Run the server and client:

In one terminal, start the server:
bash
Copy code
cd server
npm start
In another terminal, start the client:
bash
Copy code
cd client
npm run dev
Visit the App: Open your browser and navigate to http://localhost:3000 for the client.
# NM-Book-Store
