import { useQuery } from '@tanstack/react-query'
import { getDuck } from '../apis/api'
import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'

interface Duck {
  id: number
  image: string
  name: string
}

const Ducks = () => {
  const {
    data: Ducks,
    isLoading,
    error,
  } = useQuery<Duck[]>({ queryKey: ['Ducks'], queryFn: getDuck })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error fetching Ducks: </p>
  }

  return (
    <div>
      <header className="header">
        <Container bgColor="grey">
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={3}>
              {' '}
              <Center>
                <Heading size="3xl">Duck Collection!!</Heading>
              </Center>
            </GridItem>
            <GridItem colSpan={2}>
              {' '}
              <Text fontSize="4xl">New Duck</Text>
            </GridItem>

            <GridItem colSpan={3}>
              <Box bg="tomato" w="100%" p={4} color="white">
                Common
              </Box>
            </GridItem>

            {Ducks ? (
              Ducks.map((Duck: Duck) => (
                <GridItem key={Duck.id} colSpan={1}>
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Card>
                      {/* <CardBody> */}
                      <Image src={Duck.image} alt={Duck.name}></Image>
                      {/* </CardBody> */}
                    </Card>
                    <Text>x9</Text>
                  </Grid>
                </GridItem>
              ))
            ) : (
              <p>No Ducks available</p>
            )}
          </Grid>
          <Text></Text>
        </Container>
      </header>
      <section className="main">{/* add your code here */}</section>
    </div>
  )
}

export default Ducks
