import './App.css'
import Card from './Card'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

function App() {
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, [...data.results]])
        const nextUrl = data.info.next
        setTotalPages(data.info.pages)
        nextUrl && getAllCharacters(nextUrl)
      })
  }
  console.log(characters)
  return (
    <div className="App">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClickBack={() => setCurrentPage(currentPage - 1)}
        onClickForward={() => setCurrentPage(currentPage + 1)}
      />
      {characters[currentPage - 1] ? (
        characters[
          currentPage - 1
        ].map(
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
        )
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

export default App
