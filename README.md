# Vehicle Rental System

A complete vehicle rental management system with role-based access (Admin & Customer), JWT authentication, and automated booking logic.

### Live Demo
https://vehicle-rental-system-sepia.vercel.app

### Repository
https://github.com/RejwanulIslam/Vehicle-Rental-System

---

### Default Test Accounts (Auto-created on first run)

**Admin**  
Email: `admin@gmail.com`  
Password: `securePassword123`  
Role: `admin`

**Customer**  
Email: `customer@gmail.com`  
Password: `securePassword123`  
Role: `customer`

---

### Features

**Customers**  
- Register & login  
- Browse all vehicles  
- Book any available vehicle  
- View own booking history  
- Cancel booking before start date  

**Admins**  
- Full CRUD on vehicles and users  
- View all bookings  
- Manually mark booking as returned  

**Smart Automation**  
- Total price auto-calculation  
- Expired bookings automatically set to "returned"  
- Vehicle availability updated on return/cancellation  

---

### Technology Stack

- TypeScript  
- Node.js  
- Express.js  
- PostgreSQL  
- JWT + bcryptjs  
- Vercel (deployment)

---

### API Endpoints

**Auth**  
POST   /api/v1/auth/signup          → Register user (Public)  
POST   /api/v1/auth/signIn          → Login & get token (Public)

**Vehicles**  
GET    /api/v1/vehicles             → Get all vehicles (Public)  
GET    /api/v1/vehicles/:id         → Get single vehicle (Public)  
POST   /api/v1/vehicles             → Add vehicle (Admin only)  
PUT    /api/v1/vehicles/:id         → Update vehicle (Admin only)  
DELETE /api/v1/vehicles/:id         → Delete vehicle (Admin only)

**Bookings**  
POST   /api/v1/bookings             → Create booking (Authenticated)  
GET    /api/v1/bookings             → Get bookings (own for customer, all for admin) (Authenticated)  
PUT    /api/v1/bookings/:id         → Cancel or return booking (Authenticated)

**Users (Admin only)**  
GET    /api/v1/users                → Get all users  
PUT    /api/v1/users/:id            → Update user (admin or self)  
DELETE /api/v1/users/:id            → Delete user

---

### Local Setup

```bash
git clone https://github.com/RejwanulIslam/Vehicle-Rental-System.git
cd Vehicle-Rental-System
npm install

.env file
envPORT=5000
CONNECTIONSTRING=postgresql://postgres:yourpassword@localhost:5432/vehicle_rental
JWT_SECRET=your_very_strong_secret_key_here
Run database initialization (creates tables + default admin & customer)
Bash npx tsx ./src/config/DB.ts
Start development server
Bash npm run dev
Server runs at http://localhost:5000

Built with passion by Rejwanul Islam
