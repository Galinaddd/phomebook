import { useCurrentUserQuery } from '../../redux/authApi';

export const UserMenu = () => {
  const { data } = useCurrentUserQuery();
  console.log(data);
  return (
    <>
      <div>
        <p>user name</p>
        <button>LogIn/Out</button>
      </div>
    </>
  );
};
