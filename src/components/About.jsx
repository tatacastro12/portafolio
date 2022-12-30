import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className= "felx flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle> About Me</SectionTitle>
        <p className=" text-md text-gray-600 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer to ok a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        <a href= "mailto: tatiselka25@gmail.com" className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">tatiselka25@gmail.com</a>
      </div>
      <img src={"https://scontent.fbog10-1.fna.fbcdn.net/v/t39.30808-6/287509667_10226658546506268_2478920429713797577_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHraZcFo3TSKcLmIn2CH_aqw3q2E7vkAODDerYTu-QA4IWsNuxCvOJyzk5q0J1jzNo&_nc_ohc=7jx-CdX9RZMAX_D7CUT&_nc_ht=scontent.fbog10-1.fna&oh=00_AfCHH4g3CiBZj9UymFsTUhhhCGZNul3VL_pUtTDuY14AnA&oe=63B330B8"} alt="tatiana castro" className="w-full md:w-6/12 rounded-lg object-cover"/>
    </div>
  );
}

export default About;
