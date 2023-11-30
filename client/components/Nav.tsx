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
        bg="white"
        marginBottom="10px"
      >
        <Box p="2">
          <Heading size="md">Duck Finderz</Heading>
        </Box>
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
            <button onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
        </VStack>
      </Flex>
      <Divider></Divider>
    </>
  )
}

export default Nav
