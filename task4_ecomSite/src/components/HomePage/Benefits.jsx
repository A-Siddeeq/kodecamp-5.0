import React from "react";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import delivery from "../../assets/HomePage/featured/delivery.svg";
import customerservice from "../../assets/HomePage/featured/headphone.svg";
import shield from "../../assets/HomePage/featured/shield.svg";

const BenefitItem = ({ icon, title, description }) => (
  <VStack spacing={2} align="center" textAlign="center">
    <Flex
      align="center"
      justify="center"
      bg="gray.200"
      borderRadius="full"
      p={2}
      mb={2}
    >
      <Image
        src={icon}
        alt={title}
        boxSize="40px"
        p={1}
        borderRadius="full"
        bg="black"
      />
    </Flex>
    <Text
      fontFamily="Poppins"
      fontWeight="semibold"
      fontSize="20px"
      lineHeight="28px"
      color="black"
    >
      {title}
    </Text>
    <Text fontFamily="Poppins" fontSize="14px" lineHeight="21px" color="black">
      {description}
    </Text>
  </VStack>
);

const Benefits = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-around"
      align="center"
      px={12}
      my={8}
      gap={8}
      textAlign="center"
    >
      <BenefitItem
        icon={delivery}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <BenefitItem
        icon={customerservice}
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
      />
      <BenefitItem
        icon={shield}
        title="MONEY BACK GUARANTEE"
        description="We return money within 30 days"
      />
    </Flex>
  );
};

export default Benefits;
