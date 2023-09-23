import React from 'react';

function Book({ book }) {
  return (
    <div className="book">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors.join(', ')}</p>
      {/* Add more book details as needed */}
    </div>
  );
}

export default Book;