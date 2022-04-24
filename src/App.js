import getCharacters from './getCharacters'
import { useState, useEffect, useRef, useCallback } from 'react'
import Characters from './components/Characters'
import useVisible from './hooks/useVisible'

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const visorRef = useRef()
  const { visible } = useVisible({ visorRef })

  const changePage = useCallback(() => setPage((prev) => prev + 1), [])

  useEffect(() => {
    if (visible) {
      changePage()
    }
  }, [visible, changePage])

  const gettingCharacters = async ({ page }) => {
    const results = await getCharacters({ page })
    setCharacters((prev) => prev.concat(results))
  }

  useEffect(() => {
    gettingCharacters({ page })
  }, [page])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Prueba de intersection observer</h1>
      </header>
      <Characters characters={characters} />
      <div className='visor' ref={visorRef}></div>
    </div>
  )
}

export default App
