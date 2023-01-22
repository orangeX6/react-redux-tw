import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, createUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';
import Skeleton from './Skeleton';
import Button from './Button';

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserError] =
    useThunk(createUser);

  const { data } = useSelector((state) => {
    return state.users; //{ data[], isLoading: false, error:null}
  });

  // useEffect(() => {
  //   setIsLoadingUsers(true);
  //   // console.log(dispatch(fetchUsers()));
  //   dispatch(fetchUsers())
  //     .unwrap()
  //     .catch((err) => setLoadingUsersError(err))
  //     .finally(() => setIsLoadingUsers(false));
  // }, [dispatch]);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  // const handleUserAdd = () => {
  //   setIsCreatingUser(true);
  //   dispatch(addUser())
  //     .unwrap()
  //     .catch((err) => setCreatingUserError(err))
  //     .finally(() => setIsCreatingUser(false));
  // };
  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = (
      <div>
        <Skeleton times={6} className="h-10 w-full" />
        {/* <div className="flex">
          <Skeleton times={6} className="h-10 w-1/6" />
        </div> */}
      </div>
    );
  } else if (loadingUsersError) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button
          className="w-28 justify-center"
          loading={isCreatingUser}
          warning
          onClick={handleUserAdd}
        >
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
