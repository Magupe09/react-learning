
//import withResults from '../mocks/with-results.json'
//import withoutResults from '../mocks/no-results.json'
import {searchMovies} from '../services/movies.js'
import { useRef,useState } from 'react'


export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const previousSearch = useRef(search)


    const getMovies = async () => {
        if(search === previousSearch.current) return 
        previousSearch.current=search
       const nuwMovies = await searchMovies({search})
      setMovies(nuwMovies)
    
    }
    const sortedMovies=sort
     ? [...movies].sort((a,b)=> a.title.localeCompare(b.title))
     : movies

    return { movies:sortedMovies, getMovies
     }
}
  