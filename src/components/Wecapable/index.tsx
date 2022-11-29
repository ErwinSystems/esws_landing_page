import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dataText = [
  {
    id: 1,
    title: "Automações para você",
    paragraph:
      "Dê um up no seu trabalho, e livre-se de trabalhos manuais e chatos",
    listWord: [
      "Poupe Tempo",
      "Rapidez e segurança",
      "Lucratividade",
      "Flexibilidade maior",
    ],
    middle: false,
  },
  {
    id: 2,
    title: "Seu negocio web",
    paragraph:
      "Desenvolva conosco uma aplicação do zero, seja ele um site ou aplicativo.",
    listWord: [
      "Segurança",
      "Reconhecimento",
      "Agilidade e escalabidade",
      "Metodologias UI/UX",
    ],
    middle: true,
  },
  {
    id: 3,
    title: "Correção e analises",
    paragraph:
      "Uma analise é importante para a segurança do seu servidor.Corrigimos bugs e falhas que forem encontradas",
    listWord: [
      "Garanta sua segurança",
      "Livre-se de invasores",
      "SWOT do futuro",
      "Garantia do seu serviço",
    ],
    middle: false,
  },
];

function WaCapable() {
  return (
    <div
      className="flex w-full text-center justify-center flex-col gap-11"
      id="Services"
    >
      <h1 className="text-4xl text-gray-800 font-bold">
        Somos capazes de muito mais
      </h1>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        effect={"coverflow"}
        className="md:hidden  w-full mx-auto"
      >
        {dataText.map((item, i: number) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-5 border border-spacing-x-4 border-solid mx-auto my-16 border-gray-100 p-5 w-96">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-100">{item.paragraph}</p>
                <a href="#contato">
                  {item.middle ? (
                    <button className="bg-blue-500 w-11/12 h-12 rounded-lg text-white font-normal hover:bg-blue-100">
                      Saiba mais
                    </button>
                  ) : (
                    <button className="border border-solid border-gray-100 w-11/12 h-12 rounded-lg">
                      Saiba mais
                    </button>
                  )}
                </a>
                <ul className="text-center flex flex-col justify-center">
                  {item.listWord.map((words) => {
                    return (
                      <>
                        <li>
                          <div className="flex gap-3 m-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-sm font-bold text-gray-100">
                              {words}
                            </p>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className=" hidden md:flex  gap-4 justify-center">
        {dataText.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col gap-5 rounded-md border border-solid border-gray-100 p-5 w-96"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-100">{item.paragraph}</p>
              <a href="#contato">
                {item.middle ? (
                  <button className="bg-blue-500 w-11/12 h-12 rounded-lg text-white font-normal hover:bg-blue-100">
                    Saiba mais
                  </button>
                ) : (
                  <button className="border border-solid border-gray-100 w-11/12 h-12 rounded-lg">
                    Saiba mais
                  </button>
                )}
              </a>
              <ul className="text-center flex flex-col justify-center">
                {item.listWord.map((words) => {
                  return (
                    <>
                      <li>
                        <div className="flex gap-3 m-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-sm font-bold text-gray-100">
                            {words}
                          </p>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WaCapable;
