function VenueImage({ image, name, maxGuests }) {
  return (
    <div className="relative overflow-hidden rounded-xl w-1/2 h-72 bg-disabled">
      {image ? (
        <img src={image} alt={name} className="object-cover" />
      ) : (
        <div className="absolute left-1/2 top-1/2">Image N/A</div>
      )}

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
