import React from "react";

function Contact() {
  return (
    <div
      id="contato"
      className="my-24 md:my-32 w-full md:m-auto md:rounded-lg md:w-10/12 flex flex-col gap-8 text-center bg-blue-500 py-20 md:p-32"
    >
      <h1 className="text-4xl text-white font-bold">Fale conosco</h1>
      <p className="text-sm text-white">
        Envie uma solicitação e iremos falar diretamente com você, a fim de lhe
        ajudar a encontrar a solução/serviço para você.
      </p>

      <form
        action=""
        className="m-auto w-full p-2 flex flex-col gap-8 justify-center"
      >
        <div className="flex flex-col md:flex-row gap-5 justify-center  w-full">
          <input
            className="rounded-lg p-2 md:w-6/12 text-center md:text-left"
            type="text"
            placeholder="insira seu email"
          />
          <input
            className="rounded-lg p-2 md:w-6/12 text-center md:text-left"
            type="text"
            placeholder="insira seu nome"
          />
        </div>
        <div className="h-40 m-auto w-full">
          <textarea
            className="rounded-lg p-2 mx-auto w-full h-48 hover:border-none"
            placeholder="Descreva com detalhe o que precisa"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
