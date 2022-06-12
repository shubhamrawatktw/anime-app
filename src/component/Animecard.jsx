import React from "react";
import { useGlobalContext } from "../context";
import img from "../images/img-1.jpg";

export default function Animecard() {
  const { anime, isLoading } = useGlobalContext();
  console.log(anime);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="text-white w-[90vw] mx-auto ">
      <h2 className="text-4xl mb-2 pl-28 tracking-wider">Top Animes</h2>
      <div className="flex flex-wrap justify-evenly pb-14 pt-5">

      {anime.map((item) => {
        const {
          title_english: name,
          mal_id: id,
          url,
          status,
          rating,
          images: {
            jpg: { image_url: image },
          },
          synopsis: info,
        } = item;
        

      return  <div key={id} className="my-8 border border-x-white hover:scale-110 rounded-sm mx-3 h-80 w-60 relative">
          <img src={image} alt={name} className="object-cover h-[100%] w-[100%]"/>
          <h3 className="">{name}</h3>
        </div>;
        
      })}
      </div>
    </section>
  );
}
