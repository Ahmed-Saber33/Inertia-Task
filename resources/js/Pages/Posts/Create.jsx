// resources/js/Pages/Posts/Create.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react'; // Import the correct Inertia router instance
import app from '../../../css/app.css'
function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        image: null, // To store the uploaded image
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0], // Set the selected file for the image
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        const data = new FormData();
        data.append('title', formData.title);
        data.append('body', formData.body);
        if (formData.image) {
            data.append('image', formData.image);

        }


        router.post('/store', data, {
            onError: (err) => {
                setErrors(err);
                setLoading(false);
            },
            onFinish: () => setLoading(false), 
        });
    };

    return (
        <div className="flex items-center justify-center w-full h-full mt-10">
            <form className="p-5 w-1/2 flex flex-col items-center bg-gray-200 rounded-lg shadow-md" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <div className="text-red-500 text-sm mb-4">{errors.title}</div>}
                </div>

                <div>
                    <label htmlFor="body">Content</label>
                    <textarea
                        id="content"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.body && <div className="text-red-500">{errors.body}</div>}
                </div>

                <div>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg w-1/4" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
