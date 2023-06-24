import { useState } from 'react';
import { MovieList } from '../components/MovieList';
import { SearchMovie } from '../components/SearchMovie';


export const MoviesPage = () => {

    const [value, setValue] = useState();

    const onSearchMovie = (search = '') => {
        setValue(search);
    }

    return (
        <>
        
            <div className="container">
                <SearchMovie onSearchMovie={onSearchMovie}/>
                <MovieList value={value}/>
            </div>

        </>
    )
}