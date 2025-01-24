import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error404 from './pages/404';
import Logement from './pages/Logement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Apropos />,
      },
      {
        path: '/fiche-logement/:id',
        element: <Logement />,
      },
      {
        path: '/404',
        element: <Error404 />,
      },
    ],
  },
]);

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
