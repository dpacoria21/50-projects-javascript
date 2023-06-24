import { useParams } from "react-router-dom";
import { useFetchMovie } from "../hooks/useFetchMovie";
import './MovieInformationPage.css'

export const MovieInformationPage = () => {

    const {id} = useParams();
    const {movie} = useFetchMovie(id); 
    const generos = movie.genres || [];
    const companies = movie.production_companies || [];
    return (
        <>
        
            <div className="container-movie">
                <div className="movie">
                    <div className="movie-img">
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} className="img" alt={movie.title} />
                    </div>
                    <div className="movie-information">
                        <p className="title">{movie.title}</p>
                        <div className="movie-genres">
                            {generos.map((genero) => (
                            <p className="genero" key={genero.id}>{genero.name}</p> 
                            ))}
                        </div>
                        <div className="extra-information">
                            <p className="extra">{`${movie.release_date}`}</p>
                            <p className="extra">{`${movie.runtime} minutes`}</p>
                        </div>
                        <div className="about-movie">
                            <p className="votes">{movie.status}</p>
                            <p className="votes">{movie.vote_average}</p>
                            <p className="votes">{movie.vote_count}</p>
                        </div>
                        <p className="title">Production Companies</p>
                        <div className="movie-companies">
                            {companies.map((company) => (
                                company?.logo_path 
                                ?  <img className="company-logo" src={`https://image.tmdb.org/t/p/w1280${company.logo_path}`} key={company.id} alt={company.name}/>
                                : ''
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}