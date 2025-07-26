import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxW="container.md" py={{ base: 16, md: 24 }}>
      <VStack
        color="black"
        spacing={6}
        justify="center"
        align="center"
        textAlign="center"
      >
        <Heading
          fontFamily="Inter"
          fontWeight="medium"
          fontSize={{ base: "80px", md: "110px" }}
          lineHeight="115px"
        >
          404 Not Found
        </Heading>

        <Text
          fontFamily="Poppins"
          fontWeight="normal"
          fontSize="16px"
          lineHeight="24px"
        >
          Your visited page was not found. You may go back to the homepage.
        </Text>

        <Button
          as={Link}
          to="/"
          bg="#DB4444"
          color="white"
          fontFamily="Poppins"
          fontWeight="medium"
          fontSize="16px"
          lineHeight="24px"
          px="48px"
          py="16px"
          _hover={{ bg: "red.600" }}
        >
          Back to home page
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;
