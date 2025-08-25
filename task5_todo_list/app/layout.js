import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Todo App",
  description: "Task by kodecamp 5.0 react bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
