import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spacer, Box, Text, Button, HStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/users";

function Navbar() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.users);

  console.log("loggediN:", loggedIn);
  const onClickLogout = async () => {
    await dispatch(userLogout());
  };
  return (
    <HStack backgroundColor="teal.100" h="60px" padding="4">
      <Text fontSize="lg" color="teal">
        Appiness Employee dashboard
      </Text>
      <Spacer />
      <Text color="teal">Employee_One@gmail.com</Text>
      <Button onClick={onClickLogout} colorScheme="teal">
        Logout
      </Button>
    </HStack>
  );
}

export default Navbar;
