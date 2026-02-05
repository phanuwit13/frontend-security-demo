import express from 'express';
import session from 'express-session';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // fix it
// const csrfProtection = (req, res, next) => {
//   // เช็คเฉพาะ Method ที่มีการเปลี่ยนข้อมูล (POST, PUT, DELETE)
//   if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
//     if (!req.headers['x-requested-with']) {
//       return res.status(403).send("Potential CSRF detected!");
//     }
//   }
//   next();
// };

// ⚠️ ตั้งค่า CORS ให้ยอมรับ Credentials (Cookie) จาก Frontend
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// // fix it
// app.use(csrfProtection);

app.use(session({
  name: 'bank-session',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    sameSite: false
  }
  // fix it
    // cookie: { 
    //   httpOnly: true,
    //   sameSite: 'lax', // หรือ 'strict' ถ้าต้องการความปลอดภัยสูงสุด
    //   secure: process.env.NODE_ENV === 'production' // ใช้ true เมื่อขึ้น production (HTTPS)
    // }
}));

let balance = 10000;

app.post('/login', (req, res) => {
  req.session.user = "JuniorDev";
  res.send({ message: "Logged in", balance });
});

// ❌ Endpoint ที่มีช่องโหว่ (ไม่มีการเช็ค CSRF Token)
app.post('/transfer', (req, res) => {
  console.log('req.session.user', req.session.user)

  if (!req.session.user) return res.status(401).send("Unauthorized");

  const { amount, to } = req.body;
  balance -= amount;
  console.log(`[!] Transferred ${amount} to ${to}`);
  res.send({ message: "Transfer successful", newBalance: balance });
});

app.get('/balance', (req, res) => {
  if (!req.session.user) return res.status(401).send("Unauthorized");
  res.send({ balance });
});

app.listen(8080, () => console.log('✅ Bank API running on http://localhost:8080'));