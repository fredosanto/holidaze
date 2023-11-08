function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <p>Manager access: {user.venueManager ? "Yes" : "No"}</p>
      <div className=" ">
        <img src={user.avatar} alt="" className=" object-contain h-52 w-52 " />
      </div>
    </div>
  );
}

export default Profile;
