import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { signupValidationSchema } from "../utils/validations";
import { useAuth } from "../contexts/AuthContext";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Text,
  Image,
  VStack,
  Flex,
  Heading,
  Divider,
  FormControl,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import image from "../assets/authpages/image.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validationSchema = signupValidationSchema;

  const { signup } = useAuth();

  async function handleSubmit(values) {
    try {
      setUserData(values);
      await signup(values.email, values.password);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setGeneralError("User exists, proceed to login");
      } else {
        setGeneralError(error.message || "Signup failed");
      }
      console.error("Signup Error:", error);
    }
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      minH="100vh"
      bg={"white"}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src={image} alt="Signup Visual" w="100%" />
      </Box>

      <Flex
        direction="column"
        w={{ base: "90%", md: "50%" }}
        p={6}
        align="center"
      >
        <Box w="100%" maxW="400px" color={"black"}>
          <Heading mb={4}>Create an account</Heading>
          <Text mb={6}>Enter your details below</Text>

          <Formik
            initialValues={userData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl isInvalid={errors.name && touched.name}>
                    <Field
                      as={Input}
                      name="name"
                      placeholder="Name"
                      type="text"
                      variant="flushed"
                      _placeholder={{ color: "gray.500" }}
                      focusBorderColor="gray.400"
                      color="black"
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email && touched.email}>
                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      placeholder="Email"
                      variant="flushed"
                      _placeholder={{ color: "gray.500" }}
                      focusBorderColor="gray.400"
                      color="black"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.password && touched.password}>
                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder="Password"
                      variant="flushed"
                      _placeholder={{ color: "gray.500" }}
                      focusBorderColor="gray.400"
                      color="black"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  {generalError && (
                    <Text color="red.500" fontSize="sm">
                      {generalError}
                    </Text>
                  )}

                  <Button type="submit" bg="red.500" w="full" color="white">
                    Create Account
                  </Button>

                  <Button
                    leftIcon={<FaGoogle />}
                    variant="outline"
                    w="full"
                    borderColor="gray"
                    color="black"
                  >
                    Sign up with Google
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>

          <Divider my={6} />

          <Text textAlign="center" color={"black"}>
            Already have an account?{" "}
            <Link
              as={RouterLink}
              to="/login"
              color="black"
              _hover={{ textDecoration: "underline" }}
              fontWeight="medium"
            >
              Log in
            </Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignUp;
