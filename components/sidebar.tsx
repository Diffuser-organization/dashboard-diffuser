"use client"
import { Button, Link, User } from "@heroui/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Logo, MenuToggleIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="sm:hidden w-full flex items-center justify-between px-4 py-3 bg-content1">
        <Button
          isIconOnly
          aria-label="Toggle sidebar"
          className="inline-flex items-center p-2 mt-2 ms-3 rounded-lg"
          variant="light"
          onPress={() => setIsOpen(!isOpen)}
        >
          <MenuToggleIcon className="w-6 h-6" />
        </Button>
        <Logo />
        <ThemeSwitch />
      </div>
      {isOpen && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black/30 z-30 md:hidden cursor-default"
          style={{ border: "none", padding: 0, margin: 0 }}
          tabIndex={0}
          type="button"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        aria-label="Sidebar"
        className={
          `fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0` +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
        id="logo-sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-content1">
          <a className="flex items-center ps-2.5 mb-5" href="/dashboard">
            <Logo />
          </a>
          <User
            avatarProps={{
              src: "/cat.png",
            }}
            className="px-5 mb-5"
            description="cat@diffuser.com"
            name="Diffuser Cat"
          />
          <nav>
            <ul className="space-y-2 font-medium">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Button
                    as={Link}
                    className={
                      "flex items-center px-5 py-6 text-lg border-primary rounded-none" +
                      (pathname === item.href
                        ? " text-primary border-r-5 bg-content2"
                        : "")
                    }
                    href={item.href}
                    variant="light"
                  >
                    <item.icon className="shrink-0 w-5 h-5" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {item.label}
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
