import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '../pages/Layout';
import Home from '../pages/Home/Home';
import Community from '../pages/Community/Community';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import AddItem from '../pages/AddItem/AddItem';
import Items from '../pages/Items/Items';
import Privacy from '../pages/Privacy/Privacy';
import Faq from '../pages/Faq/Faq';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'community', element: <Community /> },
      // { path: 'login', element: <Login /> },
      // { path: 'signup', element: <Signup /> },
      // { path: 'addItem', element: <AddItem /> },
      // { path: 'items', element: <Items /> },
      // { path: 'privacy', element: <Privacy /> },
      // { path: 'faq', element: <Faq /> },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default router;
