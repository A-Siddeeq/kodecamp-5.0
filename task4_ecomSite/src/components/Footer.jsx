import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  VStack,
  HStack,
  Image,
  Divider,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import qrcode from "../assets/footer/qrcode.png";
import playstore from "../assets/footer/playstore.png";
import applestore from "../assets/footer/appstore.png";

const Footer = () => {
  return (
    <Box w="100%" bg="black" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align={{ base: "center", md: "flex-start" }}
        py={10}
        px={6}
      >
        {/* Subscribe Section */}
        <VStack align="flex-start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Exclusive
          </Text>
          <Text fontSize="lg" fontWeight="medium">
            Subscribe
          </Text>
          <Text fontSize="md">Get 10% off your first order</Text>
          <HStack spacing={2} w="full">
            <Input
              placeholder="Enter your email"
              variant="outline"
              bg="transparent"
              color="white"
            />
            <IconButton
              aria-label="Send"
              icon={<FiSend />}
              colorScheme="whiteAlpha"
              variant="ghost"
            />
          </HStack>
        </VStack>

        {/* Support Section */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="lg" fontWeight="medium">
            Support
          </Text>
          <Text fontSize="md">
            111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh
          </Text>
          <Text fontSize="md">exclusive@gmail.com</Text>
          <Text fontSize="md">+88015-88888-9999</Text>
        </VStack>

        {/* Account Section */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="medium">
            Account
          </Text>
          {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
            (item, i) => (
              <Text fontSize="md" key={i}>
                {item}
              </Text>
            )
          )}
        </VStack>

        {/* Quick Links Section */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="medium">
            Quick Link
          </Text>
          {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
            (item, i) => (
              <Text fontSize="md" key={i}>
                {item}
              </Text>
            )
          )}
        </VStack>

        {/* Download App Section */}
        <VStack align="center" spacing={3}>
          <Text fontSize="lg" fontWeight="medium">
            Download App
          </Text>
          <Text fontSize="md" textAlign="center">
            Save $3 with App New User Only
          </Text>
          <Flex>
            <Image src={qrcode} alt="QR Code" boxSize="80px" mr={2} />
            <VStack spacing={2}>
              <Image src={playstore} alt="Google play Store" w="100px" />
              <Image src={applestore} alt="Apple Store" w="100px" />
            </VStack>
          </Flex>
          <HStack spacing={4} pt={2}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </HStack>
        </VStack>
      </Flex>

      <Divider borderColor="gray.600" />
      <Flex justify="center" py={4}>
        <Text fontSize="sm" color="gray.400">
          &copy; Copyright Rimel 2022. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
