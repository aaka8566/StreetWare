import React, { useState } from "react";
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/AuthAction";
import { Link,useNavigate,useLocation } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
const navigate=useNavigate();
const location=useLocation();
  const hadleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, pass };
    dispatch(login(userData))
      .then((res) => {
        console.log(res);
        if(location.state==="/cart"){
          navigate(location.state)
        }
        else{
          navigate("/")
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPass("");
  };
console.log(location)
  return (
    <div>
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Stack
          spacing={4}
          maxW={{ base: "20rem", sm: "25rem" }}
          margin="0 auto">
          <Stack align="center" spacing={2}>
            <Heading fontSize={{ base: "xl", sm: "3xl" }}>
              Login in to your account
            </Heading>
            <Text fontSize={{ base: "sm", sm: "md" }}>
              Login here and continue your shopping
            </Text>
          </Stack>
          <Box pos="relative">
            <Box
              pos="absolute"
              top="-7px"
              right="-7px"
              bottom="-7px"
              left="-7px"
              rounded="lg"
              bgGradient="linear(to-l, #7FFF00,#FF0080)"
              transform="rotate(-2deg)"></Box>
            <VStack
              as="form"
              pos="relative"
              spacing={8}
              p={6}
              bg={useColorModeValue("white", "gray.700")}
              rounded="lg"
              boxShadow="lg">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Your email..."
                  rounded="md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="pass">
                <FormLabel>Password</FormLabel>
                <Input
                  type="pass"
                  placeholder="Your pass..."
                  rounded="md"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={hadleSubmit}>
                Login Here
              </Button>
              <Link to={"/signup"}>
                <p>If not signup ? CLick here !!!</p>
              </Link>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
