import React from "react";
import tatiana from "../assets/images/tatiana.png";
import SectionTitle from "./SectionTitle";


function About() {
  return (
    <section>
    <div className= "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="w-full md:w-6/12">
        <SectionTitle> About Me</SectionTitle>
        <p className=" text-md text-gray-600 dark:text-gray-300">soy una mujer en condicion de discapacidad auto-didacta, emprendedora, trabajadora  y que  nunca  se da por vencida siempre culmino hasta el final lo que me propongo, no me doy por vencida por muy dificil que sea la situacion </p>
        <a href= "mailto: tatiselka25@gmail.com" className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">tatiselka25@gmail.com</a>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={tatiana}
          />
        </div>
    </div>
    </section>
  );
}

export default About;
