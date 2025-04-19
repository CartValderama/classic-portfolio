import { create } from "zustand";

type PhoneUIStore = {
  isShowApps: boolean;
  setShowApps: (value: boolean) => void;
  isHideStatus: boolean;
  setHideStatus: (value: boolean) => void;
};

export const usePhoneUIStore = create<PhoneUIStore>((set) => ({
  isShowApps: false,
  setShowApps: (value) => set({ isShowApps: value }),

  isHideStatus: false,
  setHideStatus: (value) => set({ isHideStatus: value }),
}));
