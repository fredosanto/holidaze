function VenueImage({ image, name, maxGuests }) {
  return (
    <div className="relative overflow-hidden rounded-xl  ">
      {image ? (
        <img src={image[0]} alt={name} className="object-cover w-full  h-72" />
      ) : (
        <div className="absolute left-10 top-1/2">Image N/A</div>
      )}

      {maxGuests && (
        <div className="absolute top-0 left-0 py-3 px-5 bg-black text-white bg-opacity-70 rounded-br-xl font-bold text-center">
          <p>Guests:</p>
          <p>{maxGuests}</p>
        </div>
      )}
    </div>
  );
}

export default VenueImage;
