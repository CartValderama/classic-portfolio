const DesktopGuide = () => {
  return (
    <div className="lg:flex hidden text-black bg-transparent p-1 flex-col justify-between gap-y-1 h-full">
      <div className="px-2 py-1 border border-r-white border-in">
        <p className="text-2xl font-bold capitalize">Quick Desktop Guide</p>
      </div>

      <div className="border h-full w-full px-2 py-1 border-in">
        <ul className=" flex flex-col justify-between gap-y-2 h-full">
          <li>
            <span className="text-green-900">Double-click</span> apps to open
            (or <span className="text-green-900">single tap</span> on
            touch/mobile devices).
          </li>
          <li>
            <span className="text-amber-900">Resizable windows</span> have a
            drag handle at the{" "}
            <span className="text-amber-900">bottom-right corner</span> (this
            window is fixed-size).
          </li>
          <li>
            <span className="text-purple-900">Minimize</span>,{" "}
            <span className="text-purple-900">Maximize</span>, and{" "}
            <span className="text-purple-900">Close</span> buttons are in the
            top-right corner.
          </li>
          <li>
            <span className="text-[#000e7a]">Drag windows</span> by their title
            bar at the top.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopGuide;
