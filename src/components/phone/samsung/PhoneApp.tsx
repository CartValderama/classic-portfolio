import React from "react";

type PhoneAppProps = {
  label?: string;
  Icon: React.ElementType;
  style: string;
  action: () => void;
};

const PhoneApp = ({ label = "", Icon, style, action }: PhoneAppProps) => {
  return (
    <button
      type="button"
      onClick={action}
      className="flex flex-col justify-center items-center cursor-pointer text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95"
    >
      <Icon className={`text-[3.2rem] ${style}`} />
      <span className="text-xs">{label}</span>
    </button>
  );
};

export default PhoneApp;
