import ProfileCard from "../components/cards/ProfileCard";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { user } from "../api/auth/index.mjs";
import { useFetchProfileVenues } from "../hooks/useFetchProfileVenues";
import { API } from "../api/enpoints";
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
      <div className="my-10">
        <ProfileBooking username={userProfile.name} />
      </div>
    </div>
  );
}

export default Profile;
