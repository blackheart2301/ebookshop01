import React from 'react';
//import Book from './Book';

const BookList = ({selectedBook, onBookClick }) => {
  return (
    <div className="book-list">
      {selectedBook.map((book) => (
        <div className="book-card" key={book.id} onClick={() => onBookClick(book)}>
          <img src={book.imageUrl} alt={book.title} />
          <div className="book-info">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
