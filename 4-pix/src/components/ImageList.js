import { useEffect, useState } from 'react';
import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images, term, onButtonClick }) {
  const [page, setPage] = useState(1);

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  const handleNavigation = (e) => {
    e.target.classList.contains('next')
      ? setPage(page + 1)
      : page !== 1 && setPage(page - 1);
  };

  useEffect(() => {
    onButtonClick(term, page);
  }, [page, term]);

  return (
    <div>
      <div className="image-list">{renderedImages}</div>
      <div className="nav">
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
    </div>
  );
}

export default ImageList;
