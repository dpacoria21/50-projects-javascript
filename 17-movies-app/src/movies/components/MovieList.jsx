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

                {
                    movies.length === 0 ? (
                        <>
                            <h1 className="danger">No se encontraron peliculas con ese nombre</h1>
                        </> 
                    ): ''
                }

            </div>
        
        </>
    )
}