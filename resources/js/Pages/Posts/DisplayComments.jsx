import React from 'react';
import { usePage } from '@inertiajs/react';
import '../../../css/Teamplate/assets/css/comment.css';
import AddComment from './AddComment'
export default function Display() {
    const { props } = usePage();
    const { coments } = props;
    const {id} = props;
    return (
        <div>
            <a href={route('posts.index')}>
                <span className="a-link">Back to Home</span>
            </a>
            <span className="title">Comments</span>

            {coments && coments.length > 0 ? (
                coments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <div className="comment-react">
                        </div>

                        <div className="comment-container">
                            <div className="user">
                                <div className="user-pic">
                                    <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeWidth="2" stroke="#707277" fill="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
                                        <path strokeWidth="2" stroke="#707277" fill="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
                                    </svg>
                                </div>

                                <div className="user-info">
                                    <span>{comment.author}</span>
                                    <p>{new Date(comment.created_at).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                                </div>
                            </div>

                            <p className="comment-content">
                                {comment.content}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
            <AddComment postId={id} />

        </div>
    );
}
