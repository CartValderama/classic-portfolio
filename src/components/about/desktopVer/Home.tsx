import { aboutMeMenu } from "../../../data/aboutMenu";

type homeMenuProps = {
  selectMenu: string;
  setSelectMenu: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ selectMenu, setSelectMenu }: homeMenuProps) => {
  return (
    <div
      className={`w-full h-full flex-col justify-center items-center gap-y-4  ${
        selectMenu === "Home" ? "flex" : "hidden"
      }`}
    >
      <h1 className="text-7xl font-bold">Get to Know Me</h1>
      <div className="flex items-center gap-x-8">
        {aboutMeMenu.map((menu, idx) => (
          <button
            key={idx}
            onClick={() => setSelectMenu(menu)}
            className={`${
              menu === "Home"
                ? "font-bold "
                : " hover:text-[#000e7a] hover:no-underline hover:opacity-100 underline opacity-60"
            } text-lg  cursor-pointer `}
          >
            {menu}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
