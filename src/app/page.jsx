"use client"
import React from 'react';
import Navbar from "../app/navbar/page";
import Header from "../app/header/page";
import NavbarR from "../app/navbar/navbarr";
import ListaCursos from "./main/listacursos";
import Headerxl from "./header/headerxl"
export default function Home() {
  
  return (
    <div className="w-full min-h-screen flex">
      
      <Navbar />

      <div className="flex-1 flex flex-col w-full xl:ml-72 lg:mr-[350px]">
        
        <Headerxl />
        <Header />
        <ListaCursos />
      </div>
      <NavbarR />
    </div>
  );
}