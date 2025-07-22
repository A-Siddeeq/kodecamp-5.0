import React from "react";
import { Box, Flex, VStack, HStack, Image, Text } from "@chakra-ui/react";
import heroframe from "../../assets/HomePage/HeroSection/heroframe.png";
import more from "../../assets/more.svg";

const HeroSection = () => {
  return (
    <Box my={12} px={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
        pr={{ xl: 36 }}
      >
        {/* Sidebar menu */}
        <VStack
          align="start"
          spacing={3}
          w={{ base: "100%", md: "200px" }}
          borderRight={{ base: "none", md: "2px solid" }}
          borderColor="gray.200"
          color="black"
        >
          {[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((label, item) => (
            <HStack key={item} spacing={4} h="100%">
              <Text fontSize="16px" fontFamily="Poppins">
                {label}
              </Text>
              {label.includes("Fashion") && <Image src={more} alt="arrow" />}
            </HStack>
          ))}
        </VStack>

        {/* Hero banner */}
        <Box w="100%">
          <Flex bg="black" color="white" borderRadius="md" overflow="hidden">
            <Image src={heroframe} alt="Hero" objectFit="contain" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
