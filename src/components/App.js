import './App.css'
import { useEffect, useState } from 'react'
import Card from './Card'
import getCharacters from '../services/getCharacters'
import Pagination from './Pagination'

function App() {
  const [characters, setCharacters] = useState([])
  const [cachedPages, setCachedPages] = useState({})
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const url = 'https://rickandmortyapi.com/api/character?page=' + currentPage

  useEffect(() => {
    if (cachedPages[currentPage]) {
      setCharacters(cachedPages[currentPage])
    } else {
      getCharacters(url).then(data => {
        setCharacters(data.results)
        setCachedPages({
          ...cachedPages,
          [currentPage]: data.results,
        })
        setTotalPages(data.info.pages)
      })
    }
  }, [url])

  function showPreviousPage() {
    setCurrentPage(currentPage - 1)
    setCharacters(cachedPages[currentPage - 1])
  }

  function showNextPage() {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="App">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={showPreviousPage}
        onNext={showNextPage}
      />
      {characters.map(
        ({ id, name, species, gender, image, status, origin, location }) => (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}

export default App
