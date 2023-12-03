import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { venueSchema } from "../../scehma/venue";
import { update } from "../../api/auth/update";
import { API } from "../../api/enpoints";
import { EditIcon } from "../icons/index.mjs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ResponseMessage } from "../ResponseMessage";

export function UpdateForm({ venue, venueId }) {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const url = API.venues.id(venueId).$;
  const {
    register: createRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(venueSchema) });

  async function onSubmit(formData) {
    formData.media = formData.media[0].split(",");
    const res = await update(formData, url);
    setMessage(res);
    console.log(res);
    if (res === true) {
      return setSuccess(res);
    }
    return setSuccess(false);
  }

  return (
    <>
      <div>
        <p className="text-center">Fields marked with * is required.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-5 bg-red p-5 w-full rounded-xl flex flex-col gap-5"
        >
          <div className="formSection general flex flex-col gap-2">
            <h2 className="text-lg text-center">General information</h2>
            <div className="formInput">
              <label htmlFor="name">Name:*</label>
              <input
                {...createRegister("name")}
                type="text"
                placeholder="Enter name"
                defaultValue={venue.name}
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.name?.message}
              </p>
            </div>
            <div className="formInput">
              <label htmlFor="description">Description:*</label>
              <textarea
                {...createRegister("description")}
                type="text"
                defaultValue={venue.description}
                placeholder="Write a description..."
                className="border block w-full h-52 p-2 rounded-lg border-black bg-white"
              ></textarea>
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.description?.message}
              </p>
            </div>
            <div className="formInput">
              <label htmlFor="media">Images:</label>
              <input
                {...createRegister("media")}
                type="text"
                defaultValue={venue.media}
                placeholder="https://img.service.com/avatar.jpg"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs px-1">
                {`Add several img urls with comma " , " and no space to seperate`}
              </p>
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.media?.message}
              </p>
            </div>
            <div className="formInput">
              <label htmlFor="price">Price:*</label>
              <input
                {...createRegister("price")}
                type="number"
                defaultValue={venue.price}
                min="0"
                placeholder="10000"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.price?.message}
              </p>
            </div>
            <div className="formInput">
              <label htmlFor="maxGuests">Max guests:</label>
              <input
                {...createRegister("maxGuests")}
                type="number"
                defaultValue={venue.maxGuests}
                min="1"
                placeholder="4"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.maxGuests?.message}
              </p>
            </div>
            <div className="formInput">
              <label htmlFor="rating">Rating:</label>
              <input
                {...createRegister("rating")}
                type="range"
                defaultValue={venue.rating}
                min="0"
                max="5"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.rating?.message}
              </p>
            </div>
          </div>
          <div className="formSection services bg-green p-2 rounded-lg">
            <hr className="my-2" />
            <h2 className="text-lg text-center my-2">Services</h2>
            <div className="flex justify-around gap-5">
              <div className="flex gap-5">
                <div>
                  <label htmlFor="wifi">WiFi:</label>
                  <input
                    {...createRegister("meta.wifi")}
                    type="checkbox"
                    className="border checkbox"
                  />
                  <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                    {errors.wifi?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="parking">Parking:</label>
                  <input
                    {...createRegister("meta.parking")}
                    type="checkbox"
                    className="border checkbox"
                  />
                  <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                    {errors.parking?.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <label htmlFor="breakfast">Breakfast:</label>
                  <input
                    {...createRegister("meta.breakfast")}
                    type="checkbox"
                    className="border checkbox"
                  />
                  <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                    {errors.breakfast?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="pets">Pets:</label>
                  <input
                    {...createRegister("meta.pets")}
                    type="checkbox"
                    className="border checkbox"
                  />
                  <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                    {errors.pets?.message}
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-2" />
          </div>
          <div className="inputSection location flex flex-col gap-2">
            <h2 className="text-lg text-center my-2">Location information</h2>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                {...createRegister("location.address")}
                type="text"
                defaultValue={venue.location?.address}
                placeholder="Venue Address 23"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.address?.message}
              </p>
            </div>
            <div className="inputSplit flex gap-1">
              <div className="split w-full">
                <label htmlFor="city">City:</label>
                <input
                  {...createRegister("location.city")}
                  type="text"
                  defaultValue={venue.location?.city}
                  placeholder="e.g Oslo"
                  className="border block p-2 w-full rounded-lg border-black"
                />
                <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                  {errors.city?.message}
                </p>
              </div>
              <div className="split w-full">
                <label htmlFor="zip">Zip:</label>
                <input
                  {...createRegister("location.zip")}
                  type="text"
                  defaultValue={venue.location?.zip}
                  placeholder="e.g 0664"
                  className="border block p-2 w-full rounded-lg border-black"
                />
                <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                  {errors.zip?.message}
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <input
                {...createRegister("location.country")}
                type="text"
                defaultValue={venue.location?.country}
                placeholder="e.g Norway"
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.country?.message}
              </p>
            </div>
            <div>
              <label htmlFor="continent">Continent:</label>
              <input
                {...createRegister("location.continent")}
                type="text"
                placeholder="e.g Europe"
                defaultValue={venue.location?.continent}
                className="border block p-2 w-full rounded-lg border-black"
              />
              <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                {errors.continent?.message}
              </p>
            </div>
            <div className="inputSplit flex gap-1">
              <div className="split w-full">
                <label htmlFor="latitude">Latitude:</label>
                <input
                  {...createRegister("location.latitude")}
                  type="number"
                  defaultValue={venue.location?.lat}
                  placeholder="59.911491"
                  className="border block p-2 w-full rounded-lg border-black"
                />
                <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                  {errors.latitude?.message}
                </p>
              </div>
              <div className="split w-full">
                <label htmlFor="longitude:">Longitude::</label>
                <input
                  {...createRegister("location.longitude")}
                  type="number"
                  defaultValue={venue.location?.lng}
                  placeholder="10.757933"
                  className="border block p-2 w-full rounded-lg border-black"
                />
                <p className="text-xs bg-redHover text-white px-1 rounded-xl">
                  {errors.longitude?.message}
                </p>
              </div>
            </div>
          </div>
          <ResponseMessage
            message={message}
            success={success}
            messageContent={"Venue is updated!"}
            linkContent={`admin`}
          />
          <button
            type="submit"
            className="flex uppercase font-medium bg-blue hover:bg-blueHover hover:text-white w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            <div className="flex">
              <EditIcon />
              Update Venue
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
