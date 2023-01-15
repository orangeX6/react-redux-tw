import { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';

import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const handleSubmit = async (term) => {
    const result = await searchImages(term, page);
    setSearch(term);
    setImages(result);
  };

  const handleNavigation = function (e) {
    e.target.classList.contains('next')
      ? setPage(page + 1)
      : page !== 1 && setPage(page - 1);
    handleSubmit(search, page);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      <button
        className="pagination-previous previous"
        onClick={handleNavigation}
      >
        Previous
      </button>
      <button className="pagination-next next" onClick={handleNavigation}>
        Next
      </button>
    </div>
  );
}
