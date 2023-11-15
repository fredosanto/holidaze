import { useState } from "react";

export function Manage() {
  const [show, setShow] = useState("hidden");

  function handleClick() {
    setShow("block");

    if (show === "block") {
      setShow("hidden");
    }
  }

  return (
    <div>
      <h1>Manage Venue</h1>
      <p>Here you can manage your venue and see all bookings</p>
      <div className={show}>Hi, I was hiding but you found me!</div>
      <button onClick={() => handleClick()}>Click me!</button>
    </div>
  );
}
