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
