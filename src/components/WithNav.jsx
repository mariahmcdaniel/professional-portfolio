import React from 'react';
import NavBar from './Nav';
import { Outlet } from 'react-router';

const wwn = () => {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default wwn;