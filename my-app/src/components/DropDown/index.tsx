"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.css";
import menuDrop from "../../../public/menuDrop.svg";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<GiHamburgerMenu className="iconMenu"/>}
          background={"inherit"}
          width={40}
          height={40}
          border={"none"}
        />
        <MenuList height={200}>
          <MenuItem  height={"20%"} width={180}>Apoie este apostolado</MenuItem>
          <MenuItem height={"20%"} width={180}>Meu Livro</MenuItem>
          <MenuItem height={"20%"} width={180}>Redes sociais</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
