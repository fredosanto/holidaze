import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-light">
      <div className="text-center bg-red p-5">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured. </p>
        <Link to="/" className="underline">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
