function VenueImage({ image, name, maxGuests }) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img src={image} alt={name} />
      {maxGuests && (
        <div className="absolute top-0 left-0">
          <p>Guests:</p>
          <p>{maxGuests}</p>
        </div>
      )}
    </div>
  );
}

export default VenueImage;
