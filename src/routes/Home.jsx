// import { HeaderImage } from "../components/layout/components/HeaderImage";
function Home() {
  const header = "Book the best rated venues here!";
  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <div
        className="flex h-72 bg-center bg-contain bg-no-repeat bg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="m-auto bg-black p-5 bg-opacity-80 rounded-lg">
          <h1 className=" text-white bg-opacity-100 text-center w-auto text-lg">
            {header}
          </h1>
        </div>
      </div>

      <h2 className="text-2xl font-bold">Popular venues</h2>
      <h3 className="text-lg font-bold">This is the h3</h3>
      <p className="text-base font-normal">This is the paragraph</p>
      <p className="text-base font-medium">This is the medium paragrah</p>
    </div>
  );
}

export default Home;
