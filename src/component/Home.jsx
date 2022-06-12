import React from "react";
import { useGlobalContext } from "../context";
import img from "../images/img-1.jpg";
import Animecard from "./Animecard";

const url = "https://api.jikan.moe/v4/anime?q=naruto&sfw";

export default function Home() {

  return (
    <>

    <div className="flex items-center justify-center w-[90vw] h-[91vh] mx-auto">
      <div className="text-4xl text-white font-semibold  py-10 px-14">
        <h1>Get info about your</h1>
        <h1 className="text-blue-400  mt-2">favourite anime</h1>
        <button className="border border-white rounded-md mt-8 px-12 py-1 bg-black text-white font-light text-sm hover:bg-white hover:text-black duration-300 ease-linear ">Let's Go</button>
      </div>
      <div className="">
        <img src={img} alt="banner" className="h-96 w-auto brightness-75 bg-opacity-50 rounded-md" />
      </div>
    </div>
    <Animecard/>
    </>
  );
}
