import React from "react";
import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";
import laptop from "../../assets/products/laptop.png";
import console from "../../assets/products/console.png";
import tv from "../../assets/products/tv.png";
import keyboard from "../../assets/products/keyboard.png";
import Item from "../../components/HomePage/Items";

const JustForYou = () => {
  return (
    <Box px={{ base: 4, md: 12 }} py={8}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={8} wrap="wrap" gap={4}>
        <Flex align="center" gap={3}>
          <Box bg="red.500" w="4" h="10" borderRadius="md" />
          <Text fontWeight="semibold" fontSize="lg">
            Just For You
          </Text>
        </Flex>
        <Button variant="outline" px={8} py={6} h="50px">
          See All
        </Button>
      </Flex>

      {/* Item Grid */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        justify={{ md: "flex-start" }}
        align="center"
        wrap="wrap"
      >
        <Item
          img={laptop}
          alt="Laptop"
          name="ASUS FHD Gaming Laptop"
          newPrice="$960"
          oldPrice="$1160"
          discount="35%"
          ratings="65"
          index={0}
        />
        <Item
          img={tv}
          alt="Monitor"
          name="IPS LCD Gaming Monitor"
          newPrice="$1160"
          ratings="65"
          index={1}
        />
        <Item
          img={console}
          alt="Gamepad"
          name="HAVIT HV-G92 Gamepad"
          newPrice="$560"
          ratings="65"
          index={2}
        />
        <Item
          img={keyboard}
          alt="Keyboard"
          name="AK-900 Wired Keyboard"
          newPrice="$200"
          ratings="65"
          index={3}
        />
      </Flex>
    </Box>
  );
};

export default JustForYou;
