import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, A11y, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Infos = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Segurança e inovação",
    paragraph: "Suas aplicações com alta segurança e 100% feito do zero",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Um verdadeiro foguete",
    paragraph:
      "Otimizações de processos chatos, diga adeus aos processos manuais",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Você no topo",
    paragraph:
      "Melhore seus resultados e tenha mais flexibilidade em seus trabalhos",
  },
];

function Card() {
  return (
    <>
      <Swiper
        cubeEffect={{
          shadow: false,
        }}
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectCube, Pagination, A11y, Autoplay, Navigation]}
        effect="cube"
        className="md:hidden w-full mx-auto"
      >
        {Infos.map((item, i: number) => {
          return (
            <SwiperSlide
              key={item.title}
              className="flex justify-center mt-24 mb-12"
            >
              <div className="flex flex-row text-left w-80">
                <span className="py-1 px-4">{item.icon}</span>
                <div className="flex gap-4 flex-col">
                  <h3 className="text-2xl ">{item.title}</h3>{" "}
                  <p>{item.paragraph}</p>
                  <a
                    href="#Services"
                    className="text-blue-100 underline decoration-1"
                  >
                    Saiba mais {">"}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="hidden md:flex gap-4 flex-col p-20 md:flex-row w-full">
        {Infos.map((i) => {
          return (
            <div key={i.title} className="flex flex-row text-left w-80">
              <span className="py-1 px-4">{i.icon}</span>
              <div className="flex gap-4 flex-col">
                <h3 className="text-2xl ">{i.title}</h3> <p>{i.paragraph}</p>
                <a
                  href="#Services"
                  className="text-purple-100 underline decoration-1"
                >
                  Saiba mais {">"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
