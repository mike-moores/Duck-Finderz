import { Link } from 'react-router-dom'
import { Card, Image, Grid, GridItem, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { Duck } from '../../models/Ducks'
import { getDuck } from '../apis/api'

export default function Ducks() {
  const {
    data: ducks,
    isLoading,
    error,
  } = useQuery<Duck[]>({ queryKey: ['Ducks'], queryFn: () => getDuck() })

  if (!ducks || isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error fetching Ducks: </p>
  }
  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        height="100vh"
        margin="0 100px 0 100px"
      >
        {ducks.map((d) => (
          <GridItem
            alignContent="center"
            margin="10px auto 10px auto"
            key={d.id}
          >
            <Text fontWeight="bold" textAlign="center">
              {d.name}
            </Text>
            <Link to={`/ducks/${d.id}`}>
              <Card borderColor="#044c34" borderWidth="1px">
                {/* <CardBody> */}
                <Image
                  src={d.image}
                  alt={d.name}
                  width="150px"
                  height="150px"
                ></Image>
                {/* </CardBody> */}
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
