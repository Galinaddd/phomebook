import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <p>Sharelayout</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register"> register</NavLink>
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
