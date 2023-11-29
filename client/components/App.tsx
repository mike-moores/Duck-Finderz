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

function App() {
  return (
    <>
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
            <GridItem colSpan={1}>
              {' '}
              <Text fontSize="4xl">Login</Text>
            </GridItem>
            <GridItem colSpan={3}>
              <Box bg="tomato" w="100%" p={4} color="white">
                Common
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              <Grid templateColumns="repeat(3, 1fr)">
                <Card>
                  <CardBody>
                    <Image src="/images/pixel-rubber-duck-bubbles.png"></Image>
                  </CardBody>
                </Card>
                <Text>x9</Text>
              </Grid>
            </GridItem>
            <GridItem colSpan={1}>
              <Grid templateColumns="repeat(3, 1fr)">
                <Card>
                  <CardBody>
                    <Image src="/images/pixel-rubber-duck-bubbles.png"></Image>
                  </CardBody>
                </Card>
                <Text>x9</Text>
              </Grid>
            </GridItem>
            <GridItem colSpan={1}>
              <Grid templateColumns="repeat(3, 1fr)">
                <Card>
                  <CardBody>
                    <Image src="/images/pixel-rubber-duck-bubbles.png"></Image>
                  </CardBody>
                </Card>
                <Text>x9</Text>
              </Grid>
            </GridItem>
            <GridItem colSpan={1}>
              <Grid templateColumns="repeat(3, 1fr)">
                <Card>
                  <CardBody>
                    <Image src="/images/pixel-rubber-duck-bubbles.png"></Image>
                  </CardBody>
                </Card>
                <Text>x9</Text>
              </Grid>
            </GridItem>
          </Grid>
          <Text></Text>
        </Container>
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
