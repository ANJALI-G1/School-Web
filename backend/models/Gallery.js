import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const GallerySchema = new mongoose.Schema({
    image: {
        url: { type: String, required: true },
        public_id: { type: String, required: true }
    },
    category: {
        type: String,
        enum: ['event', 'annual function', 'sports day',"class activity" ,"celebration"],
        required: true
    },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Gallery', GallerySchema);