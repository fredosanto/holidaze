// import { HeaderImage } from "../components/layout/components/HeaderImage";
function Home() {
  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <header
        className="flex h-screen bg-cover bg-no-repeat bg p-5"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="m-auto bg-black p-10 bg-opacity-80 rounded-lg">
          <h1 className=" text-white bg-opacity-100 text-center w-auto text-xl max-w-lg">
            Welcome to Holidaze! Your next favourite venue is waiting.
          </h1>
        </div>
      </header>

      <h2 className="text-2xl font-bold">Popular venues</h2>
      <h3 className="text-lg font-bold">This is the h3</h3>
      <p className="text-base font-normal">This is the paragraph</p>
      <p className="text-base font-medium">This is the medium paragrah</p>
    </div>
  );
}

export default Home;
