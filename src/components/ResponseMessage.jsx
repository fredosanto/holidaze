import { Link } from "react-router-dom";

export function ResponseMessage({
  message,
  success,
  messageContent,
  linkContent,
}) {
  return (
    <>
      <p className="text-center text-xs bg-redHover text-white px-1 rounded-xl">
        {message}
      </p>
      {success ? (
        <div>
          <p className="text-center text-xs bg-blueHover text-white px-1 rounded-xl">
            {messageContent}
          </p>
          <Link
            to={`/${linkContent}`}
            className="block my-2 text-center uppercase font-medium bg-green hover:bg-greenHover hover:text-white py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Go back to {linkContent}
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
