import { Link } from "react-router-dom";
import { AddForm } from "../components/admin/AddForm";
import { BackIcon } from "../components/icons/index.mjs";

function Add() {
  return (
    <div className="max-w-4xl m-auto">
      <Link to="/admin" className="flex my-2">
        <BackIcon />
        Back to your venues
      </Link>
      <div className="flex flex-col items-center my-10 gap-5">
        <h1 className="text-2xl">Add new venue</h1>
        <AddForm />
      </div>
    </div>
  );
}

export default Add;
