import { useState, useEffect, useRef, useCallback } from 'react'
import useVisible from './hooks/useVisible'
import { Text, Spacer } from '@nextui-org/react'
import getCaracters from './getCharacters'
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  //IO
  const visorRef = useRef(null)
  const { visible } = useVisible({ visorRef })

  const changePage = useCallback(() => setPage((prev) => prev + 1), [])

  useEffect(() => {
    if (visible) {
      changePage()
    }
  }, [visible, changePage])

  const gettingCharacters = async ({ page }) => {
    const results = await getCaracters({ page })
    setCharacters((prev) => prev.concat(results))
  }

  useEffect(() => {
    gettingCharacters({ page })
  }, [page])

  return (
    <div>
      <Spacer y={1} />
      <Text
        h1
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%'
        }}
        weight='bold'
        align='center'
      >
        Intersection Observer Tutorial
      </Text>
      <Spacer y={1} />
      <Characters characters={characters} />
      <div ref={visorRef}></div>
    </div>
  )
}

export default App
