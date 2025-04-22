import { JSX } from "react";
import { IconType } from "react-icons";

export type Slide = {
  icon: IconType;
  title: string;
  description: string;
};

export type GuessProps = {
  word: string;
  guess: string;
  isGuessed: boolean;
};

export type AppID =
  | "about"
  | "tictactoe"
  | "wordle"
  | "oldportfolio"
  | "credits"
  | "guide";

export type AppProps = {
  Icon: IconType;
  Component: () => JSX.Element;
  url: string;
  style: string;
  label: string;
  id: AppID;
  iWidth: number;
  iHeight: number;
};

export type StartType = {
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  transition: {
    duration: number;
    delay: number;
  };
};

export type selectMenuProps = {
  selectMenu: string;
};

export type HomeScreenProps = {
  isShowApps: boolean;
  setShowApps: (value: boolean) => void;
  isHideStatus: boolean;
  setHideStatus: (value: boolean) => void;
};
