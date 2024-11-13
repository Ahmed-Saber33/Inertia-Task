// resources/js/Pages/Posts/Index.jsx
import React from 'react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia'; // Import Inertia from '@inertiajs/inertia'
import Nav from './Nav';
import '../../../css/Teamplate/assets/css/main.css';
import '../../../css/Teamplate/assets/css/fontawesome-all.min.css';

function Show() {
    const { props } = usePage();
    const { posts, auth } = props;

    const handleDelete = (id) => {
        Inertia.post(route('post.delete', id), {}, {
            onBefore: () => confirm('Are you sure you want to delete this post?')
        });
    };

    return (
        <div>
            <Nav /> {/* Include the Nav component */}

            <div id="main">
                {posts && posts.length > 0 ? ( 
                    posts.map((post) => (
                        <article key={post.id} className="post bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                            <header>
                                <div className="title">
                                    <h2>{post.title}</h2>
                                </div>
                                <div className="meta">
                                    <time className="published" dateTime={post.created_at}>
                                        {new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                    <span className="author">{post.user && post.user.name}</span>
                                </div>
                            </header>

                            <a href="#" className="image featured">
                                <img src={post.image ? `/${post.image}` : ''} width="200px" height="400px" alt={post.title} />
                            </a>
                            <p>{post.content}</p>

                            <footer>
                                <ul className="stats">
                                    <li>
                                        <a href={route("posts.edit", post.id)}>Update</a>
                                    </li>
                                    <li>
                                        <button onClick={() => handleDelete(post.id)} className="text-red-500">
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </footer>
                        </article>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No posts available</p>
                )}
            </div>

            {/* Sidebar */}
            <section id="sidebar">
                <section id="intro">
                    {/* Intro content here */}
                </section>

                
            </section>
        </div>
    );
}

export default Show;
