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
          <MenuList height={200} className="menu-itens">
            <MenuItem height={"20%"} width={180}>
              <Link href={`#apostolado`}
                className="link-item"
              >Apoie este apostolado</Link>
            </MenuItem>
            <MenuItem height={"20%"} width={180}>
              <Link href="/livro-HFC/lancamento"  className="link-item"
              prefetch={false}>Meu Livro</Link>
            </MenuItem>
            <MenuItem height={"20%"} width={180}>
              <Link href={`#redes`} 
                className="link-item">
                  Redes sociais</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <div className="desktop-items">
          <Link href={`#apostolado`} className="link-header">
            <p className="item-header">Apoie este apostolado</p>
          </Link>
          <Link href="/livro-HFC/lancamento" className="link-header"
          prefetch={false}>
            <p className="item-header">
              Meu Livro
            </p>
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
