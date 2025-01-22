"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Banner from "../_components/Banner";
import MaxWithWrapper from "../_components/MaxWithWrapper";
import Modal from "../_components/Modal";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItems } from "../_global/menu";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItems | null>(
    null
  );
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const categorySelectionRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    menuItemsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleItemClick = (item: MenuItems) => {
    setSelectedMenuItem(item);
    setOpenModal(true);
  };

  const filteredMenuItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Banner imgSrc="/bun-bo-hue.jpg" pageTitle="Menu" />
        <div
          style={{
            backgroundImage: 'url("/restaurant-pattern.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <MaxWithWrapper>
            <div
              ref={categorySelectionRef}
              className="flex flex-col items-center justify-center py-10 w-full"
            >
              <h2 className="font-semibold text-3xl">Our Menu</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[80%] items-center justify-center mt-5 text-xl">
                {MENU_CATEGORIES.map((category, index) => (
                  <Button
                    key={index}
                    className={`${
                      selectedCategory === category
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-900 text-white"
                    } text-[17px] w-full py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300`}
                    size={"xl"}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <section
              ref={menuItemsRef}
              className="flex flex-col items-center justify-center py-10 w-full"
            >
              <div className="w-[80%] text-center min-h-[600px]">
                <h2 className="font-semibold text-3xl mb-5 text-yellow-500">
                  {selectedCategory} Menu
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className="border p-5 rounded shadow hover:bg-zinc-400 hover:cursor-pointer transform 
                      transition-transform duration-200 hover:scale-105"
                      onClick={() => handleItemClick(item)}
                    >
                      <h3 className="font-semibold text-xl">{item.name}</h3>
                      <p className="font-light">{item.category}</p>
                      <p className="text-yellow-900 font-bold">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </MaxWithWrapper>
        </div>
      </section>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        {selectedMenuItem && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {selectedMenuItem.name}
            </h2>
            <p className="text-lg mb-2 text-center text-gray-700">
              {selectedMenuItem.category}
            </p>
            <p className="text-yellow-900 font-bold mb-4 text-center">
              {selectedMenuItem.price}
            </p>
            {selectedMenuItem.ingredients && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
                <ul className="list-disc list-inside pl-4">
                  {selectedMenuItem.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6 flex justify-center">
              <button
                className="px-6 py-2 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MenuPage;
