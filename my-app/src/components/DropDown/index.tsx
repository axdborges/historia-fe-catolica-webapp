'use client'
import React, { useState } from "react";

import "./styles.css"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative menu">
      <button
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md drop-button"
        onClick={toggleDropdown}
      >
        Menu
      </button>
      {isOpen && (
        <ul className="absolute bg-white text-gray-800 pt-2 shadow-md menu-itens">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Apoie este apostolado
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Meu Livro
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Redes sociais
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
