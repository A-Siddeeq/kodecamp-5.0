import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import { setProductDetails } from "../../redux/slices/productSlice";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Items = (props) => {
  const dispatch = useDispatch();
  const { index, img, alt, discount, name, newPrice, oldPrice, ratings } =
    props;

  const handleProductClick = () => {
    dispatch(setProductDetails(props));
  };

  return (
    <Box w="270px" h="auto">
      <Box position="relative" mb={2}>
        <Box
          position="absolute"
          top="8px"
          left="8px"
          bg="red.500"
          color="white"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="xs"
        >
          -{discount}
        </Box>

        <Box
          position="relative"
          role="group"
          overflow="hidden"
          bg="gray.100"
          borderRadius="md"
          h="270px"
        >
          <Link to="/product-details" onClick={handleProductClick}>
            <Image
              src={img}
              alt={alt}
              objectFit="cover"
              w="100%"
              h="100%"
              p={4}
              cursor="pointer"
            />
          </Link>

          <VStack
            position="absolute"
            top="5"
            right="2"
            opacity="0"
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
            spacing={2}
          >
            <IconButton
              icon={<FiHeart />}
              aria-label="Add to wishlist"
              color="black"
              bg="white"
              size="sm"
              borderRadius="full"
              onClick={() => dispatch(addToWishlist({ index, ...props }))}
            />
            <IconButton
              icon={<FaEye />}
              aria-label="View details"
              color="black"
              bg="white"
              size="sm"
              borderRadius="full"
            />
          </VStack>

          <Flex
            position="absolute"
            bottom="0"
            w="100%"
            h="41px"
            bg="black"
            color="white"
            justify="center"
            align="center"
            gap={2}
            borderBottomRadius="md"
            opacity="0"
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
            cursor="pointer"
            onClick={() => dispatch(addToCart({ index, ...props }))}
          >
            <FaShoppingCart />
            <Text fontSize="sm">Add To Cart</Text>
          </Flex>
        </Box>
      </Box>

      <Text fontWeight="medium" color="black" fontSize="md" mb={1}>
        {name}
      </Text>

      <HStack spacing={4} mb={1}>
        <Text fontWeight="medium" color="red.500">
          {newPrice}
        </Text>
        {oldPrice && (
          <Text textDecoration="line-through" opacity={0.5} color="black">
            {oldPrice}
          </Text>
        )}
      </HStack>

      <HStack spacing={1}>
        <FaStar color="gold" size="14" />
        <Text fontSize="sm" fontWeight="semibold" opacity={0.6} color="black">
          ({ratings})
        </Text>
      </HStack>
    </Box>
  );
};

export default Items;
