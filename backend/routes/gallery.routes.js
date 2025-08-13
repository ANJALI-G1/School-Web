import express from 'express';
import multer from 'multer';
import {
  uploadImage,
  deleteImage,
  updateImage,
  getGallery
} from '../controllers/Gallery.Controller.js';

import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post('/', verifyToken, upload.single('image'), uploadImage);
router.delete('/:id', verifyToken, deleteImage);
router.put('/:id', verifyToken, upload.single('image'), updateImage); // if updating image too
router.get('/', getGallery);

export default router;
