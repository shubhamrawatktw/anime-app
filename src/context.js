import React from "react";
import { useEffect } from "react";
import { useContext,useState} from "react";

const url = "https://api.jikan.moe/v4/top/anime"
const AppContext = React.createContext()

const AppProvider = ({children})=>{

  const [query,setQuery] = useState("naruto")
  const [anime,setAnime] = useState([])
 const [isLoading,setIsLoading] = useState(true)

  const fetchTopAnime = async (url)=>{
    setIsLoading(true)
    try {
        const res= await fetch(url)
        const data = await res.json()
        setAnime(data.data)

        setIsLoading(false)
    } catch (error) {
        console.log(error);
    }
       
  }

  useEffect(()=>{
    fetchTopAnime(url)
  },[url])


return <AppContext.Provider value={{
query,setQuery,anime,setAnime,isLoading
}}>
    {children}
</AppContext.Provider>

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext , AppProvider}