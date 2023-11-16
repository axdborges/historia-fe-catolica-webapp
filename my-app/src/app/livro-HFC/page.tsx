"use client";

import Image from "next/image";
import me from "../../../public/Lorenzo.png";
import foice from "../../../public/foice.jpg";
import igreja from "../../../public/ecclesia.jpg";
import rezar from "../../../public/rezar.jpg";

import "../../styles/globals.css";
import "../styles.css";

import { MailChimpForm } from "@/components/MailChimpForm";

export default function BookPage() {
  return (
    <>
      <main className="main-page-book">
        <div className="container-title-book">
          <h1 className="main-title">
            Descubra como a Revolução se tornou o ar que você respira
          </h1>
          <h2 className="second-title">
            E entenda como ser Santo em meio à crise
          </h2>
        </div>
      </main>
      <section className="">
        <div className="container-cta">
          <h2 className="third-title">
            Inscreva-se abaixo para participar gratuitamente do 
            “Como Ser Santo em Um Mundo Anticristão”
          </h2>
        </div>
        <MailChimpForm/>
      </section>
      <section className="section-icons">
        {/* <IconsSection/> */}
        <div className="container-icons">
          <div className="icon-box">
            <figure className="icon-point">
              <Image className="svg-icon " src={foice} alt="revolucao"/>
            </figure>
            <p className="icon-label">
              Entenda o que é a Revolução
            </p>
          </div>
          <div className="icon-box">
            <figure className="icon-point">
              <Image className="svg-icon " src={igreja} alt="revolucao"/>
            </figure>
            <p className="icon-label">
              Descubra como ela se infiltrou na Igreja e no mundo
            </p>
          </div>
          <div className="icon-box">
            <figure className="icon-point">
              <Image className="svg-icon " src={rezar} alt="revolucao"/>
            </figure>
            <p className="icon-label">
              Saiba como você pode se livrar de sua influência
            </p>
          </div>
        </div>
      </section>
      <section className="section-list">
        {/* <IconsSection/> */}
        <ul className="container-list">
          <div className="item-box">
            <p className="item-date">
              Dia 28/11
            </p>
            <li className="item-label">
              Aula 1 - O que é a Revolução
            </li>
          </div>
          <div className="item-box">
            <p className="item-date">
              Dia 29/11
            </p>
            <li className="item-label">
              Aula 2 - A Civilização Cristã desapareceu para sempre?
            </li>
          </div>
          <div className="item-box">
            <p className="item-date">
              Dia 30/11
            </p>
            <li className="item-label">
              Aula 3 - Eles alcançaram a santidade em um mundo anticristão!
              e lançamento da campanha do livro História e Fé Católica
            </li>
          </div>
        </ul>
      </section>
      <section className="section-whoAmI">
        <h2 className="title-whoAmI">Quem é Lorenzo Lazzarotto:</h2>
        <div className="container-whoAmI">
          <div className="image-whoAmI">
            <figure className="src-whoAmI figure">
              <Image
                src={me}
                alt="Lorenzo Lazzarotto"
                className="src-whoAmI link"
              />
            </figure>
          </div>
          <div className="description-whoAmI">
            <p className="paragraph-whoAmI">
              Natural de Ijuí no Rio Grande do Sul, nasci em um lar católico não praticante e passei a maior parte da 
              adolescência nas trevas do ateísmo, até me converter definitivamente em 2016, 
              realizando a minha consagração à Nossa Senhora no ano seguinte.
            </p>
            <p className="paragraph-whoAmI">
              Desde então, a maior preocupação da minha vida é servir à Santíssima Virgem da melhor forma possível.
              Esta é a razão de ser do meu canal, que existe para fim de levar a luz da Fé a todos que se encontram nas
              trevas do paganismo e da apostasia, proporcionando uma sólida formação Católica e Contra-revolucionária.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
