export function HeaderImage({ image, content }) {
  // let currentImage = image;
  return (
    <header
      className="flex h-screen bg-cover bg-no-repeat bg p-5"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="m-auto bg-black p-10 bg-opacity-80 rounded-lg">
        <h1 className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg">
          {content}
        </h1>
      </div>
    </header>
  );
}
