import express from 'express'
import multer from 'multer'
import cloudinary from '../utils/cloudinary.js'
import Gallery from '../models/Gallery.js'

export const uploadImage = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: "No image file provided" });
        }

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: 'school-gallery' }, (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(req.file.buffer);
        });

        const newEntry = await Gallery.create({
            image: {
                url: result.secure_url,
                public_id: result.public_id
            },
            category: req.body.category
        });

        res.status(201).json({ success: true, data: newEntry });
    } catch (error) {
        console.error("Error in upload Image controller", error.message);
        res.status(500).json({ success: false, message: 'upload failed' });
    }
}

export const deleteImage = async (req, res) => {
    try {
        const entry = await Gallery.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ success: false, message: "Image not found" });
        }

        await cloudinary.uploader.destroy(entry.image.public_id);
        await Gallery.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, message: "Image deleted " });
    } catch (error) {
        console.error("Error in delete Image controller", error);
        res.status(500).json({ success: false, message: 'Deletion failed' });
    }
}

export const updateImage = async (req, res) => {
    try {
        const entry = await Gallery.findById(req.params.id);

        //if new image is provide

        if (req.file) {
            await cloudinary.uploader.destroy(entry.image.public_id);


            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: 'school-gallery' },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(req.file.buffer);
            });

            entry.image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        if (req.body.category) {
            entry.category = req.body.category;
        }

        await entry.save();
        res.json({ success: true, data: entry });
    } catch (error) {
        console.error("Error in updateImage controller", error);
        res.status(500).json({ success: false, message: 'Update failed' });
    }
}
export const getGallery = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const total = await Gallery.countDocuments();
        const gallery = await Gallery.find()
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        res.json({
            success: true,
            data: gallery,
            pagination: {  
                total,
                page,
                pages: Math.ceil(total / limit),
                limit
            }
        });
    } catch (err) {
        
        res.status(500).json({ success: false, message: 'Could not fetch gallery' });
    }
};
