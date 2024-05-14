import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "PropertyPulse | Find the perfect rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find property",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
