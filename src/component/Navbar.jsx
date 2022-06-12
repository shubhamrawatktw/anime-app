import React from "react";
import { useGlobalContext } from "../context";
import { BsSearch } from "react-icons/bs";
// const url = "https://api.jikan.moe/v4/anime?q=naruto&sfw"
const url = "https://api.jikan.moe/v4/anime";

export default function Navbar() {
  const { query, setQuery, setAnime } = useGlobalContext();

  const fetchAnime = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setAnime(data.data);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAnime(`${url}?q=${query}&sfw`);
    // setQuery("")
  };

  // console.log(anime);

  return (
    <div className="flex text-lg text-white items-center justify-between border border-black shadow-md bg-black h-14 px-6 font-normal tracking-wider sticky">
      <h2 className="hover:text-gray-100 cursor-pointer  transition-colors duration-100 text-2xl">
        Anime
      </h2>
      <form
        className=" border border-black relative rounded-md p-1 focus:ring-offset-transparent "
        onSubmit={handleSubmit}
      >
        <input
          className="text-black px-2 rounded-md pb-1 w-96 focus:outline-none "
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          <BsSearch className="absolute top-3 right-3 " />
        </button>
      </form>
      <nav className="">
        <ul className="flex space-x-6">
          <li className="hover:text-gray-100 cursor-pointer transition-colors duration-100">
            Home
          </li>
          <li className="hover:text-gray-100 cursor-pointer transition-colors duration-100">
            About
          </li>
          <li className="hover:text-gray-100 cursor-pointer transition-colors duration-100">
            Anime
          </li>
          <li className="hover:text-gray-100 cursor-pointer transition-colors duration-100">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
