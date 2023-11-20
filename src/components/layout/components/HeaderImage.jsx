export function HeaderImage(content) {
  const image =
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="flex h-72 bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="m-auto bg-black p-5 bg-opacity-80 rounded-lg">
        <h1 className=" text-white bg-opacity-100 text-center w-auto text-lg">
          {content}
        </h1>
      </div>
    </div>
  );
}
