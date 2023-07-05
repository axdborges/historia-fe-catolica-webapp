"use client";
import React, { Children, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { TfiYoutube } from "react-icons/tfi";

import "./styles.css";

const IconsSection = () => {
  return (
    <div className="container-links">
      <div className="link-box">
        <Link
          href={"http://youtube.com/c/lorenzomatheus2"}
          target="_blank"
          className="link-icon"
        >
          <TfiYoutube className="svg"/>
        </Link>
        Youtube
      </div>
    </div>
  );
};

export default IconsSection;
