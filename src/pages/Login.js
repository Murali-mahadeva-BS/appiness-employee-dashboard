import React, { useState } from "react";
import {
  Box,
  Stack,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  HStack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../redux/actions/users";

function Login() {
  const [state, setState] = useState({
    showPassword: false,
    email: "",
    password: "",
    emailInvalid: false,
    passwordInvalid: false,
    userInvalid: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  //   const emailFormat = "/^w+([.-_]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  const emailFormat =
    "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
  //   const emailFormat = "/^(?!_)w+([.-]?w+)*@(?!_)w+([.-]?w+)*(.w{2,3})+$/";

  const togglePasswordView = () => {
    setState((prevstate) => ({
      ...prevstate,
      showPassword: !prevstate.showPassword,
    }));
  };
  const onClickReset = () => {
    setState((prevstate) => ({
      email: "",
      password: "",
      emailInvalid: false,
      passwordInvalid: false,
      showPassword: false,
      userInvalid: false,
    }));
  };
  const onClickLogin = async () => {
    const { email, password } = state;
    if (!email.match(emailFormat)) {
      return setState((prevstate) => ({ ...prevstate, emailInvalid: true }));
    } else {
      setState((prevstate) => ({ ...prevstate, emailInvalid: false }));
    }
    if (
      password.length < 6 ||
      password.search(/[a-z]/i) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      return setState((prevstate) => ({ ...prevstate, passwordInvalid: true }));
    } else {
      setState((prevstate) => ({ ...prevstate, passwordInvalid: false }));
    }
    let resp = await dispatch(userLogin({ email, password }));
    if (resp) {
      history.replace("/home");
      console.log("resp from login:", resp);
    } else {
      setState((prevstate) => ({ ...prevstate, userInvalid: true }));
    }
  };
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="teal.200"
    >
      <Box
        w={[, , 500]}
        maxH={[, , 400]}
        borderRadius={10}
        backgroundColor="white"
        boxShadow="lg"
        paddingRight="10"
        paddingLeft="10"
        paddingTop="5"
        paddingBottom="5"
      >
        <Heading textAlign="center" mb="4">
          Login
        </Heading>
        {state.userInvalid ? (
          <Text fontSize="md" mt="4" color="red.400" textAlign="center">
            Either email or password is wrong
          </Text>
        ) : null}
        <Stack spacing={5}>
          <Box>
            <Text mb="1" ml="2">
              Email
            </Text>
            <Input
              variant="filled"
              placeholder="Enter your email"
              errorBorderColor="red.400"
              value={state.email}
              isInvalid={state.emailInvalid}
              onChange={(e) =>
                setState((prevstate) => ({
                  ...prevstate,
                  email: e.target.value,
                }))
              }
            />
            {state.emailInvalid ? (
              <Text fontSize="xs" mt="1" color="red.400">
                Enter a valid email address
              </Text>
            ) : null}
          </Box>
          <Box>
            <Text mb="1" ml="2">
              Password
            </Text>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={state.showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={state.password}
                variant="filled"
                errorBorderColor="red.400"
                isInvalid={state.passwordInvalid}
                onChange={(e) =>
                  setState((prevstate) => ({
                    ...prevstate,
                    password: e.target.value,
                  }))
                }
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label="Search database"
                  icon={state.showPassword ? <FiEye /> : <FiEyeOff />}
                  onClick={togglePasswordView}
                />
              </InputRightElement>
            </InputGroup>
            {state.passwordInvalid ? (
              <Text fontSize="xs" mt="1" color="red.400">
                Must be an Alphanumeric with a length of atleast 6 characters{" "}
              </Text>
            ) : null}
          </Box>
        </Stack>
        <HStack mt="40px">
          <Button colorScheme="teal" onClick={onClickReset}>
            Reset
          </Button>
          <Button colorScheme="teal" onClick={onClickLogin}>
            Login
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Login;
