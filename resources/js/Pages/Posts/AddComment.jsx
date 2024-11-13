import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function AddComment({ postId }) {
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post(route('comments.store', postId), { body });
    setBody('');
  };
  return (
    <div className="text-box">
      <div className="box-container">
        <form onSubmit={handleSubmit}>
          <textarea
            name="body"
            placeholder="Reply"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
        <div className="formatting">
          <button type="button">
            <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z" clipRule="evenodd" fillRule="evenodd"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"></path>
            </svg>
          </button>
          <button type="submit" className="send" title="Send">
            <svg fill="none" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M12 5L12 20"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
