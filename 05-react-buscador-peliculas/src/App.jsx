import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {

  const { movies: mappeMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas </h1>
        <form className='form'>
          <input placeholder='Avegers,Star wars, The Matrix ...' />
          <button type='submit'>Buscar </button>
        </form>
      </header>
      <main>
        <Movies movies={mappeMovies} />
      </main>
    </div>
  )
}

export default App
