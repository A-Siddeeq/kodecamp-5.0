import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NoPage />} />
              <Route path="/product-details" element={<ProductDetails />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
