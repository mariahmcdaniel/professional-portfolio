import React from 'react';
import NavBar from './Nav';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <Outlet />
    </>
  );
};
