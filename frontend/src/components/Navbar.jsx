import { Box, Flex, Button, Heading, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box bg="blue.500" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" alignItems="center">
        <Heading size="md" color="white" cursor="pointer" onClick={() => navigate('/')}>
          Todo App
        </Heading>
        <Spacer />
        {user ? (
          <Flex gap={4} alignItems="center">
            <Box color="white">{user.name}</Box>
            <Button colorScheme="whiteAlpha" onClick={handleLogout}>
              Logout
            </Button>
          </Flex>
        ) : (
          <Flex gap={4}>
            <Button colorScheme="whiteAlpha" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button colorScheme="whiteAlpha" variant="outline" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};