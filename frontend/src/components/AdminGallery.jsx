import { useEffect, useState } from 'react';
import axios from '../utils/api';
import AddImageModal from './AddImageModal';
import EditImageModal from './EditImageModal';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchImages = async () => {
    const res = await axios.get('/gallery');
    setImages(res.data.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/gallery/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    fetchImages();
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Image
        </button>
      </div>

      <table className="w-full table-auto border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((img) => (
            <tr key={img._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">
                <img
                  src={img.image.url}
                  alt="gallery"
                  className="w-20 h-20 object-cover mx-auto rounded"
                />
              </td>
              <td className="border px-4 py-2">{img.category}</td>
              <td className="border px-4 py-2">
                {new Date(img.date).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() => setEditData(img)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(img._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <AddImageModal
          onClose={() => {
            setShowAddModal(false);
            fetchImages();
          }}
        />
      )}

      {editData && (
        <EditImageModal
          data={editData}
          onClose={() => {
            setEditData(null);
            fetchImages();
          }}
        />
      )}
    </div>
  );
}
