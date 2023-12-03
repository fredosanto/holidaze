export default function Loading() {
  return (
    <div className="flex justify-center items-center bg-blueHover h-screen">
      <div>
        <div className="border-black my-5 mx-auto h-20 w-20 animate-spin rounded-full border-8 border-t-green"></div>

        <div className="text-center my-5">Loading.. please wait</div>
      </div>
    </div>
  );
}
