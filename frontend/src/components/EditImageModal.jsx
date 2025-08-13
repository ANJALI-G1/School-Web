import { useState } from 'react';
import axios from '../utils/api';
import toast from 'react-hot-toast';
import { 
  FiDownload, 
  FiX, 
  FiUpload, 
  FiCalendar, 
  FiTag,
  FiSave
} from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';

export default function EditImageModal({ data, onClose, onUpdate }) {
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState(data.category);
  const [date, setDate] = useState(data.date.split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    if (imageFile) formData.append('image', imageFile);
    formData.append('category', category);
    formData.append('date', date);

    try {
      const response = await axios.put(`/gallery/${data._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      onUpdate(response.data);
      toast.success('Image updated successfully!');
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update image');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    try {
      // Create temporary anchor tag to trigger download
      const link = document.createElement('a');
      link.href = data.image.url;
      link.setAttribute('download', `msv-school-${category}-${date}.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Download started!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to download image');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiSave className="text-blue-600" />
            Edit Image
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Preview and Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <img 
                  src={imageFile ? URL.createObjectURL(imageFile) : data.image.url} 
                  alt="Preview" 
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={handleDownload}
                  className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  title="Download"
                  aria-label="Download image"
                >
                  <FiDownload size={16} />
                </button>
              </div>
              <label className="flex-1 cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors group">
                  <FiUpload className="text-gray-400 mb-2 group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                    {imageFile ? imageFile.name : 'Change image'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="hidden"
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Category Select */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <FiTag className="text-gray-400" />
              Category
            </label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
              <option value="event">Event</option>
              <option value="annual function">Annual Function</option>
              <option value="sports day">Sports Day</option>
              <option value="class activity">Class Activity</option>
              <option value="celebration">Celebration</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <FiCalendar className="text-gray-400" />
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <FiX size={18} />
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="animate-spin" size={18} />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave size={18} />
                  Update
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}