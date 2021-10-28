import React from "react";
import Navbar from "../components/Navbar";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import employees from "../employees.json";

function Home() {
  return (
    <Box h="100vh">
      <Navbar />
      <Table variant="simple" mt="5">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th isNumeric>Age</Th>
            <Th>Gender</Th>
            <Th>Email</Th>
            <Th>Mobile</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.users.map((employee) => (
            <Tr key={employee.id}>
              <Td>{employee.id}</Td>
              <Td>{employee.name}</Td>
              <Td isNumeric>{employee.age}</Td>
              <Td>{employee.gender}</Td>
              <Td>{employee.email}</Td>
              <Td>{employee.phoneNo}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Home;
