"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./styles.css";
import menuDrop from "../../../public/menuDrop.svg";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button
        className="drop-button"
        onClick={toggleDropdown}
      >
        <Image src={menuDrop} alt="" width={25} height={25} />
      </button>
      {isOpen && (
        <ul className="absolute bg-white text-gray-800 pt-2 shadow-md menu-itens">
          <li className="list-bullet">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Apoie este apostolado
            </a>
            <hr />
          </li>
          <li className="list-bullet">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Meu Livro
            </a>
            <hr />
          </li>
          <li className="list-bullet">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 link-item">
              Redes sociais
            </a>
            <hr />
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
