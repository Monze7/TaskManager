# 📝🚀 Task Manager App  

A full-stack **Task Manager** application with a frontend, backend, and database integration. The app allows users to **create, update, delete, and manage their tasks** efficiently.  

⚠️ *Currently under production – new features and optimizations are being added!*  


## 🌟 Features  
✅ **User Authentication** (Login/Signup)  
✅ **Create, Edit, and Delete Tasks**  
✅ **Set Task Priorities & Deadlines**  
✅ **Responsive UI** for all devices  
✅ **Secure REST API** for data handling  
✅ **Database storage** for tasks  

---

## 💻 Tech Stack  

### **Frontend (Client)**  
- ⚛ **React.js / Next.js**  
- 🎨 **Tailwind CSS / Bootstrap** for styling  
- 🔗 **Axios** for API calls  

### **Backend (Server)**  
- 🟢 **Node.js with Express.js**  
- 🗄 **MongoDB / PostgreSQL** for database  
- 🔑 **JWT Authentication**  
- 📡 **REST API architecture**  

---

## 📂 Installation & Setup  

### 1️⃣ Clone the Repository  

```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2️⃣ Install Dependencies  

```sh
# For Backend
cd backend
npm install

# For Frontend
cd frontend
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the backend and add:  

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application  

```sh
# Start Backend
cd backend
npm start

# Start Frontend
cd frontend
npm start
```

---

## 🔗 API Endpoints  

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/signup`   | Register a new user |
| POST   | `/api/auth/login`    | Login user         |
| GET    | `/api/tasks`         | Get all tasks      |
| POST   | `/api/tasks`         | Create a new task  |
| PUT    | `/api/tasks/:id`     | Update a task      |
| DELETE | `/api/tasks/:id`     | Delete a task      |

---

## 🚀 Future Enhancements  

🔹 **Task reminders & notifications** 🔔  
🔹 **Dark mode support** 🌙  
🔹 **Task sharing & collaboration** 👥  
🔹 **Mobile app version** 📱  

---

## 🛠 Contributing  

Want to contribute? Feel free to **fork the repo** and submit a **pull request**! 🚀  

---

## 📜 License  

This project is licensed under the **MIT License**.  

