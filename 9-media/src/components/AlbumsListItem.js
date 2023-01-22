import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    // console.log(album);
    removeAlbum(album);
  };

  const header = (
    <div className="flex flex-row items-center justify-between">
      <Button
        loading={results.isLoading}
        className="mx-2"
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
