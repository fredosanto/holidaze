import "./App.css";

function App() {
  return (
    <>
      <nav className="text-xl font-light flex bg-blue hover:bg-blueHover">
        <div id="logo" className="text-4xl font-bold">
          Holidaze
        </div>
        <div>Home</div>
        <div>Venues</div>
        <div>Profile</div>
      </nav>
      <h1 className="text-4xl font-extrabold">Hi im the h1</h1>
      <h2 className="text-2xl font-bold">Hi im the h2</h2>
      <h3 className="text-lg font-bold">This is the h3</h3>
      <p className="text-base font-normal">This is the paragraph</p>
      <p className="text-base font-medium">This is the medium paragrah</p>
    </>
  );
}

export default App;
