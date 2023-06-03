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
          <Image alt="História e Fé Católica logo" src={logo} width={25}/>
          <p>História e Fé Católica</p>
        </div>
        <DropdownMenu />
      </header>
      <main className="main-page">
        <h1 className="main-title">
          Seu texto aqui como home, chamada para o canal
        </h1>
      </main>
    </>
  );
}
