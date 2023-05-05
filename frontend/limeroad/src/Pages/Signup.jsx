import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { singUp } from "../Redux/AuthReducer/AuthAction";
import { Link } from "react-router-dom";

const initialState = {
  first_name: "",
  second_name: "",
  email: "",
  gender: "",
  age: "",
  pass: "",
};

export const Signup = () => {
  const toast = useToast();
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(singUp(formState));
    setFormState(initialState);
  };

  const { first_name, second_name, email, gender, age, pass } = formState;

  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Create a new account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}>
            <VStack spacing={4} w="100%">
              <FormControl id="first">
                <FormLabel>First Name</FormLabel>
                <Input
                  rounded="md"
                  type="text"
                  value={first_name}
                  name={"first_name"}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="last">
                <FormLabel>Last Name</FormLabel>
                <Input
                  rounded="md"
                  type="text"
                  value={second_name}
                  name={"second_name"}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  value={email}
                  name={"email"}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="gender">
                <FormLabel>Gender</FormLabel>
                <Select value={gender} name={"gender"} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </Select>
              </FormControl>

              <FormControl id="age">
                <FormLabel>Age</FormLabel>
                <Input
                  rounded="md"
                  type="number"
                  value={age}
                  name="age"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="password" name="pass">
                <FormLabel>Password</FormLabel>
                <Input
                  rounded="md"
                  type="password"
                  name="pass"
                  value={pass}
                  onChange={handleChange}
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md" isRequired>
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={handleSubmit}>
                Register
              </Button>
              <Link to={"/login"}>
                <p>If Signup Already? CLick here !!!</p>
              </Link>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};
