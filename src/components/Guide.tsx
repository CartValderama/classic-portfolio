const Guide = () => {
  return (
    <div className="relative h-full w-full flex flex-col justify-between flex-1 overflow-hidden select-nonep p-1 lg:text-black text-white lg:bg-transparent bg-white">
      <fieldset className="lg:block hidden border-1 border-white border-l-[#868a8e] border-t-[#868a8e] [box-shadow:inset_1px_1px_0_#dfdfdf,inset_-1px_-1px_0_#404040] p-3 pt-2">
        <legend className="px-1 text-2xl font-bold capitalize bg-[#c3c7cb]">
          <span className="relative">quick desktop guide </span>
        </legend>
        <p className="leading-snug text-[1rem] mb-2 ml-1">
          Here are some of the things you need to know:
        </p>

        <ul className="space-y-1 text-[1rem] leading-snug ml-1">
          <li>
            <span className=" text-green-900">Double-click</span> apps to open
            (or <span className=" text-green-900">single tap</span> on
            touch/mobile devices).
          </li>
          <li>
            <span className=" text-amber-900">Resizable windows</span> have a
            drag handle at the{" "}
            <span className=" text-amber-900">bottom-right corner</span> (this
            window is fixed-size).
          </li>
          <li>
            <span className=" text-purple-900">Minimize</span>,{" "}
            <span className=" text-purple-900">Maximize</span>, and{" "}
            <span className=" text-purple-900">Close</span> buttons are in the
            top-right corner.
          </li>
          <li>
            <span className=" text-[#000e7a]">Drag windows</span> by their title
            bar at the top.
          </li>
        </ul>
      </fieldset>
      <h1 className="text-black">hello</h1>
    </div>
  );
};

export default Guide;
