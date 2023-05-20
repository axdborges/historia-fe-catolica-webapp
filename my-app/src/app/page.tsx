import "../styles/globals.css";
import "./styles.css";

import DropdownMenu from "@/components/DropDown";

import dynamic from 'next/dynamic';

// const Counter = dynamic(() => import('../components/DropDown'), { clientComponent: true });

export default function Home() {
  return (
    <>
      <header className="header-home">
        <p className="p">Historia e fé catolica</p>
        <DropdownMenu/>
      </header>
    </>
  );
}
