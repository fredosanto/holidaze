import { Link } from "react-router-dom";
import ProfileCard from "../components/cards/ProfileCard";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import { user } from "../api/auth/index.mjs";
import { profileVenues } from "../api/venues/profileVenues";
import { VenueActions } from "../components/cards/venue/Venue";
import { Venue } from "../components/cards/venue/Venue";

function Profile() {
  const userProfile = user();

  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProfileVenues() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await profileVenues(userProfile.name);
        setVenues(data);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      }
    }

    getProfileVenues();
  }, [userProfile.name]);

  console.log(venues);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>Profile</h1>
      {userProfile ? (
        <ProfileCard
          avatar={userProfile.avatar}
          name={userProfile.name}
          email={userProfile.email}
          venueManager={userProfile.venueManager}
        />
      ) : null}
      <div className="flex flex-col mx-2">
        <h2>Owned Avenues</h2>
        <div className="my-5">
          <Link
            to="/add"
            className="bg-blue hover:bg-blueHover w-1/2 py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            Add new venue
          </Link>
          {venues.map((venue) => (
            <Venue key={venue.id} venue={venue} user={userProfile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
