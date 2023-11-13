import { useState } from "react";

export default function Loading() {
  return (
    <div className="bg-blueHover">
      <div>Loading.. please wait</div>
      <div className="animate-spin">E</div>
    </div>
  );
}
