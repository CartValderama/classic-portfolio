import { create } from "zustand";

export type AppID =
  | "about"
  | "tictactoe"
  | "wordle"
  | "oldportfolio"
  | "credits";

type AppState = Record<AppID, boolean>;

type ApplicationStore = {
  openWindows: AppState;
  activeWindows: AppState;
  minimizedWindows: AppState;
  handleActiveWindows: (id: AppID) => void;
  handleOpenWindows: (id: AppID) => void;
  handleMinimizeRestore: (id: AppID) => void;
  closeWindow: (id: AppID) => void;
};

const initialWindowState: AppState = {
  about: false,
  tictactoe: false,
  wordle: false,
  oldportfolio: false,
  credits: false,
};

export const useApplicationStore = create<ApplicationStore>((set) => ({
  // Initial state
  openWindows: { ...initialWindowState },
  activeWindows: { ...initialWindowState },
  minimizedWindows: { ...initialWindowState },

  // Actions
  handleActiveWindows: (id) =>
    set((state) => ({
      activeWindows: Object.keys(state.activeWindows).reduce((acc, key) => {
        acc[key as AppID] = key === id;
        return acc;
      }, {} as AppState),
    })),

  handleOpenWindows: (id) =>
    set((state) => ({
      openWindows: { ...state.openWindows, [id]: true },
      activeWindows: Object.keys(state.activeWindows).reduce((acc, key) => {
        acc[key as AppID] = key === id;
        return acc;
      }, {} as AppState),
      minimizedWindows: { ...state.minimizedWindows, [id]: false },
    })),

  handleMinimizeRestore: (id) =>
    set((state) => ({
      minimizedWindows: {
        ...state.minimizedWindows,
        [id]: !state.minimizedWindows[id],
      },
      // When minimizing, also deactivate the window
      activeWindows: {
        ...state.activeWindows,
        [id]: state.minimizedWindows[id] ? true : false,
      },
    })),

  closeWindow: (id) =>
    set((state) => ({
      openWindows: { ...state.openWindows, [id]: false },
      activeWindows: { ...state.activeWindows, [id]: false },
      minimizedWindows: { ...state.minimizedWindows, [id]: false },
    })),
}));
