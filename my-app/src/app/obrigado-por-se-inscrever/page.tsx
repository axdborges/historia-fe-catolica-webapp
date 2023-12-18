"use client"
import Link from "next/link";
import "../../styles/globals.css"
import "../styles.css";

import { FaWhatsapp } from "react-icons/fa";

export default function ThanksPage() {
  return (
    <>
      <main className="main-thanks">
        <div className="container-title-wpp">
          <h1 className="main-title title-wpp">
            Obrigado! Só falta um passo para completar sua inscrição
          </h1>
          <h2 className="second-title-wpp">
            Entre em nosso grupo silencioso de WhatsApp para receber o acesso completo do evento.
            É por lá que enviaremos o link das aulas.
          </h2>
          <Link className="button-wpp" href="https://chat.whatsapp.com/DnNEvnX5SNODOwzCjuvUml">
            <FaWhatsapp className="svg-wpp" />
            <p className="text-wpp">Entrar no Grupo</p>
          </Link>
        </div>
      </main>
    </>
  );
}
