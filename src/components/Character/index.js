import { Grid, Card, Divider, User, Button, Row } from '@nextui-org/react'

const Character = ({
  image,
  name,
  gender,
  species,
  origin,
  location,
  status
}) => {
  return (
    <Grid>
      <Card css={{ mw: '330px' }}>
        <Card.Header>
          <User bordered color='primary' src={image} name={name} size='lg' />
        </Card.Header>
        <Divider />
        <Card.Body css={{ py: '$10' }}>
          <ul>
            <li>Gener: {gender}</li>
            <li>Species: {species}</li>
            <li>Origin: {origin.name}</li>
            <li>Location: {location.name}</li>
          </ul>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row justify='flex-end'>
            <Button size='sm' light>
              Status:
            </Button>
            <Button
              size='sm'
              color={
                status === 'Alive'
                  ? 'success'
                  : status === 'Dead'
                  ? 'error'
                  : 'primary'
              }
            >
              {status}
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default Character
