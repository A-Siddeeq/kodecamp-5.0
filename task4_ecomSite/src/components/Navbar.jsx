import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Box,
  Flex,
  Text,
  Select,
  Input,
  IconButton,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // 👈 Get the currentUser
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  const cartItems = useSelector((state) => state.cart.cart);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  return (
    <Box borderBottom="2px solid" borderColor="gray.200" bg={"white"}>
      {/* Top Announcement Bar */}
      <Flex
        justify="center"
        align="center"
        bg="black"
        color="white"
        px={4}
        py={2}
        gap={4}
        fontSize="sm"
      >
        <Text>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Text>
        <Text fontWeight="semibold" textDecoration="underline" cursor="pointer">
          Shop Now
        </Text>
        <Select variant="unstyled" maxW="100px" color="white">
          <option value="Eng">English</option>
        </Select>
      </Flex>

      {/* Main Navbar */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        color={"black"}
        py={6}
        px={4}
        gap={4}
      >
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold" fontFamily="Inter">
          Exclusive
        </Text>

        {/* Navbar Links */}
        <Flex as="ul" gap={6} listStyleType="none">
          <Link to="/">
            <Text
              fontSize="md"
              _hover={{ borderBottom: "2px solid", cursor: "pointer" }}
            >
              Home
            </Text>
          </Link>
          <Text
            fontSize="md"
            _hover={{ borderBottom: "2px solid", cursor: "pointer" }}
          >
            Contact
          </Text>
          <Text
            fontSize="md"
            _hover={{ borderBottom: "2px solid", cursor: "pointer" }}
          >
            About
          </Text>
          <Link to="/signup">
            <Text
              fontSize="md"
              _hover={{ borderBottom: "2px solid", cursor: "pointer" }}
            >
              Sign Up
            </Text>
          </Link>
        </Flex>

        {/* Search and Icons */}
        <Flex align="center" gap={4}>
          {/* Search Input */}
          <Box position="relative">
            <Input
              placeholder="What are you looking for?"
              bg="gray.200"
              _placeholder={{ color: "gray.500" }}
              pr="40px"
              w={{ base: "200px", xl: "250px" }}
              h="38px"
              borderRadius="md"
            />
            <IconButton
              icon={<FiSearch />}
              position="absolute"
              right="5px"
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              aria-label="Search"
              variant="ghost"
              color={"gray.500"}
            />
          </Box>

          {/* Wishlist */}
          <Link to="/wishlist">
            <Box position="relative">
              <IconButton
                icon={<AiOutlineHeart />}
                aria-label="Wishlist"
                variant="ghost"
                fontSize="24px"
                color={"black"}
                _hover={{ bg: "#DB4444", color: "white", borderRadius: "full" }}
              />
              {wishlistItems.length > 0 && (
                <Badge
                  position="absolute"
                  top="-1"
                  right="-1"
                  bg="#DB4444"
                  color="white"
                  fontSize="xs"
                  borderRadius="full"
                  px={1}
                >
                  {wishlistItems.length}
                </Badge>
              )}
            </Box>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <Box position="relative">
              <IconButton
                icon={<AiOutlineShoppingCart />}
                aria-label="Cart"
                variant="ghost"
                fontSize="24px"
                color={"black"}
                _hover={{ bg: "#DB4444", color: "white" }}
              />
              {cartItems.length > 0 && (
                <Badge
                  position="absolute"
                  top="-1"
                  right="-1"
                  bg="#DB4444"
                  color="white"
                  fontSize="xs"
                  borderRadius="full"
                  px={1}
                >
                  {cartItems.length}
                </Badge>
              )}
            </Box>
          </Link>

          {/* User Dropdown - Only show if user is logged in */}
          {currentUser && (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FiUser />}
                aria-label="User menu"
                variant="ghost"
                fontSize="24px"
                color={"black"}
                _hover={{ bg: "#DB4444", color: "white", borderRadius: "full" }}
              />
              <MenuList>
                <MenuItem>Manage My Account</MenuItem>
                <MenuItem>My Order</MenuItem>
                <MenuItem>My Cancellations</MenuItem>
                <MenuItem>My Reviews</MenuItem>
                <MenuItem onClick={handleLogout}>
                  {/* fix to navigate to home "/" if user is logged in */}
                  {currentUser && <Link to="/">Logout</Link>}
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
