 import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/Booklist';
import BookDetail from './Components/Bookdetail';
import Book from './Components/Book';
import './style.css'

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  //const [showInfo, setShowInfo]= useState('false');

  const handleBookClick = (book) => {
    setSelectedBook(book);
    //setShowInfo(true);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    // Fetch data from the Google Books API for Harry Potter
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((response) => response.json())
      .then((data) => {
        setSelectedBook(data.items);
      });

    // Fetch data from the Google Books API for Sherlock Holmes
    fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
      .then((response) => response.json())
      .then((data) => {
        setSelectedBook((prevBooks) => [...prevBooks, data.items]);
      });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <main className="container">
        <h1>More Books</h1>
        {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />}
        <BookList books={Book} onBookClick={handleBookClick} />
        
      </main>
    </div>
  );
}

export default App;