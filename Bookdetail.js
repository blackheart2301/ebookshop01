import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <img src={book.imageUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
        Read Now
      </a>
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookDetail;