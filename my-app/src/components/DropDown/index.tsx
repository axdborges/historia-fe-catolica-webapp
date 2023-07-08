"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.css";

const DropdownMenu = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  return (
    <div className="menu">
      {isMobile[0] ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<GiHamburgerMenu className="iconMenu" />}
            background={"inherit"}
            width={40}
            height={40}
            border={"none"}
          />
          <MenuList height={200}>
            <MenuItem height={"20%"} width={180}>
              <Link href={`#apostolado`}>Apoie este apostolado</Link>
            </MenuItem>
            <MenuItem height={"20%"} width={180}>
              Meu Livro - EM BREVE
            </MenuItem>
            <MenuItem height={"20%"} width={180}>
              <Link href={`#redes`}>Redes sociais</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <div className="desktop-items">
          <Link href={`#apostolado`} className="link-header">
            <p className="item-header">Apoie este apostolado</p>
          </Link>
          <Link href={`#apostolado`} className="link-header">
            <p className="item-header">Meu Livro - (EM BREVE)</p>
          </Link>
          <Link href={`#redes`} className="link-header">
            <p className="item-header">Redes Sociais</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
