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
import { Duck } from '../../models/Ducks'
import { Link } from 'react-router-dom'

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
      <Container marginTop="25px">
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={3}>
            {' '}
            <Center>
              <Heading
                fontFamily="shadows into  light"
                size="3xl"
                marginTop="10px"
                marginBottom="10px"
              >
                Duck Collection!!
              </Heading>
            </Center>
          </GridItem>

          <GridItem colSpan={3}>
            <Box
              bg="#044c34"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="xl"
                fontWeight="bold"
              >
                Common
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Duck) =>
              Duck.rarity == 1 ? (
                <GridItem key={Duck.id} colSpan={1} marginBottom="20px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/${Duck.id}`}>
                      <Card borderColor="#044c34" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      x9
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}
          <GridItem colSpan={3}>
            <Box
              bg="#472273"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="xl"
                fontWeight="bold"
              >
                Rare
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Duck) =>
              Duck.rarity == 2 ? (
                <GridItem key={Duck.id} colSpan={1} marginBottom="20px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/${Duck.id}`}>
                      <Card borderColor="#472273" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      x9
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}
          <GridItem colSpan={3}>
            <Box
              bg="#fcc200"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="xl"
                fontWeight="bold"
              >
                Legendary
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Duck) =>
              Duck.rarity == 3 ? (
                <GridItem key={Duck.id} colSpan={1} marginBottom="20px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/${Duck.id}`}>
                      <Card borderColor="#fcc200" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      x9
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default Ducks
