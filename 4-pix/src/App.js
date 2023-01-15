import { useState } from 'react';
import 'bulma/css/bulma.css';

import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

export default function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');

  const handleSubmit = async (term, page = 1) => {
    setTerm(term);
    const result = await searchImages(term, page);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} term={term} onButtonClick={handleSubmit} />
    </div>
  );
}
