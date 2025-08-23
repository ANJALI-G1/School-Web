import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import galleryRoutes from './routes/gallery.routes.js';
import adminRoutes from './routes/admin.routes.js';
dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());

app.use('/gallery',galleryRoutes);
app.use('/api/admin', adminRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

connectDB();



app.listen(5000,()=>{
    console.log("Server started on port 5000");
})