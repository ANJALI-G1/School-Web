import { useState } from 'react';
import axios from '../utils/api';

export default function AddImageModal({ onClose }) {
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState('event');
  const [date, setDate] = useState('');
  const [uploading, setUploading] = useState(false);

  const categories = [
    { label: "Sports Day", value: "sports day" },
    { label: "Annual Function", value: "annual function" },
    { label: "Events", value: "event" },
    { label: "Class Activities", value: "class activity" },
    { label: "Celebrations", value: "celebration" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !date) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('category', category);
    formData.append('date', date);

    try {
      setUploading(true);
      await axios.post('/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploading(false);
      onClose();
    } catch (err) {
      setUploading(false);
      console.error(err);
      alert('Error uploading image');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl w-96 space-y-4">
        <h2 className="text-xl font-bold">Add Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="text-gray-500">Cancel</button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  );
}
