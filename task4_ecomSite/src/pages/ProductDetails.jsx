// pages/ProductDetails.jsx
import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  VStack,
  Badge,
  Button,
  SimpleGrid,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();
  const toast = useToast();

  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [selectedColor, setSelectedColor] = React.useState("red");
  const [selectedImage, setSelectedImage] = React.useState(product?.img);

  useEffect(() => {
    if (!product) {
      navigate("/");
    } else {
      setSelectedImage(product.img);
    }
  }, [product]);

  if (!product) return null;

  const { img, alt, name, newPrice, oldPrice, discount, ratings } = product;

  const handleBuyNow = () => {
    toast({
      title: "Added to cart!",
      description: "Product added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      px={{ base: 4, md: 16 }}
      py={10}
      direction={{ base: "column", md: "row" }}
      gap={10}
    >
      {/* Images */}
      <Flex direction="row" gap={4}>
        <VStack spacing={4}>
          {[img, img, img, img].map((imgSrc, i) => (
            <Image
              key={i}
              src={imgSrc}
              alt="thumbnail"
              boxSize="60px"
              borderRadius="md"
              cursor="pointer"
              border={
                selectedImage === imgSrc
                  ? "2px solid #DB4444"
                  : "1px solid #E2E8F0"
              }
              onClick={() => setSelectedImage(imgSrc)}
            />
          ))}
        </VStack>
        <Image
          src={selectedImage}
          alt={alt}
          boxSize={{ base: "100%", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>

      {/* Details */}
      <Box flex="1">
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {name}
        </Text>

        <HStack spacing={2} mb={2}>
          {Array(4)
            .fill("")
            .map((_, i) => (
              <FaStar key={i} color="orange" />
            ))}
          <Text fontSize="sm">({ratings} Reviews)</Text>
          <Badge colorScheme="green">In Stock</Badge>
        </HStack>

        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          {newPrice}
        </Text>

        <Text mb={4} maxW="500px" color="gray.600">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal. Pressure
          sensitive.
        </Text>

        {/* Colors */}
        <Box mb={4}>
          <Text fontWeight="medium" mb={2}>
            Colours:
          </Text>
          <HStack>
            <Box
              w="20px"
              h="20px"
              borderRadius="full"
              bg="red"
              border={
                selectedColor === "red" ? "2px solid black" : "1px solid gray"
              }
              cursor="pointer"
              onClick={() => setSelectedColor("red")}
            />
            <Box
              w="20px"
              h="20px"
              borderRadius="full"
              bg="gray.800"
              border={
                selectedColor === "black" ? "2px solid black" : "1px solid gray"
              }
              cursor="pointer"
              onClick={() => setSelectedColor("black")}
            />
          </HStack>
        </Box>

        {/* Sizes */}
        <Box mb={4}>
          <Text fontWeight="medium" mb={2}>
            Size:
          </Text>
          <HStack spacing={2}>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "solid" : "outline"}
                colorScheme={selectedSize === size ? "red" : "gray"}
                size="sm"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </HStack>
        </Box>

        {/* Quantity and Buy */}
        <HStack mb={6} mt={4}>
          <HStack
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            px={2}
          >
            <IconButton
              size="sm"
              icon={<FaMinus />}
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease"
            />
            <Text>{quantity}</Text>
            <IconButton
              size="sm"
              icon={<FaPlus />}
              onClick={() => setQuantity((prev) => prev + 1)}
              aria-label="Increase"
            />
          </HStack>
          <Button colorScheme="red" px={10} onClick={handleBuyNow}>
            Buy Now
          </Button>
        </HStack>

        {/* Delivery Info */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box
            border="1px solid"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
          >
            <Text fontWeight="bold">🚚 Free Delivery</Text>
            <Text fontSize="sm">
              Enter your postal code for delivery availability
            </Text>
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
          >
            <Text fontWeight="bold">↩️ Return Delivery</Text>
            <Text fontSize="sm">Free 30 Days Delivery Returns.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
