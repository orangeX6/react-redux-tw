import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onEdit();
    editBookById(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
