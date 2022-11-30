import React from "react";
import Image from "next/image";
import ilustracao from '../../pages/assets/solution.svg';


function Solutions() {
  return (
    <div className="flex px-4 md:px-14 my-24 gap-9">
      <aside className="flex flex-col w-full justify-center gap-8 md:w-6/12 md:px-4 md:py-12">
        <div className="flex flex-col gap-12 justify-center md:justify-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            As soluções vão além
          </h1>
          <p className="text-base text-gray-400">
            A equipe Erwin conta com uma equipe formada por profissionais de
            áreas diversas, sendo elas desenvolvedores, designers, marketing, em
            que ambos trabalhos juntos para oferecer a vocês a melhor
            experiência possível e aos seus clientes
          </p>
          <a href="#contato">
            <button className="border border-solid border-slate-400 w-48 p-2 rounded-lg">
              Fale Conosco
            </button>
          </a>
        </div>
      </aside>
      <div className="hidden md:block">
        <Image src={ilustracao} alt="img" />
      </div>
    </div>
  );
}

export default Solutions;
