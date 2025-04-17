import React, { Suspense } from "react";
import BootUpScreen from "./BootUpScreen";

const DesktopScreen = React.lazy(() => import("./DesktopScreen"));

const MainScreen = () => {
  return (
    <div className={`w-full h-full  relative bg-black`}>
      <BootUpScreen />
      <Suspense
        fallback={
          <div className="h-full flex justify-center items-center bg-black">
            <div
              className="h-12 w-12 border-4 border-t-4 border-r-4 border-transparent rounded-full animate-spin 
       border-t-stone-500 border-r-stone-500 border-b-transparent border-l-transparent"
            ></div>
          </div>
        }
      >
        <DesktopScreen />
      </Suspense>
    </div>
  );
};

export default MainScreen;
