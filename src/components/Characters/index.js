import { Grid } from '@nextui-org/react'
import Character from '../Character'

const Characters = ({ characters }) => {
  return (
    <Grid.Container gap={2} justify='center'>
      {characters?.map((character) => {
        return <Character {...character} />
      })}
    </Grid.Container>
  )
}

export default Characters
