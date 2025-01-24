import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error404 from './pages/404';
import Logement from './pages/Logement';

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: '/contact',
        element: (
          <ErrorBoundary fallback="Oups Erreur">
            <Apropos />
          </ErrorBoundary>
        ),
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

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

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
