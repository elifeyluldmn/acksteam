// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reservationRoutes = require('./routes/Reservation');
const app = express();

app.use(express.json());  // JSON verilerini alabilmek için
app.use(cors());  // CORS ayarları (farklı portlarda çalışan frontend ile iletişim için)

app.use('/api', reservationRoutes);

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
