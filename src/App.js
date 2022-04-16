import {
  Text,
  Grid,
  Card,
  Divider,
  User,
  Spacer,
  Button,
  Row
} from '@nextui-org/react'

const chatacters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
]

function App() {
  return (
    <div>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%'
        }}
        weight='bold'
        align='center'
      >
        Intersection Observer Tutorial
      </Text>
      <Spacer y={1} />
      <Grid.Container gap={2} justify='center'>
        {chatacters.map((character) => {
          return (
            <Grid>
              <Card css={{ mw: '330px' }}>
                <Card.Header>
                  <User
                    bordered
                    color='primary'
                    src={character.image}
                    name={character.name}
                    size='lg'
                  />
                </Card.Header>
                <Divider />
                <Card.Body css={{ py: '$10' }}>
                  <ul>
                    <li>Gener: {character.gender}</li>
                    <li>Species: {character.species}</li>
                    <li>Origin: {character.origin}</li>
                    <li>Location: {character.location}</li>
                  </ul>
                </Card.Body>
                <Divider />
                <Card.Footer>
                  <Row justify='flex-end'>
                    <Button size='sm' light>
                      Status:
                    </Button>
                    <Button size='sm' color='secondary'>
                      {character.status}
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          )
        })}
      </Grid.Container>
    </div>
  )
}

export default App
