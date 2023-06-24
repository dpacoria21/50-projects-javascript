export const getMovieById = async(id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1b126a5c61718420c35fa198dc7f0a64`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}