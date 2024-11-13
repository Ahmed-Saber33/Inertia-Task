import React from 'react';
import { usePage } from '@inertiajs/react';
import '../../../css/Teamplate/assets/css/main.css';
import '../../../css/Teamplate/assets/css/fontawesome-all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faComment  } from '@fortawesome/free-solid-svg-icons'; 
library.add(fas)

function PostsGrid() {
    const { props } = usePage();
    const { posts } = props;

    return (
        <div>
            <Nav />
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
                                        {new Date(post.created_at).toLocaleDateString()}
                                    </time>
                                    <span class="name">{ post.user.name }</span>
                                </div>
                            </header>
                            <a href="#" className="image featured">
                                <img src={post.image} width="200px" height="400px" alt={post.title} />
                            </a>
                            <p>{post.content.slice(0, 100)}...</p>
                            <footer>
                                <ul className="stats">
                                <li>
                                   </li>

                                    <li>
                                    <a href={route('comment.show',post.id)} >
                                    <FontAwesomeIcon icon={faComment }  />
                                    </a>
                                    </li>
                                </ul>
                            </footer>
                        </article>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No posts available</p>
                )}
            </div>
        </div>
    );
}

export default PostsGrid;
