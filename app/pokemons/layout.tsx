"use client";

import { usePathname } from "next/navigation";
import { routeProvider, tabsProvider } from "@/lib/contexts";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function Layout({
  children,
  pokemon,
  tabs,
}: {
  children: React.ReactNode;
  pokemon: React.ReactNode;
  tabs: React.ReactNode;
}) {
  const [currentRoute, setCurrentRouteState] = useState("tabs");
  const [currentTab, setCurrentTab] = useState("home");
  const path = usePathname();
  const pathname = path.split("/").reverse()[0];

  const router = useRouter();

  const setCurrentRoute = (route: string) => {
    if (route === "tabs") {
      setCurrentRouteState("tabs");
      window.history.replaceState(
        { ...window.history.state },
        "",
        `/pokemons/${currentTab}`,
      );
    } else if (route === "pokemon") {
      setCurrentRouteState("pokemon");
    }
  };

  useEffect(() => {
    if (pathname === "home" || pathname === "list") {
      setCurrentRouteState("tabs");
      setCurrentTab(pathname);
    } else {
      setCurrentRouteState("pokemon");
    }
  }, [pathname]);

  return (
    <routeProvider.Provider value={{ currentRoute, setCurrentRoute }}>
      <tabsProvider.Provider value={{ currentTab, setCurrentTab }}>
        <div className="flex h-[100dvh]">
          {children}
          <div
            className={`w-min-96 h-[100dvh] w-96 overflow-auto border-r max-lg:w-full ${
              currentRoute == "tabs" ? "" : "max-lg:hidden"
            }`}
          >
            {tabs}
          </div>
          <div
            className={`h-full flex-1 overflow-auto  ${
              currentRoute == "pokemon" ? "" : "max-lg:hidden"
            }`}
          >
            {pokemon}
          </div>
        </div>
      </tabsProvider.Provider>
    </routeProvider.Provider>
  );
}
