export const getMoviesByName = async (name = '') => {

    let url;
    if(name === '') {
        url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1b126a5c61718420c35fa198dc7f0a64';
    }else {
        url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1&api_key=1b126a5c61718420c35fa198dc7f0a64`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return [...data.results];
}