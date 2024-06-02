import { useEffect } from 'react';
import { useCurrentUserQuery, useLoginUserMutation } from '../../redux/authApi';

export const UserMenu = () => {
  const { data } = useCurrentUserQuery();
  const [logout] = useLoginUserMutation();

  const handleLogout = e => {
    logout();
    localStorage.setItem('token', '');
    console.log(data);
  };

  console.log(data);
  return (
    <>
      <div>
        {data && (
          <>
            <p>{data.name}</p>
            <button type="submit" onClick={handleLogout}>
              LogOut
            </button>
          </>
        )}
      </div>
    </>
  );
};
