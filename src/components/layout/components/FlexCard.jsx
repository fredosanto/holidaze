import { Link } from "react-router-dom";

const ReverseOrder = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
        <div className="basis-1/2 hidden md:block">
          <img
            src="/src/assets/images/jonas-allert-ZApUkahPK7c-unsplash.jpg"
            alt="hotel bed and night table"
            className="md:rounded-lg object-cover max-h-96 min-h-96 min-w-full"
          />
        </div>
        <div className="basis-1/2 text-center flex flex-col gap-5">
          <h2 className="text-xl uppercase">See all new venues!</h2>
          <p className="max-w-lg">
            Holidaze offer a huge veriety of venues. Planning to travel alone,
            with you partner or a group of friends? We have hosts all over the
            world ready to welcome all of you. You are a few clicks from your
            new favourite travel destination.
          </p>
          <Link
            to={`/venues`}
            className=" flex uppercase font-medium bg-blue hover:bg-blueHover w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
          >
            See all venues
          </Link>
        </div>
      </div>
    </>
  );
};

export function FlexCard({ revert }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
      {!revert ? (
        <>
          <div className="basis-1/2 text-center flex flex-col gap-5">
            <h2 className="text-xl uppercase">Get all access!</h2>
            <p>
              Login to your account or register a new account today and get all
              the benefits at Holidaze. New deals and venues every week!
            </p>
            <Link
              to={`/login`}
              className=" flex uppercase font-medium bg-blue hover:bg-blueHover w-fit m-auto py-4 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl"
            >
              Go to login
            </Link>
          </div>
          <div className="basis-1/2">
            <img
              src="/src/assets/images/rhema-kallianpur-uocSnWMhnAs-unsplash.jpg"
              alt="hotel bed and night table"
              className="md:rounded-lg object-cover max-h-96 h-96 min-w-full"
            />
          </div>
        </>
      ) : (
        <ReverseOrder />
      )}
      {/* <ContentOrder revert={revert} /> */}
    </div>
  );
}
