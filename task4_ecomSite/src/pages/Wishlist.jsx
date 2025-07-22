import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Heading,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { FaTrash, FaShoppingCart, FaStar } from "react-icons/fa";
import JustForYou from "../components/HomePage/JustForYou";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <Box p={6}>
      <Heading size="lg" mb={6}>
        Wishlist ({wishlistItems.length})
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {wishlistItems.map((item, index) => (
          <Box key={index} w="270px" h="auto">
            <Box position="relative" mb={3}>
              {/* Discount Badge */}
              <Box
                position="absolute"
                top={2}
                left={2}
                bg="red.500"
                color="white"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                -{item.discount}
              </Box>

              {/* Product Image */}
              <Image
                src={item.img}
                alt={item.alt}
                h="270px"
                w="100%"
                objectFit="cover"
                bg="gray.100"
                p={4}
                borderRadius="md"
              />

              {/* Delete Icon */}
              <IconButton
                icon={<FaTrash />}
                aria-label="Remove from wishlist"
                size="sm"
                position="absolute"
                top={2}
                right={2}
                bg="white"
                borderRadius="full"
                onClick={() => dispatch(removeFromWishlist({ index }))}
              />

              {/* Add to Cart Button */}
              <Flex
                position="absolute"
                bottom={0}
                left={0}
                w="100%"
                bg="black"
                color="white"
                align="center"
                justify="center"
                h="41px"
                borderBottomRadius="md"
                cursor="pointer"
                onClick={() => dispatch(addToCart(item))}
                gap={2}
              >
                <FaShoppingCart />
                <Text fontSize="sm">Add To Cart</Text>
              </Flex>
            </Box>

            {/* Product Info */}
            <VStack align="start" spacing={1}>
              <Text fontWeight="medium" fontSize="md" color="black">
                {item.name}
              </Text>
              <HStack spacing={4}>
                <Text color="red.500" fontWeight="medium">
                  {item.newPrice}
                </Text>
                <Text
                  textDecoration="line-through"
                  opacity={0.5}
                  fontWeight="medium"
                  color="black"
                >
                  {item.oldPrice}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <FaStar color="gold" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  opacity={0.6}
                  color="black"
                >
                  ({item.ratings})
                </Text>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Divider my={10} />

      <JustForYou />
    </Box>
  );
};

export default Wishlist;
