import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import ErrorPage from './ErrorPage'; // Import the error page

/** react routes */
const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/quiz', element: <Quiz/> },  // Make sure it's lowercase
  { path: '/result', element: <Result /> },
  { path: '*', element: <ErrorPage /> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
