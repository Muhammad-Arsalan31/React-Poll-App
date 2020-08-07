import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
export const Home = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
