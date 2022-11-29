import React from "react";

function Main() {
  return (
    <>
      <main className=" mt-28 md:px-14 w-full overflow-y-hidden">
        <div className="flex  mx-auto md:mt-28 gap-32 ">
          <aside className="w-full text-center md:w-6/12 md:h-6/12 md:text-left">
            <div className="flex flex-col text-center md:text-left md:items-left mx-auto md:gap-7 gap-10">
              <h1 className="md:text-6xl text-4xl font-bold text-gray-800 ">
                Seu software de ponta a ponta
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ut molestias mollitia officiis
              </p>
              <ul className="flex justify-center gap-4 md:justify-start">
                <li>
                  <button className="text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-3 md:mr-0 ">
                    Começar agora
                  </button>
                </li>
                <li>
                  <button className="border border-current border-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center">
                    Saiba mais
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          <img
            src="https://i.imgur.com/94zOIhg.jpg"
            alt="icon"
            className="hidden md:block w-[34rem] h-[25rem]"
          />
        </div>
      </main>
    </>
  );
}
export default Main;
