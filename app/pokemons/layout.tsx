"use client";

import { usePathname } from "next/navigation";
import { routeProvider, tabsProvider } from "@/lib/contexts";
import { useEffect, useState } from "react";

export default function Layout({
  children,
  pokemon,
  tabs,
}: {
  children: React.ReactNode;
  pokemon: React.ReactNode;
  tabs: React.ReactNode;
}) {
  const [currentRoute, setCurrentRoute] = useState("tabs");
  const [currentTab, setCurrentTab] = useState("home");
  const pathname = usePathname().split("/").reverse()[0];

  useEffect(() => {
    if (pathname === "home" || pathname === "list") {
      setCurrentRoute("tabs");
      setCurrentTab(pathname);
    } else {
      setCurrentRoute("pokemon");
    }
  }, [pathname]);

  return (
    <routeProvider.Provider value={{ currentRoute, setCurrentRoute }}>
      <tabsProvider.Provider value={{ currentTab, setCurrentTab }}>
        <div className="flex h-[100dvh]">
          {children}
          <div
            className={`w-min-96 h-[100dvh] w-96 overflow-auto border-r bg-[#f5f5f5] max-lg:w-full ${
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
