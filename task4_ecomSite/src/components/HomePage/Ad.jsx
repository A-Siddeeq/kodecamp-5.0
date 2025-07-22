import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import ad from "../../assets/HomePage/ad/image.png";

const countdownData = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];

const Ad = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      justify="space-around"
      bg="black"
      mx={{ base: 4, md: 12 }}
      borderRadius="md"
      my={12}
      px={6}
      py={8}
      gap={8}
    >
      {/* Text Content */}
      <VStack align="start" spacing={6}>
        <Text
          fontFamily="Poppins"
          fontWeight="semibold"
          fontSize="16px"
          lineHeight="20px"
          color="#00FF66"
        >
          Categories
        </Text>

        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize={{ base: "36px", md: "48px" }}
          lineHeight="60px"
          color="#FAFAFA"
        >
          Enhance Your <br /> Music Experience
        </Text>

        <HStack spacing={2} flexWrap="wrap">
          {countdownData.map((item, index) => (
            <VStack
              key={index}
              justify="center"
              align="center"
              w="62px"
              h="62px"
              bg="white"
              borderRadius="full"
            >
              <Text
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="16px"
                lineHeight="20px"
                color="black"
              >
                {item.value}
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="normal"
                fontSize="11px"
                lineHeight="18px"
                color="black"
              >
                {item.label}
              </Text>
            </VStack>
          ))}
        </HStack>

        <Button
          bg="#00FF66"
          color="#FAFAFA"
          fontFamily="Poppins"
          fontWeight="medium"
          fontSize="16px"
          lineHeight="24px"
          py={4}
          px={8}
          borderRadius="md"
          w="170px"
          _hover={{ opacity: 0.9 }}
        >
          Buy Now!
        </Button>
      </VStack>

      {/* Ad Image */}
      <Box>
        <Image src={ad} alt="Ad" w={{ base: "100%", md: "600px" }} />
      </Box>
    </Flex>
  );
};

export default Ad;
