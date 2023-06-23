import { useState } from "react"
import { getMoviesByName } from "../helpers/getMoviesByName";

export const useFetchMovies = () => {

    const [movies, setMovies] = useState([]);
    
    const searchMovies = async(name = '') => {
        setMovies(await getMoviesByName(name));
    }
    

    return {
        movies,
        searchMovies,
    }
}