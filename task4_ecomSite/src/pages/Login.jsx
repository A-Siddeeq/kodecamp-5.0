import React, { useState } from "react";
import { loginValidationSchema } from "../utils/validations";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useAuth } from "../contexts/AuthContext";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import image from "../assets/authpages/image.png";

const Login = () => {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState("");
  const { login } = useAuth();
  const validationSchema = loginValidationSchema;

  const handleSubmit = async (values, actions) => {
    try {
      await login(values.email, values.password);
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setGeneralError("Invalid email or password");
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        minH="80vh"
        align="center"
        justify="center"
        bg="white"
      >
        {/* Left Image */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={image} alt="Login" w="100%" />
        </Box>

        {/* Form Section */}
        <Box w={{ base: "100%", md: "50%" }} px={6} py={10}>
          <Box maxW="350px" mx="auto" textAlign="left">
            <Text fontSize="2xl" fontWeight="semibold" mb={2} color="black">
              Log in to Exclusive
            </Text>
            <Text fontSize="md" mb={6} color="black">
              Enter your details below
            </Text>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <VStack spacing={4} align="stretch">
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email or Phone Number"
                            variant="flushed"
                            _placeholder={{ color: "gray.500" }}
                            focusBorderColor="gray.400"
                            color="black"
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <Input
                            {...field}
                            type="password"
                            placeholder="Password"
                            variant="flushed"
                            _placeholder={{ color: "gray.500" }}
                            focusBorderColor="gray.400"
                            color="black"
                          />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    {generalError && (
                      <Text color="red.500" fontSize="sm">
                        {generalError}
                      </Text>
                    )}

                    <Flex justify="space-between" align="center">
                      <Button
                        type="submit"
                        bg="red.500"
                        _focus={{ bg: "red.600" }}
                        color="white"
                        px={6}
                        py={2}
                        isLoading={isSubmitting}
                      >
                        Log in
                      </Button>
                      <Text fontSize="sm" color="red.500" cursor="pointer">
                        Forgot Password?
                      </Text>
                    </Flex>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
