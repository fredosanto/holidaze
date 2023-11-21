import ProfileCard from "../components/cards/ProfileCard";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { user } from "../api/auth/index.mjs";
import { useFetchProfileVenues } from "../hooks/useFetchProfileVenues";
import { API } from "../api/enpoints";
import { AdminVenues } from "../components/cards/AdminVenues";
import { ProfileBooking } from "../components/cards/ProfileBookings";

function Profile() {
  const userProfile = user();
  const url = API.profiles.name(userProfile.name).venues;
  const { data: venues, isLoading, error } = useFetchProfileVenues(url);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
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
