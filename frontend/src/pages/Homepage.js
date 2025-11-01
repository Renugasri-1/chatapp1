import React from 'react'
import { useEffect } from "react";
//import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from '../components/Authentication/SignUp';

const Homepage = () => {
    //const history = useHistory();
    const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
        <Box
         display="flex"
         justifyContent="center"
         p={3}
         bg="white"
         w="100%"
         m="40px 0 15px 0"
         borderRadius="lg"
         borderWidth="1px"
        >

        <Text fontSize="4xl" fontFamily="Work sans" textAlign="Center">
            Talk-A-Tive
        </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
           <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
              </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>

    </Container>
  );
}

export default Homepage