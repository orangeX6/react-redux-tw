import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * Math.pow(10, 10)), title },
    ];
    // console.log(updatedBooks);
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title: newTitle } : book
    );

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
