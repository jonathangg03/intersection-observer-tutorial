const Character = ({ image, name, gender, species, origin, location }) => {
  return (
    <li className='character'>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <ul className='character__info'>
          <li>Gender: {gender}</li>
          <li>Species: {species}</li>
          <li>Origin: {origin.name}</li>
          <li>Location: {location.name}</li>
        </ul>
      </div>
    </li>
  )
}

export default Character
