import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {

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

  const { movies: mappeMovies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avegers,Star wars, The Matrix ...' />
          <button type='submit'>Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </header>
      <main>
        <Movies movies={mappeMovies} />
      </main>
    </div >
  )
}

export default App
