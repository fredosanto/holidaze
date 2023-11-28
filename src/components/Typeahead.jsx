import { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api/enpoints";
import { useFetch } from "../hooks/useFetch";

function ItemsList({ itemsArray }) {
  // console.log(itemsArray);
  return (
    <>
      <ul
        id="typeahead"
        className="absolute bg-white z-[1] py-2 w-full h-52 overflow-scroll border-black border-solid border-[1px] border-t-0"
      >
        {itemsArray.map((listItem) => (
          <Link key={listItem.id} to={`/venue/${listItem.id}`}>
            <li className="hover:bg-green hover:underline cursor-pointer py-1">
              {listItem.name ? listItem.name : "Venue name N/A"}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export function Typeahead() {
  const urlParameters =
    "?sort=created&sortOrder=desc&_owner=true&_bookings=true";
  const url = `${API.venues.$ + urlParameters}`;
  const { data: venues, isLoading, error } = useFetch(url);

  const [searchVenue, setSearchVenue] = useState("");
  const [filteredVenues, setFilteredVenue] = useState([]);

  const handleInputChange = (e) => {
    const inputContent = e.target.value;
    setSearchVenue(inputContent);

    const filteredItems = venues.filter(
      (venue) =>
        venue.name.toLowerCase().includes(inputContent.toLowerCase()) ||
        venue.location?.country
          .toLowerCase()
          .includes(inputContent.toLowerCase()) ||
        venue.location?.city
          .toLowerCase()
          .includes(inputContent.toLowerCase()) ||
        venue.location?.continent
          .toLowerCase()
          .includes(inputContent.toLowerCase())
    );
    if (inputContent === "") {
      setFilteredVenue([]);
      return;
    }
    setFilteredVenue(filteredItems);
  };

  return (
    <div className="relative">
      <input
        type="text"
        defaultValue={searchVenue}
        placeholder="Search for venue name, city, country"
        className="p-2 w-full rounded-lg rounded-b-none outline-none"
        onChange={handleInputChange}
      />
      <div>
        {filteredVenues.length === 0 && !isLoading && !error ? (
          <p className="bg-green p-2 my-2 rounded-md">No venues found yet</p>
        ) : (
          <ItemsList itemsArray={filteredVenues} />
        )}
        {isLoading && <p className="bg-blue z-[1] p-5 w-full">Loading..</p>}
        {error && (
          <p className="bg-redHover z-[1] p-5 w-full">
            Error occured when getting results, please try again
          </p>
        )}
      </div>
    </div>
  );
}
