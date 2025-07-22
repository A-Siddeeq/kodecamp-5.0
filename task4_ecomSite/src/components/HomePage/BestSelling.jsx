import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Items from "./Items";

import bookshelf from "../../assets/products/bookshelf.png";
import cpucooler from "../../assets/products/cpucooler.png";
import bag from "../../assets/products/guccibag.png";
import coat from "../../assets/products/coat.png";

const BestSelling = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box my={12} px={{ base: 4, md: 12 }}>
      <VStack align={{ md: "start" }} spacing={12}>
        {/* Heading Label */}
        <Flex align="center" gap={4}>
          <Box bg="#DB4444" h="40px" w="20px" borderRadius="md" />
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="16px"
            lineHeight="20px"
            color="#DB4444"
          >
            This Month
          </Text>
        </Flex>

        {/* Title and Button */}
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          w="full"
          gap={4}
        >
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="36px"
            color="black"
            lineHeight="48px"
          >
            Best Selling Products
          </Text>

          <Button
            fontFamily="Poppins"
            fontWeight="medium"
            fontSize="16px"
            lineHeight="24px"
            bg="#DB4444"
            color="white"
            w="160px"
            h="50px"
            borderRadius="md"
            _hover={{ opacity: 0.9 }}
          >
            View All
          </Button>
        </Flex>

        {/* Product Itemss */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={4}
          align="center"
          justify="flex-start"
          flexWrap="wrap"
        >
          <Items
            img={coat}
            alt="coat"
            name="The north coat"
            newPrice="$250"
            oldPrice="$360"
            ratings="65"
          />
          <Items
            img={bag}
            alt="Gucci bag"
            name="Gucci duffle bag"
            newPrice="$960"
            oldPrice="$1160"
            ratings="65"
          />
          <Items
            img={cpucooler}
            alt="CPU Cooler"
            name="RGB liquid CPU Cooler"
            newPrice="$160"
            oldPrice="$170"
            discount="40%"
            ratings="65"
          />
          <Items
            img={bookshelf}
            alt="Book shelf"
            name="Small BookShelf"
            newPrice="$360"
            ratings="65"
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default BestSelling;
