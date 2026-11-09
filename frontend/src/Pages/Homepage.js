import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import Login from "../compo/Authentication/Login";
import Signup from "../compo/Authentication/Signup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//This is your Homepage.js file. 
// It creates the application's landing page, 
// where users can either log in or create a new account.
//It also checks whether the user is already logged in 
// and redirects them to the chat page.
const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // ✅ Redirect to /chats only if user is already logged in
    if (userInfo) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW='xl' centerContent>
      <Box
        display="flex"
        justifyContent='center'
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize='4xl' fontFamily="work sans" color="black">
          Talk-A-Tive
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
