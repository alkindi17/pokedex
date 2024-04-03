import { createContext, useContext } from "react";

export type HitsContext = {
  showHits: boolean;
  setShowHits: (show: boolean) => void;
};

export const showHitsProvider = createContext<HitsContext>({
  showHits: false,
  setShowHits: () => {},
});

export function useHitsContext() {
  return useContext(showHitsProvider);
}

export type RoutesContext = {
  currentRoute: string;
  setCurrentRoute: (menu: string) => void;
};

export const routeProvider = createContext<RoutesContext>({
  currentRoute: "menu",
  setCurrentRoute: () => {},
});

export function useRoutesContext() {
  return useContext(routeProvider);
}

export type MenuContext = {
  currentMenu: string;
  setCurrentMenu: (menu: string) => void;
};

export const MenuProvider = createContext<MenuContext>({
  currentMenu: "home",
  setCurrentMenu: () => {},
});

export function useMenuContext() {
  return useContext(MenuProvider);
}
