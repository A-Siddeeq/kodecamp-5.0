import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  Button,
  VStack,
  HStack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.newPrice.replace("$", "")) || 0;
    return acc + price;
  }, 0);

  return (
    <Box px={{ base: 4, md: 6 }} py={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="black">
        Shopping Cart
      </Text>

      {/* ✅ DESKTOP TABLE */}
      <Box display={{ base: "none", md: "block" }}>
        <Table variant="simple" size="md" color="gray.600">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Flex align="center" gap={3} position="relative">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      boxSize="60px"
                      objectFit="cover"
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                    />
                    <Box>
                      <Text fontSize="sm">{item.name}</Text>
                    </Box>
                    <Box position="absolute" top={0} left={0}>
                      <Button
                        size="xs"
                        colorScheme="red"
                        onClick={() => dispatch(removeFromCart({ index }))}
                        borderRadius="full"
                        px={2}
                        h="20px"
                      >
                        <FaTimes fontSize="10px" />
                      </Button>
                    </Box>
                  </Flex>
                </Td>
                <Td>{item.newPrice}</Td>
                <Td>1</Td>
                <Td>{item.newPrice}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* ✅ MOBILE VIEW */}
      <Stack spacing={6} display={{ base: "flex", md: "none" }}>
        {cartItems.map((item, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            shadow="sm"
          >
            <Flex justify="space-between" align="flex-start" gap={4}>
              <Image
                src={item.img}
                alt={item.alt}
                boxSize="60px"
                objectFit="cover"
                bg="white"
                borderRadius="md"
              />
              <VStack align="start" spacing={2} flex="1">
                <Text fontSize="md" fontWeight="medium">
                  {item.name}
                </Text>
                <HStack>
                  <Text color="gray.600">Price:</Text>
                  <Text fontWeight="semibold" color="black">
                    {item.newPrice}
                  </Text>
                </HStack>
                <HStack>
                  <Text color="gray.600">Qty:</Text>
                  <Text color="black">1</Text>
                </HStack>
                <HStack>
                  <Text color="gray.600">Subtotal:</Text>
                  <Text fontWeight="semibold" color="black">
                    {item.newPrice}
                  </Text>
                </HStack>
              </VStack>
              <Button
                size="xs"
                colorScheme="red"
                onClick={() => dispatch(removeFromCart({ index }))}
                borderRadius="full"
              >
                <FaTimes />
              </Button>
            </Flex>
          </Box>
        ))}
      </Stack>

      {/* Buttons */}
      <Flex
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        mt={8}
        gap={4}
      >
        <Button variant="outline" w={{ base: "100%", sm: "auto" }}>
          Return To Shop
        </Button>
        <Button variant="outline" w={{ base: "100%", sm: "auto" }}>
          Update Cart
        </Button>
      </Flex>

      {/* Coupon & Summary */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        mt={10}
        gap={6}
      >
        {/* Coupon Section */}
        <Flex
          gap={2}
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", md: "auto" }}
        >
          <Input placeholder="Coupon code" />
          <Button colorScheme="red" w={{ base: "100%", sm: "auto" }}>
            Apply Coupon
          </Button>
        </Flex>

        {/* Summary Section */}
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
          minW={{ base: "100%", md: "300px" }}
        >
          <Text fontWeight="bold" fontSize="lg" mb={4} color="black">
            Cart Total
          </Text>
          <VStack spacing={3} align="stretch" color="black">
            <HStack justify="space-between">
              <Text>Subtotal</Text>
              <Text>${subtotal.toFixed(2)}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Shipping</Text>
              <Text>$0</Text>
            </HStack>
            <Divider />
            <HStack justify="space-between" fontWeight="bold">
              <Text>Total</Text>
              <Text>${subtotal.toFixed(2)}</Text>
            </HStack>
          </VStack>

          <Button mt={4} colorScheme="red" w="full">
            Proceed to Checkout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
