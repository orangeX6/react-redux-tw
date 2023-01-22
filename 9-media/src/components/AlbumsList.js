import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // const result = useFetchAlbumsQuery(user);
  // console.log(result);
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error Loading Albums</div>;
  } else {
    content = data.map((album) => (
      <AlbumsListItem key={album.id} album={album} />
    ));
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          success
          loading={results.isLoading}
          onClick={handleAddAlbum}
          className="w-32 justify-center"
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
