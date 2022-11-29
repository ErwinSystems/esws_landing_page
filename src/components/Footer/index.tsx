import Image from "next/image";
import React from "react";

import LogoWhite from "../../pages/assets/LogoWhite.svg";

// Redes sociais
import Facebook from "../../pages/assets/bxl_facebook.svg";
import Instagram from "../../pages/assets/bxl_instagram.svg";
import Likendin from "../../pages/assets/Linkendin.svg";

function Footer() {
  return (
    <footer className="h-96 w-full bg-blue-900 flex">
      <div className=" w-full md:w-9/12 bg-blue-600 h-72 md:rounded-xl flex justify-center m-auto">
        <div className="my-auto w-full text-center flex flex-col gap-5 justify-center">
          <div className="w-52 m-auto">
            <Image src={LogoWhite} alt="Logo" />
          </div>
          <p className="text-base text-white">
            Somos uma empresa de tecnologia, que oferece a você a melhor solução
            para o seu negocio
          </p>
          <ul className="flex flex-row gap-9 m-auto">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100085307054262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/erwinsystemss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/erwin-system-479083250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Likendin} alt="Likendin" />
              </a>
            </li>
          </ul>
          <div className="w-6/12 m-auto h-1 rounded-lg bg-white"></div>
          <p className="text-sm text-white">
            Desenvolvido por Erwin, Todos direitos reservados, 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
