import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import arrowleftfill from "../../assets/arrowleft.svg";
import arrowrightfill from "../../assets/arrowright.svg";

// Images
import phone from "../../assets/HomePage/categories/phones.svg";
import computer from "../../assets/HomePage/categories/computers.svg";
import smartwatch from "../../assets/HomePage/categories/smartwatches.svg";
import camera from "../../assets/HomePage/categories/cameras.svg";
import headphone from "../../assets/HomePage/categories/headphones.svg";
import gaming from "../../assets/HomePage/categories/gaming.svg";

const categories = [
  { label: "Phones", img: phone },
  { label: "Computers", img: computer },
  { label: "SmartWatch", img: smartwatch },
  { label: "Camera", img: camera },
  { label: "HeadPhones", img: headphone },
  { label: "Gaming", img: gaming },
];

const Categories = () => {
  return (
    <Box my={12} px={{ base: 4, md: 12 }}>
      <VStack spacing={12} align="start">
        {/* Tag */}
        <HStack spacing={4}>
          <Box bg="#DB4444" h="40px" w="20px" borderRadius="md" />
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="16px"
            color="#DB4444"
          >
            Today's
          </Text>
        </HStack>

        {/* Header + Arrows */}
        <Flex
          justify="space-between"
          align="center"
          w="full"
          direction={{ base: "column", md: "row" }}
        >
          <Heading
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="36px"
            lineHeight="48px"
            color="black"
          >
            Browse By Category
          </Heading>

          <HStack spacing={4}>
            <IconButton
              icon={<Image src={arrowleftfill} w="16px" />}
              aria-label="Scroll Left"
              bg="#F5F5F5"
              rounded="full"
              w="46px"
              h="46px"
            />
            <IconButton
              icon={<Image src={arrowrightfill} w="16px" />}
              aria-label="Scroll Right"
              bg="#F5F5F5"
              rounded="full"
              w="46px"
              h="46px"
            />
          </HStack>
        </Flex>

        {/* Category Grid */}
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 6 }}
          spacing={4}
          justifyItems="center"
          w="full"
        >
          {categories.map((item, index) => (
            <VStack
              key={index}
              bg="transparent"
              border="1px"
              borderColor="black"
              borderRadius="md"
              w="170px"
              h="145px"
              justify="center"
              _hover={{ bg: "#DB4444", color: "white" }}
              cursor="pointer"
            >
              <Image src={item.img} alt={item.label} boxSize="56px" />
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="normal"
                lineHeight="24px"
                color="black"
                _hover={{ color: "white" }}
              >
                {item.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Categories;
