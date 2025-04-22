import { LuRectangleHorizontal } from "react-icons/lu";
import { AiOutlineRollback, AiOutlinePoweroff } from "react-icons/ai";
import { IoAppsSharp } from "react-icons/io5";
import { Slide } from "../lib/type";

export const slides: Slide[] = [
  {
    icon: LuRectangleHorizontal,
    title: "Home Button",
    description:
      "Press the center button at the bottom of the phone to instantly return to the home screen from any app. Your current app will remain open in the background.",
  },
  {
    icon: AiOutlineRollback,
    title: "Back Button",
    description:
      "Press the button at the bottom-right of the phone to return to the previous screen. Note: This will close your current app and you may lose unsaved progress in games.",
  },
  {
    icon: AiOutlinePoweroff,
    title: "Power Button",
    description:
      "Press the button on the bottom-left of the phone to turn off the device. This will return you to the landing page and close all apps.",
  },
  {
    icon: IoAppsSharp,
    title: "App Drawer",
    description:
      "Tap the icon at the bottom-center of the phone to open the app drawer. This shows all available applications and lets you switch between them.",
  },
];
