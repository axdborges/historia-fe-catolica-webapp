import "../styles/globals.css";
import "./styles.css";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import me from "../../public/Lorenzo.png";

import DropdownMenu from "@/components/DropDown";

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <header className="header-home">
        <div className="initial">
          <Image alt="História e Fé Católica logo" src={logo} width={25} />
          <p className="header-title">História e Fé Católica</p>
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
          <iframe
            className="main-video"
            width="350px"
            height="190px"
            src="https://www.youtube.com/embed/6dE4LGxgL0Y"
            title="História e Fé Católica Lorenzo Lazarotto"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </main>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              quis quos, praesentium nihil voluptatem ex. Maiores totam ipsam ut
              alias omnis reprehenderit, dolore doloremque voluptas eveniet
              tempora velit suscipit praesentium.
            </p>
          </div>
        </div>
      </section>
      <section className="section-endorse">
        <h2 className="title-endorse">Apoie este Apostolado!</h2>
        <div className="container-endorse">
          <div className="description-endorse">
            <p className="paragraph-endorse">
              Desde 2020 decidi propagar a história e fé Católica para melhor
              servir a Deus e sem interesses financeiros. Porém desde Março de
              2023 tenho que arcar com o financiamento da minha faculdade junto
              das despesas básicas.
            </p>
            <p className="paragraph-endorse">
              Uma doação mensal, ainda que com valores baixos que não impactam
              em sua vida financeira, fará TODA a diferença para mim. Assim,
              poderei continuar a me dedicar em tempo integral ao Apostolado.
            </p>
          </div>
          <div className="cta-endorse">
            
            <Link
              href={
                "https://www.kickante.com.br/crowdfunding/sua-ajuda-sustenta-esse-apostolado"
              }
              className="cta-link"
              target="_blank"
            >
              <button className="button-endorse">
                Quero ajudar este Apostolado!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
