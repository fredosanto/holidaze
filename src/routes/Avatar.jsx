import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { load } from "../api/token/index.mjs";
import { updateAvatar } from "../api/avatar/updateAvatar";

const { avatar } = load("user");
const showAvatar = avatar != "";

const regex = `(http(s?):)([/|.|\w|\s|-])*\.`;

const updateAvatarSchema = yup
  .object({
    avatar: yup
      .string()
      .matches(regex, "Must be https://img.service.com/avatar.jpg")
      .required("Please add a image link"),
  })
  .required();

function Avatar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateAvatarSchema) });

  return (
    <div>
      <h1>Change avatar</h1>
      <h2>Current avatar image:</h2>
      <div>
        {showAvatar ? (
          <img
            src={avatar}
            alt="Avatar image"
            className="object-cover rounded-full h-52 w-52"
          />
        ) : (
          "No image yet..."
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit((data) => updateAvatar(data))}>
          <label htmlFor="avatar">Add image link</label>
          <input
            {...register("avatar")}
            type="text"
            name="avatar"
            id="avatar"
            placeholder="https://img.service.com/avatar.jpg"
            className="border block w-1/2"
          />
          <p>{errors.avatar?.message}</p>
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
