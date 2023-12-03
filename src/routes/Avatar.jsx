import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { load } from "../api/token/index.mjs";
import { updateAvatar } from "../api/avatar/updateAvatar";
import { BackIcon, EditIcon } from "../components/icons/index.mjs";
import { useState } from "react";

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
  const { message, setMessage } = useState("");
  const { avatar } = load("user");
  const showAvatar = avatar != "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateAvatarSchema) });

  async function onSubmit(formData) {
    const res = await updateAvatar(formData);
    setMessage(res);
  }

  return (
    <div className="max-w-4xl m-auto my-10">
      <Link to="/profile" className="flex my-2">
        <BackIcon />
        Back to your profile
      </Link>
      <div className="flex flex-col items-center my-10 gap-5">
        <h1 className="text-2xl">Change avatar</h1>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <label htmlFor="avatar">Add image link:</label>
            <input
              {...register("avatar")}
              type="text"
              name="avatar"
              id="avatar"
              placeholder="https://img.service.com/avatar.jpg"
              className="border block p-2 w-72 rounded-lg border-black"
            />
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {errors.avatar?.message}
            </p>
            <p className="text-xs bg-redHover text-white px-1 rounded-xl">
              {message}
            </p>
            <button
              type="submit"
              className="flex uppercase w-full font-medium bg-blue hover:bg-blueHover hover:text-white m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
            >
              <div className="flex m-auto">
                <EditIcon />
                Update
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
