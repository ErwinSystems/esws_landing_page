import React from "react";

function Final() {
  return (
    <div className="w-full md:p-8 flex justify-center">
      <div className="w-full md:w-10/12 h-96 bg-[url('https://i.imgur.com/V0J8xyq.png')] bg-cover bg-no-repeat flex flex-1 flex-col justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Nós envie um email e saiba mais
        </h1>
        <a href="#contato">
          <button className="mt-20 p-4  text-white rounded-md bg-blue-800 mx-auto">
            Enviar agora
          </button>
        </a>
      </div>
    </div>
  );
}

export default Final;
