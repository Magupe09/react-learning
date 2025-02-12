
//import withResults from '../mocks/with-results.json'
//import withoutResults from '../mocks/no-results.json'
import { useMemo } from 'react'
import {searchMovies} from '../services/movies.js'
import { useRef,useState,useCallback } from 'react'


export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const previousSearch = useRef(search)


    const getMovies =useCallback (async (search) => {
        if(search === previousSearch.current) return 

        previousSearch.current=search
       const nuwMovies = await searchMovies({search})
       setMovies(nuwMovies)
    
    },[])
    const sortedMovies=useMemo(()=>{
      //console.log('memosortedMovie')
      return sort
      ? [...movies].sort((a,b)=> a.title.localeCompare(b.title))
      : movies
  
      
    },[sort,movies ])

    return { movies:sortedMovies, getMovies
     }
}
  