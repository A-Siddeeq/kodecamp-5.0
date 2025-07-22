import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import arrowleftfill from "../../assets/arrowleft.svg";
import arrowrightfill from "../../assets/arrowright.svg";
import Items from "./Items";

// Product Images
import dogfood from "../../assets/products/dogfood.png";
import camera from "../../assets/products/camera.png";
import laptop from "../../assets/products/laptop.png";
import cream from "../../assets/products/cream.png";

// Reused placeholders for now
import kidscar from "../../assets/products/kidscar.png";
import soccerboots from "../../assets/products/soccerboots.png";
import gp11console from "../../assets/products/gp11console.png";
import jacket from "../../assets/products/jacket.png";

const OurProducts = () => {
  return (
    <Box my={12} px={{ base: 4, md: 12 }}>
      <VStack align="start" spacing={12}>
        {/* Header Label */}
        <Flex align="center" gap={4}>
          <Box bg="#DB4444" h="40px" w="20px" borderRadius="md" />
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="16px"
            lineHeight="20px"
            color="#DB4444"
          >
            Our Products
          </Text>
        </Flex>

        {/* Title & Arrows */}
        <Flex
          justify="space-between"
          w="full"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="36px"
            lineHeight="48px"
            color="black"
          >
            Explore Our Products
          </Text>

          <Flex gap={4}>
            <Flex
              justify="center"
              align="center"
              bg="#F5F5F5"
              w="46px"
              h="46px"
              borderRadius="full"
              cursor="pointer"
            >
              <Image src={arrowleftfill} alt="scroll left" w="16px" />
            </Flex>
            <Flex
              justify="center"
              align="center"
              bg="#F5F5F5"
              w="46px"
              h="46px"
              borderRadius="full"
              cursor="pointer"
            >
              <Image src={arrowrightfill} alt="scroll right" w="16px" />
            </Flex>
          </Flex>
        </Flex>

        {/* Product Grid */}
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          justifyItems="center"
          w="full"
        >
          <Items
            img={dogfood}
            alt="Dog food"
            name="Breed Dry Dog Food"
            newPrice="$100"
            ratings="88"
          />
          <Items
            img={camera}
            alt="Camera"
            name="CANON EOS DSLR Camera"
            newPrice="$360"
            ratings="95"
          />
          <Items
            img={laptop}
            alt="Laptop"
            name="ASUS FHD Gaming Laptop"
            newPrice="$700"
            ratings="325"
          />
          <Items
            img={cream}
            alt="Cream"
            name="Curology Product Set"
            newPrice="$500"
            ratings="145"
          />
          <Items
            img={kidscar}
            alt="Kids Car"
            name="Kids Electric Car"
            newPrice="$960"
            ratings="88"
          />
          <Items
            img={soccerboots}
            alt="Soccer Boots"
            name="Jr. Zoom Soccer Cleats"
            newPrice="$1160"
            ratings="35"
          />
          <Items
            img={gp11console}
            alt="Gamepad"
            name="G11 Shooter USB Gamepad"
            newPrice="$960"
            ratings="55"
          />
          <Items
            img={jacket}
            alt="Jacket"
            name="Quilted Satin Jacket"
            newPrice="$660"
            ratings="55"
          />
        </SimpleGrid>

        {/* CTA Button */}
        <Flex justify="center" w="full">
          <Button
            fontFamily="Poppins"
            fontWeight="medium"
            fontSize="16px"
            lineHeight="24px"
            px="48px"
            py="16px"
            bg="#DB4444"
            color="white"
            borderRadius="md"
            _hover={{ opacity: 0.9 }}
          >
            View All Products
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default OurProducts;
