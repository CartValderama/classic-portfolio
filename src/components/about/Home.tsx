import { aboutMeMenu } from "../../data/aboutMenu";

type homeMenuProps = {
  selectMenu: string;
  setSelectMenu: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ selectMenu, setSelectMenu }: homeMenuProps) => {
  return (
    <div
      className={`w-full h-full flex-col justify-center items-center gap-y-3 blur-[.4px] sepia-[20%] contrast-75 ${
        selectMenu === "Home" ? "flex" : "hidden"
      }`}
    >
      <h1 className="font-gothic text-7xl">Get to Know Me</h1>
      <div className="flex items-center gap-x-4">
        {aboutMeMenu.map((menu, idx) => (
          <button
            key={idx}
            onClick={() => setSelectMenu(menu)}
            className="underline text-lg hover:text-[#000e7a] cursor-pointer"
          >
            {menu}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
