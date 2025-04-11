import { create } from "zustand";

export type AppID =
  | "about"
  | "tictactoe"
  | "wordle"
  | "oldportfolio"
  | "credits"
  | "guide";

type AppState = Record<AppID, boolean>;

type ApplicationStore = {
  openWindows: AppState;
  activeWindow: AppID | ""; // Now a single string
  minimizedWindows: AppState;
  handleActiveWindow: (id: AppID) => void; // Renamed to singular
  handleOpenWindows: (id: AppID) => void;
  handleMinimizeRestore: (id: AppID) => void;
  InactiveAll: () => void;
  closeWindow: (id: AppID) => void;
};

const initialWindowState: AppState = {
  about: false,
  tictactoe: false,
  wordle: false,
  oldportfolio: false,
  credits: false,
  guide: false,
};

export const useApplicationStore = create<ApplicationStore>((set) => ({
  // Initial state
  openWindows: { ...initialWindowState },
  minimizedWindows: { ...initialWindowState },
  activeWindow: "",

  // Actions
  handleActiveWindow: (id) => set({ activeWindow: id }), // Simply set the active window ID

  handleOpenWindows: (id) =>
    set((state) => ({
      openWindows: { ...state.openWindows, [id]: true },
      minimizedWindows: { ...state.minimizedWindows, [id]: false },
      activeWindow: id, // Automatically make newly opened window active
    })),

  handleMinimizeRestore: (id) =>
    set((state) => {
      const isMinimizing = !state.minimizedWindows[id];
      return {
        minimizedWindows: {
          ...state.minimizedWindows,
          [id]: isMinimizing,
        },
        activeWindow: isMinimizing ? "" : id, // Clear active if minimizing, set if restoring
      };
    }),

  InactiveAll: () => {
    set((state) => ({
      ...state,
      activeWindow: "",
    }));
  },

  closeWindow: (id) =>
    set((state) => ({
      openWindows: { ...state.openWindows, [id]: false },
      minimizedWindows: { ...state.minimizedWindows, [id]: false },
      activeWindow: state.activeWindow === id ? "" : state.activeWindow, // Clear if closing active
    })),
}));
