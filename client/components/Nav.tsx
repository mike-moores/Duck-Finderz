import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import { FcHome } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <Flex
        as="header"
        w="100%"
        alignItems="center"
        gap="2"
        bg="#E4B990"
        marginBottom="10px"
      >
        <Link to={'/'}>
          <Box margin="5px 0 0 5px" p="2">
            <FcHome></FcHome>
          </Box>
        </Link>
        <Spacer />
        <VStack spacing="4px">
          <IfAuthenticated>
            <Container fontSize="xs">
              {user && <p>Signed in as: {user?.nickname}</p>}
            </Container>
            <Button
              variant="ghost"
              colorScheme="gray"
              fontSize="xs"
              color="black"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Button
              margin="5px 10px 0 0"
              variant="ghost"
              colorScheme="gray"
              fontSize="xs"
              color="black"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </IfNotAuthenticated>
        </VStack>
      </Flex>
    </>
  )
}

export default Nav
