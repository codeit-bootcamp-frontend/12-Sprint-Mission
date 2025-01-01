import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home/index';
import Community from '../pages/Community/index';
import Login from '../pages/Login/index';
import Signup from '../pages/Signup/index';
import AddItem from '../pages/AddItem/index';
import Items from '../pages/Items/index';
import Privacy from '../pages/Privacy/index';
import Faq from '../pages/Faq/index';
import ErrorPage from '../pages/ErrorPage/index';
import ItemDetail from '../pages/ItemDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'community', element: <Community /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'addItem', element: <AddItem /> },
      {
        path: 'items',
        children: [
          { index: true, element: <Items /> },
          { path: ':id', element: <ItemDetail /> },
        ],
      },
      { path: 'privacy', element: <Privacy /> },
      { path: 'faq', element: <Faq /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
