import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
export const Home = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
