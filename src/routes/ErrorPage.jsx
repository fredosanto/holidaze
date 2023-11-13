import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured. Status: {error.status}</p>
        <p>{error.statusText}</p>
        <Link to="/" className="underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured. </p>
    </div>
  );
}

export default ErrorPage;
