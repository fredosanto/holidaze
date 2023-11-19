import ProfileCard from "../components/cards/ProfileCard";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import { user } from "../api/auth/index.mjs";
import { profileVenues } from "../api/venues/profileVenues";
import { AdminVenues } from "../components/cards/AdminVenues";
import { ProfileBooking } from "../components/cards/ProfileBookings";

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
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  // console.log(venues);
  console.log(userProfile.venueManager);

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
      {userProfile.venueManager ? (
        <AdminVenues venues={venues} />
      ) : (
        <ProfileBooking username={userProfile.name} />
      )}
    </div>
  );
}

export default Profile;
