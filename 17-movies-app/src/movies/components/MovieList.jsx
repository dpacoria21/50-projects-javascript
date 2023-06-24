import { Link } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { CardMovie } from "./CardMovie";
import './MovieList.css';

export const MovieList = ({value = ''}) => {

    const {movies} = useFetchMovies(value);

    return (
        <>
        
            <div className="container-cards">
                {
                    movies.map((movie) => (
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                        </Link>
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