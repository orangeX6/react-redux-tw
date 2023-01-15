import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
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
