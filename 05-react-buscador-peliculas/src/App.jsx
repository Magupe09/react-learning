 import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'



function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }

}

function App() {
  const [sort,setSort]=useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })
  

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4073618146.
  //const debounceGetMovies=useCallback(debounce(search=>{
 //   getMovies({search})
 // },500)
 // ,[]
//)
const lastSearchRef = useRef("");

const debounceGetMovies = useCallback(
  debounce((search) => {
    lastSearchRef.current = search;
    getMovies({ search });
  }, 500),
  []
);
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }
  const handleSort=()=>{
    setSort(!sort)
  }
  const handleChange = (event) => {
    const newSearch= event.target.value
    
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }




  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avegers,Star wars, The Matrix ...' />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
