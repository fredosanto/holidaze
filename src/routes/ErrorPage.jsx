import { Link } from "react-router-dom";

// import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
  console.log("hmmm");
  // const error = useRouteError();
  // console.error(error);

  // if (isRouteErrorResponse(error)) {
  //   return (
  //     <div className="h-screen">
  //       <div>
  //         <h1>Oops!</h1>
  //         <p>{errorMessage}</p>
  //         <p>Sorry, an unexpected error has occured. Status: {error.status}</p>
  //         <p>{error.statusText}</p>
  //         <Link to="/" className="underline">
  //           Go back to homepage
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

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
