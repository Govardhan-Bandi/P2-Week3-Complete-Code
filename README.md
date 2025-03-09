# 🏆 Auction App

A real-time online auction platform where users can place bids, manage auctions, and track bidding activity.

## 🚀 Features
✅ **Real-Time Bidding** (WebSockets)  
✅ **User Authentication** (JWT-based login/signup)  
✅ **Secure Password Hashing** (bcrypt)  
✅ **Auction Management** (Post, Edit, Delete Auctions)  
✅ **Responsive UI** (TailwindCSS/Material-UI)  
✅ **MongoDB Atlas for Cloud Database**  

## 🛠 Tech Stack
- **Frontend:** React.js, React Router, WebSockets (Socket.io)  
- **Backend:** Node.js, Express.js, MongoDB  
- **Database:** MongoDB Atlas  
- **Authentication:** JWT, bcrypt  
- **Deployment:** Vercel (Frontend), Render (Backend)  

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/auction-app.git
cd auction-app
```

### 2️⃣ Backend Setup  
```bash
cd backend
npm install
```  
Create a `.env` file in the `backend` folder and add:
```
MONGO_URI=mongodb+srv://your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

Run the backend server:  
```bash
npm start
```

### 3️⃣ Frontend Setup  
```bash
cd frontend
npm install
npm start
```  

## 🚀 Deployment  
- **Frontend:** Deploy on [Vercel](https://vercel.com/)  
- **Backend:** Deploy on [Render](https://render.com/)  

## 📜 License  
This project is open-source and free to use.  


## 💳 Payment Gateway (Stripe Integration)
- Make sure you have a Stripe account and get your **Publishable Key** & **Secret Key**.
- Add your **keys** to the `.env` file in the backend:
```
STRIPE_SECRET_KEY=your_stripe_secret_key
```
- Install dependencies in both backend & frontend:
```
cd backend && npm install
cd frontend && npm install
```
- Run the app:
```
cd backend && npm start
cd frontend && npm start
```


## 🔥 New Features Added
- **Dark Mode Toggle** – Users can switch between dark and light themes.
- **Auction Countdown Timer** – Displays live auction end time.
- **Google OAuth Login** – Users can sign in with their Google accounts.
- **Live Bid Updates** – WebSockets ensure real-time bidding experience.
- **Payment Integration** – Secure transactions with Stripe.
- **Security Enhancements** – 2FA, OAuth, JWT, and session expiry handling.

## 📌 How to Setup
- **Backend:** Install dependencies and run:
  ```bash
  cd backend && npm install && npm start
  ```
- **Frontend:** Install dependencies and run:
  ```bash
  cd frontend && npm install && npm start
  ```

## 🚀 Deployment Ready
- **Frontend**: Vercel  
- **Backend**: Render / AWS  
- **Database**: MongoDB Atlas  
