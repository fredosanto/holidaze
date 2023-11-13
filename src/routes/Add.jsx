import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({});

function Add() {
  const {
    register: createRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      <form>
        <div className="formSection general">
          <h2>General information</h2>
          <div className="formInput">
            <label htmlFor="name">Name:</label>
            <input
              {...createRegister("name")}
              type="text"
              className="border block"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="description">Description:</label>
            <textarea
              {...createRegister("description")}
              type="text"
              className="border block w-96 h-52"
            ></textarea>
            <p>{errors.description?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="media">Images:</label>
            <input
              {...createRegister("media")}
              type=""
              className="border block"
            />
            <p>{errors.media?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="price">Price:</label>
            <input
              {...createRegister("price")}
              type="number"
              min="0"
              className="border block"
            />
            <p>{errors.price?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="maxGuests">Max guests:</label>
            <input
              {...createRegister("maxGuests")}
              type="number"
              min="0"
              className="border block"
            />
            <p>{errors.maxGuests?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="rating">Rating:</label>
            <input
              {...createRegister("rating")}
              type="range"
              min="0"
              max="10"
              className="border block"
            />
            <p>{errors.rating?.message}</p>
          </div>
        </div>
        <div className="formSection services">
          <h2>Services</h2>
          <div className="flex">
            <div>
              <label htmlFor="wifi">wifi:</label>
              <input
                {...createRegister("wifi")}
                type="checkbox"
                className="border"
              />
              <p>{errors.wifi?.message}</p>
            </div>
            <div>
              <label htmlFor="parking">Parking:</label>
              <input
                {...createRegister("parking")}
                type="checkbox"
                className="border"
              />
              <p>{errors.parking?.message}</p>
            </div>
            <div>
              <label htmlFor="breakfast">Breakfast:</label>
              <input
                {...createRegister("breakfast")}
                type="checkbox"
                className="border"
              />
              <p>{errors.breakfast?.message}</p>
            </div>
            <div>
              <label htmlFor="pets">Pets:</label>
              <input
                {...createRegister("pets")}
                type="checkbox"
                className="border"
              />
              <p>{errors.pets?.message}</p>
            </div>
          </div>
        </div>
        <div className="inputSection location">
          <h2>Location information</h2>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              {...createRegister("address")}
              type="text"
              className="border block"
            />
            <p>{errors.address?.message}</p>
          </div>
          <div className="inputSplit">
            <div className="split">
              <label htmlFor="city">City:</label>
              <input
                {...createRegister("city")}
                type="text"
                className="border block"
              />
              <p>{errors.city?.message}</p>
            </div>
            <div className="split">
              <label htmlFor="zip">Zip:</label>
              <input
                {...createRegister("zip")}
                type="text"
                className="border block"
              />
              <p>{errors.zip?.message}</p>
            </div>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              {...createRegister("country")}
              type="text"
              className="border block"
            />
            <p>{errors.country?.message}</p>
          </div>
          <div>
            <label htmlFor="continent">Continent:</label>
            <input
              {...createRegister("continent")}
              type="text"
              className="border block"
            />
            <p>{errors.continent?.message}</p>
          </div>
          <div className="inputSplit">
            <div className="split">
              <label htmlFor="latitude">Latitude:</label>
              <input
                {...createRegister("latitude")}
                type="number"
                className="border block"
              />
              <p>{errors.latitude?.message}</p>
            </div>
            <div className="split">
              <label htmlFor="longitude:">Longitude::</label>
              <input
                {...createRegister("longitude")}
                type="number"
                className="border block"
              />
              <p>{errors.longitude?.message}</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          Add venue
        </button>
      </form>
    </div>
  );
}

export default Add;
