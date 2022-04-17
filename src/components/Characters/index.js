import Character from '../Character'

const Characters = ({ characters }) => {
  return (
    <ul className='character__list'>
      {characters?.map((character) => {
        return <Character {...character} key={character.id} />
      })}
    </ul>
  )
}

export default Characters
