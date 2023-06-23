import { useFetchMovies } from "../hooks/useFetchMovies"
import { CardMovie } from "./CardMovie";
import './MovieList.css'

export const MovieList = ({value = ''}) => {

    const {movies, searchMovies} = useFetchMovies();

    searchMovies(value);

    return (
        <>
        
            <div className="container-cards">
                {
                    movies.map((movie) => (
                        <CardMovie key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        
        </>
    )
}