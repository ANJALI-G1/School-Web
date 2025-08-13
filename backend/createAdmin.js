import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashedPassword = await bcrypt.hash('admin123', 10); // Change this if needed
    await Admin.create({ username: 'admin', password: hashedPassword });
    console.log('✅ Admin created');
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
  } finally {
    process.exit();
  }
};

createAdmin();
