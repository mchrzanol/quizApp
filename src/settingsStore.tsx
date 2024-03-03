import {create} from "zustand";

enum Theme {
    light,
    dark
}

type Store = {
    theme: Theme,
    setTheme: (newTheme: Theme) => void,
}

const useSettingsStore = create<Store>((set) => ({
    theme: Theme.light,
    setTheme: (newTheme: Theme) => set({ theme: newTheme })
}));

export { useSettingsStore, Theme };
