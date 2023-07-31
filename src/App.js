import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* PAGES -------------------------------------------------------------------- */
const RootLayout = lazy(() => import('./pages/Layout/Layout'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Home = lazy(() => import('./pages/Home/Home'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Todo = lazy(() => import('./pages/Todo/Todo'));

/* ROUTES ------------------------------------------------------------------- */

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/',
        element: <>main</>,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
