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
      className="flex flex-col justify-center items-center cursor-pointer text-[0.9rem] gap-[5px] transition-opacity duration-200 hover:opacity-80 active:scale-95 mobile:[@media(max-height:450px)]:flex-row"
    >
      <Icon
        className={`text-[3.2rem] mobile:[@media(max-height:450px)]:text-[2.8rem] ${style} mobile:[@media(max-height:450px)]:rotate-90`}
      />
      <span className="text-xs mobile:[@media(max-height:450px)]:text-[0.5rem] mobile:[@media(max-height:450px)]:[writing-mode:vertical-lr]">
        {label}
      </span>
    </button>
  );
};

export default PhoneApp;
