import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import arrowleftfill from "../../assets/arrowleft.svg";
import arrowrightfill from "../../assets/arrowright.svg";
import console from "../../assets/products/console.png";
import keyboard from "../../assets/products/keyboard.png";
import tv from "../../assets/products/tv.png";
import chair from "../../assets/products/chair.png";
import Items from "./Items";

const FlashSales = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box my={12} px={{ base: 4, md: 12 }}>
      <VStack align={{ md: "flex-start" }} spacing={12}>
        <HStack spacing={4}>
          <Box bg="#DB4444" w="20px" h="40px" borderRadius="md" />
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="16px"
            lineHeight="20px"
            color="#DB4444"
          >
            Today's
          </Text>
        </HStack>

        <Flex
          w="full"
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <HStack spacing={6}>
            <Text
              fontFamily="Inter"
              fontWeight="semibold"
              fontSize="36px"
              lineHeight="48px"
              color="black"
            >
              Flash Sales
            </Text>
            <Text>days : hours : mins : secs</Text>
          </HStack>

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

        {/* 🛒 Items Grid */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={6}
          justify={{ md: "flex-start" }}
          align="center"
          wrap="wrap"
        >
          <Items
            img={console}
            alt="Gamepad"
            name="HAVIT HV-G92 Gamepad"
            newPrice="$120"
            oldPrice="$160"
            discount="40%"
            ratings="88"
          />
          <Items
            img={keyboard}
            alt="Keyboard"
            name="AK-900 Wired Keyboard"
            newPrice="$960"
            oldPrice="$1160"
            discount="35%"
            ratings="75"
          />
          <Items
            img={tv}
            alt="TV"
            name="IPS LCD Gaming Monitor"
            newPrice="$370"
            oldPrice="$400"
            discount="30%"
            ratings="99"
          />
          <Items
            img={chair}
            alt="Chair"
            name="S-Series Comfort Chair"
            newPrice="$375"
            oldPrice="$400"
            discount="25%"
            ratings="99"
          />
          <Items
            img={chair}
            alt="Chair"
            name="S-Series Comfort Chair"
            newPrice="$375"
            oldPrice="$400"
            discount="25%"
            ratings="99"
          />
        </Flex>

        {/* 👇 View All Button */}
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
            _hover={{ bg: "red.600" }}
          >
            View All Products
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default FlashSales;
