import { create } from "zustand";

type AppState = Record<string, boolean>;

type ApplicationStore = {
  openWindows: AppState;
  activeWindow: string | "";
  minimizedWindows: AppState;
  windowOrder: string[];
  handleActiveWindow: (id: string) => void;
  handleOpenWindows: (id: string) => void;
  handleMinimizeRestore: (id: string) => void;
  InactiveAll: () => void;
  closeWindow: (id: string) => void;
  closeAllWindows: () => void;
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
  openWindows: { ...initialWindowState },
  minimizedWindows: { ...initialWindowState },
  activeWindow: "",
  windowOrder: [],

  handleActiveWindow: (id) => set({ activeWindow: id }),

  handleOpenWindows: (id) =>
    set((state) => {
      if (state.openWindows[id]) {
        return {
          openWindows: { ...state.openWindows, [id]: true },
          minimizedWindows: { ...state.minimizedWindows, [id]: false },
          activeWindow: id,
        };
      }

      return {
        openWindows: { ...state.openWindows, [id]: true },
        minimizedWindows: { ...state.minimizedWindows, [id]: false },
        activeWindow: id,
        windowOrder: [...state.windowOrder, id],
      };
    }),

  handleMinimizeRestore: (id) =>
    set((state) => {
      const isMinimizing = !state.minimizedWindows[id];
      return {
        minimizedWindows: {
          ...state.minimizedWindows,
          [id]: isMinimizing,
        },
        activeWindow: isMinimizing ? "" : id,
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
      activeWindow: state.activeWindow === id ? "" : state.activeWindow,
      windowOrder: state.windowOrder.filter((windowId) => windowId !== id),
    })),

  closeAllWindows: () =>
    set(() => ({
      openWindows: { ...initialWindowState },
      minimizedWindows: { ...initialWindowState },
      activeWindow: "",
      windowOrder: [],
    })),
}));
