import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import '../../../css/app.css';

function EditPost() {
    const { post } = usePage().props;
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.content);
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        if (image) formData.append('image', image);

        router.post(route('post.update', post.id), formData, {
            onSuccess: () => {
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <form
                className="p-5 w-1/2 flex flex-col items-center bg-gray-200 rounded-lg shadow-md"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="title"
                    placeholder="Enter your title"
                />
                <div className="text-red-500 text-sm mb-4"></div>

                <input
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="form-control p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="body"
                    placeholder="Enter your content"
                />
                <div className="text-red-500 text-sm mb-4"></div>

                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-control p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="file"
                    name="image"
                />
                <div className="text-red-500 text-sm mb-4"></div>
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg w-1/4"
                    type="submit"
                >
                    Update Post
                </button>
            </form>
        </div>
    );
}

export default EditPost;
