import React from "react";

const AgeOfWar = () => {
  return (
    <div className="flex justify-start items-start w-full h-full">
      <iframe
        src="https://www.crazygames.com/embed/age-of-war"
        className="w-full h-full"
        allow="gamepad *;"
        title="Age of War"
      />
    </div>
  );
};

export default AgeOfWar;
