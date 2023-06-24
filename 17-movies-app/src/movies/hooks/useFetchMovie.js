import { useEffect, useState } from "react"
import { getMovieById } from "../helpers/getMovieById";

export const useFetchMovie = (id = '') => {

    const [movie, setMovie] = useState('');

    const searchMovie = async() => {
        setMovie(await getMovieById(id));
    }

    useEffect(() => {
        searchMovie(id);
    }, [id]);

    return {
        movie,
    }
}