import { Link } from "react-router-dom";

function Avatar() {
  return (
    <div>
      <h1>Change avartar</h1>
      <div>
        <form>
          <label htmlFor="avatar">Add image ling</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            placeholder="https://img.service.com/avatar.jpg"
            className="border block"
          />
          <button
            type="submit"
            className="bg-blue hover:bg-blueHover w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Update
          </button>
        </form>
        <Link to="/profile" className="underline">
          Go back to profile..
        </Link>
      </div>
    </div>
  );
}

export default Avatar;
