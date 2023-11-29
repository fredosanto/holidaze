import { Link } from "react-router-dom";
import { HeaderImage } from "../components/layout/components/HeaderImage";
import headerBackground from "../assets/images/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg";
import { FlexCard } from "../components/layout/components/FlexCard";

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
    </div>
  );
}

export default Home;
