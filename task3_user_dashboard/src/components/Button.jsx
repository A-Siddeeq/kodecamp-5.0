import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

export const Button = () => {
  return <button className="flex text-white bg-[#5932EA]">{props.text}</button>;
};

export function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-x-2 bg-red-500 text-white rounded p-2 my-2 w-max"
    >
      Log Out <IoLogOut />
    </button>
  );
}
