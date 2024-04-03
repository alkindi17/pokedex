"use client";

import { usePathname } from "next/navigation";
import { routeProvider, MenuProvider } from "@/lib/contexts";
import { useEffect, useState } from "react";

export default function Layout({
  children,
  pokemon,
  menu,
}: {
  children: React.ReactNode;
  pokemon: React.ReactNode;
  menu: React.ReactNode;
}) {
  const [currentRoute, setCurrentRouteState] = useState("menu");
  const [currentMenu, setCurrentMenu] = useState("home");
  const path = usePathname();
  const pathname = path.split("/").reverse()[0];

  const setCurrentRoute = (route: string) => {
    if (route === "menu") {
      setCurrentRouteState("menu");
      window.history.pushState(
        { ...window.history.state },
        "",
        `/pokemons/${currentMenu}`,
      );
    } else if (route === "pokemon") {
      setCurrentRouteState("pokemon");
    }
  };

  useEffect(() => {
    if (pathname === "home" || pathname === "list") {
      setCurrentRouteState("menu");
      setCurrentMenu(pathname);
    } else {
      setCurrentRouteState("pokemon");
    }
  }, [pathname]);

  return (
    <routeProvider.Provider value={{ currentRoute, setCurrentRoute }}>
      <MenuProvider.Provider
        value={{ currentMenu: currentMenu, setCurrentMenu: setCurrentMenu }}
      >
        <div className="flex h-[100dvh]">
          {children}
          <div
            className={`w-min-96 h-[100dvh] w-96 overflow-auto border-r max-lg:w-full ${
              currentRoute == "menu" ? "" : "max-lg:hidden"
            }`}
          >
            {menu}
          </div>
          <div
            className={`h-full flex-1 overflow-auto  ${
              currentRoute == "pokemon" ? "" : "max-lg:hidden"
            }`}
          >
            {pokemon}
          </div>
        </div>
      </MenuProvider.Provider>
    </routeProvider.Provider>
  );
}
