import './App.css'
import Card from './Card'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import getCharacters from '../services/getCharacters'

function App() {
  const [characters, setCharacters] = useState([])
  const [cachedCharacters, setCachedCharacters] = useState({})
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const url = 'https://rickandmortyapi.com/api/character?page=' + currentPage

  useEffect(() => {
    if (!cachedCharacters[currentPage]) {
      getCharacters(url).then(data => {
        setCharacters(data.results)
        setCachedCharacters({
          ...cachedCharacters,
          [currentPage]: data.results,
        })
        setTotalPages(data.info.pages)
      })
    }
  }, [url])

  function handleClickBack() {
    setCurrentPage(currentPage - 1)
    if (cachedCharacters[currentPage - 1]) {
      setCharacters(cachedCharacters[currentPage - 1])
    }
  }

  function handleClickForward() {
    setCurrentPage(currentPage + 1)
    if (cachedCharacters[currentPage + 1]) {
      setCharacters(cachedCharacters[currentPage + 1])
    }
  }

  return (
    <div className="App">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClickBack={handleClickBack}
        onClickForward={handleClickForward}
      />
      {characters.map(
        ({ name, species, image, id, gender, status, origin, location }) => (
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
