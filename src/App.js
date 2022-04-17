import Characters from './components/Characters'
const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 3,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 4,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 5,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 6,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 7,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  },
  {
    id: 8,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: {
      name: 'Citadel of Ricks'
    },
    location: {
      name: 'Citadel of Ricks'
    }
  }
]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Prueba de intersection observer</h1>
      </header>
      <Characters characters={characters} />
      <div className='visor'></div>
    </div>
  )
}

export default App
