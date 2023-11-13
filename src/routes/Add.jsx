import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("*Please add a name"),
  description: yup.string().required("*Please add description"),
  media: yup.array().of(yup.string()).ensure().optional(),
  price: yup.number().required("*Please add price"),
  maxGuests: yup.number().required("*Please add guests"),
  rating: yup.number().min(0).max(10),
  meta: yup.object().shape({
    wifi: yup.boolean(),
    parking: yup.boolean(),
    breakfast: yup.boolean(),
    pets: yup.boolean(),
  }),
  location: yup.object().shape({
    address: yup.string().optional(),
    city: yup.string().optional(),
    zip: yup.string().optional(),
    country: yup.string().optional(),
    lat: yup.number().optional(),
    lng: yup.number().optional(),
  }),
});

function Add() {
  const {
    register: createRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      <h1>Add new venue</h1>
      <p>Fields marked with * is required.</p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="formSection general">
          <h2>General information</h2>
          <div className="formInput">
            <label htmlFor="name">Name:*</label>
            <input
              {...createRegister("name")}
              type="text"
              placeholder="Enter name"
              className="border block"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="description">Description:*</label>
            <textarea
              {...createRegister("description")}
              type="text"
              placeholder="Write a description..."
              className="border block w-96 h-52"
            ></textarea>
            <p>{errors.description?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="media">Images:</label>
            <input
              {...createRegister("media")}
              type="text"
              placeholder="https://img.service.com/avatar.jpg"
              className="border block"
            />
            <p>{errors.media?.message}</p>
          </div>
          <div className="formInput">
            <label htmlFor="price">Price:*</label>
            <input
              {...createRegister("price")}
              type="number"
              min="0"
              placeholder="10000"
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
              placeholder="4"
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
          <div>
            <div>
              <label htmlFor="wifi">wifi:</label>
              <input
                {...createRegister("meta.wifi")}
                type="checkbox"
                className="border"
              />
              <p>{errors.wifi?.message}</p>
            </div>
            <div>
              <label htmlFor="parking">Parking:</label>
              <input
                {...createRegister("meta.parking")}
                type="checkbox"
                className="border"
              />
              <p>{errors.parking?.message}</p>
            </div>
            <div>
              <label htmlFor="breakfast">Breakfast:</label>
              <input
                {...createRegister("meta.breakfast")}
                type="checkbox"
                className="border"
              />
              <p>{errors.breakfast?.message}</p>
            </div>
            <div>
              <label htmlFor="pets">Pets:</label>
              <input
                {...createRegister("meta.pets")}
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
              {...createRegister("location.address")}
              type="text"
              placeholder="Venue Address 23"
              className="border block"
            />
            <p>{errors.address?.message}</p>
          </div>
          <div className="inputSplit flex">
            <div className="split">
              <label htmlFor="city">City:</label>
              <input
                {...createRegister("location.city")}
                type="text"
                placeholder="e.g Oslo"
                className="border block"
              />
              <p>{errors.city?.message}</p>
            </div>
            <div className="split">
              <label htmlFor="zip">Zip:</label>
              <input
                {...createRegister("location.zip")}
                type="text"
                placeholder="e.g 0664"
                className="border block"
              />
              <p>{errors.zip?.message}</p>
            </div>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              {...createRegister("location.country")}
              type="text"
              placeholder="e.g Norway"
              className="border block"
            />
            <p>{errors.country?.message}</p>
          </div>
          <div>
            <label htmlFor="continent">Continent:</label>
            <input
              {...createRegister("location.continent")}
              type="text"
              placeholder="e.g Europe"
              className="border block"
            />
            <p>{errors.continent?.message}</p>
          </div>
          <div className="inputSplit flex">
            <div className="split">
              <label htmlFor="latitude">Latitude:</label>
              <input
                {...createRegister("location.latitude")}
                type="number"
                placeholder="59.911491"
                className="border block"
              />
              <p>{errors.latitude?.message}</p>
            </div>
            <div className="split">
              <label htmlFor="longitude:">Longitude::</label>
              <input
                {...createRegister("location.longitude")}
                type="number"
                placeholder="10.757933"
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
