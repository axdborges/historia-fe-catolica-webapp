"use client";

import Image from "next/image";
import Link from "next/link";

import me from "../../../../public/Lorenzo.png";
import foice from "../../../../public/foice.jpg";
import igreja from "../../../../public/ecclesia.jpg";
import rezar from "../../../../public/rezar.jpg";
import mockup from "../../../../public/capa-livro-mockup.jpg";
import "../../../styles/globals.css";
import "../../styles.css";

import { MailChimpForm } from "@/components/MailChimpForm";

export default function BookPage() {
  return (
    <>
      <main className="main-page-book-lancamento">
        <div className="container-title-book-lancamento">
          <h1 className="main-title title-amarelo">
            Um guia seguro para conhecer a beleza da tradição
          </h1>
          <h2 className="second-title-lancamento subtitle-white">
            Compre agora seu exemplar do livro História e Fé Católica 
            e ganhe uma Masterclass bônus com o autor
          </h2>
        </div>
          {/* <Image src={mockup} alt="livro-historia-fe-catolica"/> */}
          <Link 
            href={"https://editoraarmada.com.br/produto/historia-e-fe-catolica-pre-venda/"}
            target="_blank"
            className="button-sell-book">
            Garantir meu Livro
          </Link>
      </main>
      <section className="organize-paragraphs">
        <div className="container-icons">
          <h2 className="third-title-lancamento">
            É dever do católico conhecer e lutar pela Verdade.
          </h2>
          <div className="container-paragraph">
            <p className="p-generic">
              “Combater a Revolução é um ato de fé, um dever religioso antes de qualquer coisa.”
              - Monsenhor de Ségur
            </p>
            <p className="space-p"> </p>
            <p className="p-generic">
              O livro História e Fé Católica foi escrito para suprir uma lacuna na formação 
              intelectual dos católicos:
            </p>
            <p className="space-p"> </p>
            <p className="p-generic">
              Sabemos que nossa época é corrompida pela Revolução, 
              mas como podemos conhecer e viver a Fé verdadeira em um mundo decaído?
            </p>
            <p className="space-p"> </p>
            <p className="p-generic">
              Este livro é composto de vários artigos que irão te guiar pelo caminho da tradição católica. 
              É uma tentativa de jogar uma fagulha da luz da tradição católica sobre as trevas que vivemos.
            </p>
            <p className="space-p"> </p>
            <p className="p-generic">
              O livro está em pré-venda e a entrega é estimada para fevereiro de 2024.
            </p>
            <p className="space-p"></p>
          </div>
          <Link 
            href={"https://editoraarmada.com.br/produto/historia-e-fe-catolica-pre-venda/"}
            target="_blank"
            className="button-sell-book">
            Garantir meu Livro
          </Link>
        </div>
      </section>
      <section className="section-icons-lancamento">
        <div className="container-icons-lancamento">
          <h2 className="bonus-title-lancamento">
            Bônus: 
          </h2>
          <h3 className="bonus-second-title-lancamento">
            Compre agora e ganhe uma masterclass ao vivo com o autor
          </h3>
          <p className="p-generic p-bonus">
            Ao garantir seu exemplar, você ganha de graça uma aula ao vivo com o autor, Lorenzo Lazzarotto, 
            para interagir e tirar suas dúvidas. A aula será 
            ministrada um mês após o envio do livro e você será notificado via WhatsApp ou email.
          </p>
          <Link 
            href={"https://editoraarmada.com.br/produto/historia-e-fe-catolica-pre-venda/"}
            target="_blank"
            className="button-sell-book">
            <p className="button-item">
              Garantir meu Livro
            </p>
          </Link>
        </div>
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
