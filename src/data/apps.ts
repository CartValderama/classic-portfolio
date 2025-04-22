import {
  TbAccessible,
  TbCopyright,
  TbHelp,
  TbLetterW,
  TbNews,
  TbTicTac,
} from "react-icons/tb";
import { AppProps } from "../lib/type";
import AboutMe from "../components/apps/AboutMe";
import Credits from "../components/apps/Credits";
import OldPorfolio from "../components/apps/OldPortolio";
import Tictactoe from "../components/apps/Tictactoe";
import Guide from "../components/apps/Guide";
import Wordle from "../components/apps/Wordle";
import wordle_icon from "../assets/icons/wordle_icon.svg";
import oldportfolio_icon from "../assets/icons/oldportfolio_icon.svg";
import credit_icon from "../assets/icons/credit_icon.svg";
import tictactoe_icon from "../assets/icons/tictactoe_icon.svg";
import guide_icon from "../assets/icons/guide_icon.svg";
import aboutme_icon from "../assets/icons/aboutme_icon.svg";

export const apps: AppProps[] = [
  {
    Icon: TbHelp,
    Component: Guide,
    url: guide_icon,
    style: "text-green-200 bg-green-900 p-2 rounded",
    label: "Guide",
    id: "guide",
    iWidth: 300,
    iHeight: 400,
  },
  {
    Icon: TbNews,
    Component: AboutMe,
    url: aboutme_icon,
    style: "text-amber-900 bg-amber-300 p-2 rounded",
    label: "About Me",
    id: "about",
    iWidth: 400,
    iHeight: 400,
  },
  {
    Icon: TbAccessible,
    Component: OldPorfolio,
    url: oldportfolio_icon,
    style: "text-sky-700 bg-white p-2 rounded",
    label: "Old Portolio",
    id: "oldportfolio",
    iWidth: 500,
    iHeight: 400,
  },
  {
    Icon: TbCopyright,
    Component: Credits,
    url: credit_icon,
    style: "text-white bg-yellow-600 p-2 rounded",
    label: "Credits",
    id: "credits",
    iWidth: 400,
    iHeight: 370,
  },
  {
    Icon: TbLetterW,
    Component: Wordle,
    url: wordle_icon,
    style: "text-white bg-[#55a459] p-2 rounded",
    label: "Wordle",
    id: "wordle",
    iWidth: 350,
    iHeight: 500,
  },
  {
    Icon: TbTicTac,
    Component: Tictactoe,
    url: tictactoe_icon,
    style: "text-white bg-amber-700 p-2 rounded",
    label: "Tictactoe",
    id: "tictactoe",
    iWidth: 350,
    iHeight: 450,
  },
] as const;
