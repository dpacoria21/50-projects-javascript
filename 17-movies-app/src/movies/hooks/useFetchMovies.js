import { useEffect, useState } from "react"
import { getMoviesByName } from "../helpers/getMoviesByName";

export const useFetchMovies = (name) => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async(name = '') => {
        setMovies(await getMoviesByName(name));
    }

    useEffect(() => {
        searchMovies(name);
    }, [name])

    

    return {
        movies,
        searchMovies,
    }
}