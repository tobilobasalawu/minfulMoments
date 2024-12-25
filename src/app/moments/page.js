'use client'

import Header from "../components/header"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Card from "../components/card"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"

export default function momentsPage(){
  const { user } = useUser();

  // Prepare query parameters for favorites

  return (
    <div>
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
        isSignedIn={true}
        //favouritesLink={`/favourites?title=${encodeURIComponent(queryParams.title)}&time=${encodeURIComponent(queryParams.time)}&category=${encodeURIComponent(queryParams.category)}`}
      />

      <div className="flex flex-col pt-10 pl-0 md:pl-0 mx-5 gap-5">
      <Link href="./sleep/ambient" className="w-full flex justify-center "items-center> 
        <Card 
          title={"Ambient Sounds"} 
          duration={'9'} 
          imageSrc={"/ambient.svg"}
          weight={"full"} 
          height={"206px"} 
          color={"#E7F6FF"}
        />
        </Link>
        <div className="flex pt-5 pl-1 gap-5">
          <Link href="./sleep/breath" className="w-full">
            <Card title={"Breath Counting"} duration={"5"} imageSrc={"/breathing.svg"} weight={"full"} height={"280px"} color={"#E7F6FF"}/>
          </Link>
          <Link href="./sleep/visualisation" className="w-full">
            <Card title={"Sleep Visualisation"} duration={"12"} imageSrc={"/visualisation.svg"} weight={"full"} height={"280px"} color={"#FFE8EC"}/>
          </Link>
        </div>
        <div className="flex pt-1 pl-1 gap-5">
          <Link href="./sleep/presence" className="w-full">
            <Card title={"Into the Presence"} duration={"20"} imageSrc={"/presence.svg"} weight={"full"} height={"300px"} color={"#FFE3D3"}/>
          </Link>
          <Link href="./sleep/presence2" className="w-full">
            <Card title={"Into the Presence 2"} duration={"20"} imageSrc={"/presence.svg"} weight={"full"} height={"220px"} color={"#FFFACA"}/>
          </Link>
        </div>
      </div>
    </div>
  )
}