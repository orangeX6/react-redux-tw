import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Search Images </label>
        <input value={term} onChange={handleChange} id="search" />
      </form>
    </div>
  );
}

export default SearchBar;
