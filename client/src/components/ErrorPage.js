import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Page not found</h1>
      <p>{error?.statusText || error?.message || 'This page does not exist.'}</p>
      <a href="/">Go Back Home</a>
    </div>
  );
}
