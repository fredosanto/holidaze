import { Link } from "react-router-dom";
import { HeaderImage } from "../components/layout/components/HeaderImage";
// import headerBackground from "../assets/images/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg";
import headerBackground from "../../public/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg";
import { FlexCard } from "../components/layout/components/FlexCard";

function InformationContainer() {
  return (
    <section
      className="flex bg-cover bg-no-repeat max-w-4xl h-96 m-auto my-10 bg-center md:rounded-lg"
      style={{
        backgroundImage: `url("../../public/orva-studio-YC8qqp50BdA-unsplash.jpg")`,
      }}
    >
      <div className="m-auto bg-black p-10 bg-opacity-80 rounded-lg flex flex-col gap-5">
        <p className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg">
          New Year 2024 campaign starting soon!
        </p>
        <p className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg">
          Until then, brows through our other amazing venues.
        </p>
        <Link
          to={`/venues`}
          className=" flex uppercase font-medium bg-green hover:bg-greenHover w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
        >
          See all venues
        </Link>
      </div>
    </section>
  );
}

function Home() {
  const headerContent =
    "Welcome to Holidaze! Your next favourite venue is waiting.";
  return (
    <div>
      <HeaderImage image={headerBackground} content={headerContent} />
      <div className="max-w-4xl my-12 mx-auto bg-green py-10 md:px-5 md:rounded-lg">
        <FlexCard revert={false} />
      </div>
      <div className="max-w-4xl my-12 mx-auto bg-light py-10 md:px-5 md:rounded-lg">
        <FlexCard revert={true} />
      </div>
      <InformationContainer />
    </div>
  );
}

export default Home;
