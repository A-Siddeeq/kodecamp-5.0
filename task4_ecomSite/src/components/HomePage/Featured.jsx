import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import psconsole from "../../assets/HomePage/featured/psconsole.png";
import woman from "../../assets/HomePage/featured/woman.png";
import speaker from "../../assets/HomePage/featured/speaker.png";
import perfume from "../../assets/HomePage/featured/perfume.png";

const Featured = () => {
  return (
    <Box my={12} px={{ base: 4, md: 12 }}>
      <VStack align="start" spacing={10}>
        {/* Section Label */}
        <Flex align="center" gap={4}>
          <Box bg="#DB4444" w="20px" h="40px" borderRadius="md" />
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="16px"
            lineHeight="20px"
            color="#DB4444"
          >
            Featured
          </Text>
        </Flex>

        {/* Heading */}
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="36px"
          lineHeight="48px"
          color="black"
        >
          New Arrival
        </Text>

        {/* Grid Layout */}
        <Flex direction={{ base: "column", md: "row" }} gap={4} my={4}>
          {/* Left Large Image */}
          <Box
            position="relative"
            w={{ base: "100%", md: "50%" }}
            h={{ md: "600px" }}
            bg="black"
          >
            <Image src={psconsole} alt="psconsole" h="100%" objectFit="cover" />
            <VStack
              position="absolute"
              bottom={0}
              align="start"
              spacing={2}
              pl={6}
              pb={4}
              color="white"
            >
              <Text fontFamily="Inter" fontWeight="semibold" fontSize="24px">
                PlayStation 5
              </Text>
              <Text fontFamily="Poppins" fontSize="14px" lineHeight="21px">
                Black and White version of the psconsole <br /> coming out on
                sale
              </Text>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="medium"
                lineHeight="24px"
                textDecor="underline"
              >
                Shop Now
              </Text>
            </VStack>
          </Box>

          {/* Right Grid */}
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
            w={{ base: "100%", md: "50%" }}
            h="600px"
          >
            {/* Top Large Box */}
            <GridItem colSpan={2} rowSpan={1} position="relative" bg="black">
              <Image src={woman} alt="woman" h="100%" objectFit="cover" />
              <VStack
                position="absolute"
                bottom={0}
                align="start"
                spacing={2}
                px="6"
                py="4"
                color="white"
              >
                <Text fontFamily="Inter" fontWeight="semibold" fontSize="24px">
                  Women's Collections
                </Text>
                <Text fontFamily="Poppins" fontSize="14px" lineHeight="21px">
                  Featured woman collections that <br /> give you another vibe.
                </Text>
                <Text
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="medium"
                  lineHeight="24px"
                  textDecor="underline"
                >
                  Shop Now
                </Text>
              </VStack>
            </GridItem>

            {/* Bottom Left */}
            <GridItem position="relative" bg="black">
              <Image src={speaker} alt="speaker" h="100%" objectFit="cover" />
              <VStack
                position="absolute"
                bottom={0}
                align="start"
                spacing={2}
                px="6"
                py="4"
                color="white"
              >
                <Text fontFamily="Inter" fontWeight="semibold" fontSize="24px">
                  Speakers
                </Text>
                <Text fontFamily="Poppins" fontSize="14px" lineHeight="21px">
                  Amazon wireless speakers
                </Text>
                <Text
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="medium"
                  lineHeight="24px"
                  textDecor="underline"
                >
                  Shop Now
                </Text>
              </VStack>
            </GridItem>

            {/* Bottom Right */}
            <GridItem position="relative" bg="black">
              <Image src={perfume} alt="perfume" objectFit="cover" />
              <VStack
                position="absolute"
                bottom={0}
                align="start"
                spacing={2}
                px="6"
                py="4"
                color="white"
              >
                <Text fontFamily="Inter" fontWeight="semibold" fontSize="24px">
                  Perfume
                </Text>
                <Text fontFamily="Poppins" fontSize="14px" lineHeight="21px">
                  GUCCI INTENSE OUD EDP
                </Text>
                <Text
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="medium"
                  lineHeight="24px"
                  textDecor="underline"
                >
                  Shop Now
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Featured;
