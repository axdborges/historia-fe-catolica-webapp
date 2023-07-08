"use client";
import React, { Children, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { TfiYoutube } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";



import "./styles.css";

const IconsSection = () => {
  return (
    <div className="container-links">
      <div className="link-box">
        <Link
          href={"http://youtube.com/c/lorenzomatheus2"}
          target="_blank"
          className="link-box"
        > 
          <figure className="link-icon youtube-link">
            <TfiYoutube className="svg "/>
          </figure>
          <p className="link-label">
            Canal do Youtube
          </p> 
        </Link>
      </div>
      <div className="link-box">
        <Link
          href={"https://t.me/Historiaefecatolica"}
          target="_blank"
          className="link-box"
        > 
          <figure className="link-icon telegram-link">
            <FaTelegramPlane className="svg "/>
          </figure>
          <p className="link-label">
            Canal do Telegram
          </p> 
        </Link>
      </div>
      <div className="link-box">
        <Link
          href={"https://www.instagram.com/lorenzo_lazzarotto/"}
          target="_blank"
          className="link-box"
        > 
          <figure className="link-icon instagram-link">
            <BsInstagram className="svg "/>
          </figure>
          <p className="link-label">
            Perfil do Instagram
          </p> 
        </Link>
      </div>
    </div>
  );
};

export default IconsSection;
