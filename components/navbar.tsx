import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  HomeIcon,
  ChatAltIcon,
  PuzzleIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
  XIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

const navItems = [
  {
    name: "Home",
    description: "Welcome to DCS",
    href: "/",
    icon: HomeIcon,
    disabled: false,
  },
  {
    name: "About",
    description: "Get to know us!",
    href: "/about",
    icon: InformationCircleIcon,
    disabled: false,
  },
  {
    name: "Contact",
    description: "Reach out & connect with us",
    href: "/contact",
    icon: ChatAltIcon,
    disabled: false,
  },
  {
    name: "Our Games",
    description: "A catalog of our games",
    href: "/games",
    icon: PuzzleIcon,
    disabled: false,
  },
  {
    name: "Tutorials",
    description: "Dev Blog & Tutorials",
    href: "/blog",
    icon: PuzzleIcon,
    disabled: false,
  },
];

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const renderThemeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          type="button"
          className="ml-2 flex p-2 rounded-md bg-gradient-to-r from-amber-600 to-amber-700 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setTheme("light")}
        >
          <span className="sr-only">Toggle Darkmode</span>
          <SunIcon className="text-white w-6 h-6" role="banner" />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="ml-2 flex p-2 rounded-md bg-gradient-to-r from-amber-600 to-amber-700 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setTheme("dark")}
        >
          <span className="sr-only">Toggle Darkmode</span>
          <MoonIcon className="text-white w-6 h-6" role="banner" />
        </button>
      );
    }
  };

  return (
    <Popover className="relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-800 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 p-1.5 pb-0 rounded-full ring-2 ring-amber-600 dark:ring-white max-w-[60px]">
            <Link href="/">
              <a>
                <span className="sr-only">Damned Cat Studio</span>
                <Image
                  className="rounded-full"
                  width={52}
                  height={50}
                  src={"/images/damnedcatstudio.jpg"}
                  alt="Damned Cat Damned Logo"
                />
              </a>
            </Link>
          </div>
          <div className="mr-2 ml-[auto] md:hidden">{renderThemeToggle()}</div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              if (!item.disabled) {
                return (
                  <Link href={item.href} key={item.name}>
                    <a
                      title={item.description}
                      className="text-base font-medium text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100"
                    >
                      {item.name}
                    </a>
                  </Link>
                );
              } else {
                return (
                  <p
                    key={item.name}
                    title={item.description}
                    className="text-base font-medium text-gray-300 dark:text-gray-700"
                  >
                    {item.name}
                  </p>
                );
              }
            })}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:bg-amber-700 dark:hover:bg-amber-700">
                <ChatAltIcon
                  className="flex-shrink-0 h-6 w-6 text-white"
                  aria-hidden="true"
                />
                Contact Us
              </a>
            </Link>
            {renderThemeToggle()}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="p-1.5 pb-0 rounded-full ring-2 ring-amber-600 dark:ring-white">
                  <Image
                    className="rounded-full"
                    width={52}
                    height={50}
                    src={"/images/damnedcatstudio.jpg"}
                    alt="Damned Cat Damned Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => {
                    if (!item.disabled) {
                      return (
                        <Link href={item.href} key={item.name}>
                          <a
                            title={item.description}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-amber-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                              {item.name}
                            </span>
                          </a>
                        </Link>
                      );
                    } else {
                      return (
                        <p
                          key={item.name}
                          title={item.description}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-amber-800"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-300 dark:text-gray-500">
                            {item.name}
                          </span>
                        </p>
                      );
                    }
                  })}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/contact">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:bg-amber-700 dark:hover:bg-amber-700">
                    <ChatAltIcon
                      className="flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
