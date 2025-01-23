"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Book,
  CircleX,
  Image,
  Info,
  Menu,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { title: "Menu", href: "/menu", icon: <Book size={20} /> },
  { title: "Order", href: "/order", icon: <ShoppingCart size={20} /> },
  { title: "About Us", href: "/about", icon: <Info size={20} /> },
  { title: "Contact", href: "/contact", icon: <Phone size={20} /> },
  { title: "Gallery", href: "/gallery", icon: <Image size={20} /> },
];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setSelectedLink(href);
    setOpenMenu(false); // Close the menu on link click (for mobile view)
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <section className="max-w-7xl flex justify-between items-center mx-auto py-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setSelectedLink("/")}
          >
            <img
              src="/logo-2.png"
              alt="Banh Mi Che Cali"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold flex items-center gap-2 ${
                  selectedLink === link.href
                    ? "text-yellow-500"
                    : "text-gray-800 hover:text-yellow-500"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.icon}
                <p>{link.title}</p>
              </Link>
            ))}
          </div>
          <Menu
            className="md:hidden text-gray-800"
            size={32}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          <AnimatePresence>
            {openMenu && (
              <motion.div
                className="w-[90%] max-w-[400px] h-[500px] bg-white shadow-lg 
                absolute top-16 right-5 rounded-lg z-50 p-5 flex flex-col gap-5 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <CircleX
                  className="absolute top-4 right-4 text-gray-800 hover:text-gray-500"
                  size={28}
                  onClick={() => setOpenMenu(false)}
                />
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl font-semibold flex items-center gap-4
                      mb-3 transition-colors ${
                        selectedLink === link.href
                          ? "text-yellow-500"
                          : "text-gray-800 hover:text-yellow-500"
                      }`}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.icon}
                    <p>{link.title}</p>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
