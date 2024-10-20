// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Import routes
// const userRoutes = require('./routes/userRoutes');
// const jobRoutes = require('./routes/jobRoutes');

// app.use('/api/users', userRoutes);
// app.use('/api/jobs', jobRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define routes (import your routes here)
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

