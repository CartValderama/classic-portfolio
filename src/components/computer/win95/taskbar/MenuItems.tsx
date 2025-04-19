import { ReactNode } from "react";

type MenuItemsProps = {
  icon: ReactNode;
  text: string;
  action: () => void;
};

const MenuItems = ({ icon, text, action }: MenuItemsProps) => {
  return (
    <button
      type="button"
      className="flex p-2 gap-x-2 items-center hover:bg-[#000e7a] hover:text-white"
      onClick={action}
    >
      {icon}
      <span className="3xl:[@media(min-height:1060px)]:text-xl">{text}</span>
    </button>
  );
};

export default MenuItems;
