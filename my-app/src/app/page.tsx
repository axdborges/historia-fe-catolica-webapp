import "../styles/globals.css";
import "./styles.css";

import Image from "next/image";
import logo from "../../public/logo.png";

import DropdownMenu from "@/components/DropDown";

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <header className="header-home">
        <div className="initial">
          <Image alt="História e Fé Católica logo" src={logo} width={25} />
          <p>História e Fé Católica</p>
        </div>
        <DropdownMenu />
      </header>
      <main className="main-page">
        <div className="container-title">
          <h1 className="main-title">
            Seu texto aqui como home, chamada para o canal
          </h1>
        </div>
        <div className="container-video">
          {/* <video controls width="600" height="400" preload="metadata">
            <source src="https://youtu.be/XYTthhnUWZ0" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XYTthhnUWZ0"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen="true"
          ></iframe>
        </div>
      </main>
    </>
  );
}
