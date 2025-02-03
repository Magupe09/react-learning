
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies() {
    const movies = withResults.Search
    const mappeMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    return { movies: mappeMovies }
}
