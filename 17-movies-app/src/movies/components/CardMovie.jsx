import './CardMovie.css';

export const CardMovie = ({movie}) => {
    return (
        <div className="card">
            <img className='card-img' src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
            <div className="card-information">
                <div className="card-title">{movie.title}</div>
                <div className="card-votes">{movie.vote_average}</div>
            </div>
            <div className="card-overview">
                <p className='card-subtitle'>Overview</p>
                <p className='card-text'>{movie.overview}</p>
            </div>
        </div>
    )
}