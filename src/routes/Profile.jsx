import ProfileCard from "../components/cards/ProfileCard";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";
import { user } from "../api/auth/index.mjs";
import { useFetchProfileVenues } from "../hooks/useFetchProfileVenues";
import { API } from "../api/enpoints";
import { ProfileBooking } from "../components/cards/ProfileBookings";

function Profile() {
  const userProfile = user();
  const urlParameters = "?_venue=true";
  const url = `${API.profiles.name(userProfile.name).bookings + urlParameters}`;
  const { data: reservations, isLoading, error } = useFetchProfileVenues(url);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-2xl">Profile</h1>
      {userProfile ? (
        <ProfileCard
          avatar={userProfile.avatar}
          name={userProfile.name}
          email={userProfile.email}
          venueManager={userProfile.venueManager}
        />
      ) : null}
      <div className="my-10">
        <hr className="my-5 text-grey" />
        <h2 className="text-xl text-center md:text-left">
          Upcoming reservations
        </h2>
        <ProfileBooking reservations={reservations} />
      </div>
    </div>
  );
}

export default Profile;
