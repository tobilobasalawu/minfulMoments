'use client'

import Header from "../components/header"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Selection from "../components/selection"
import Card from "../components/card"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function momentsPage(){
  const { user } = useUser();
  const [ambientDuration, setAmbientDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio('/audio/rain.mp3');
    audio.onloadedmetadata = () => {
      setAmbientDuration(audio.duration);
    };
  }, []);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}m ${seconds}s`; // Format as "Xm Ys"
  };

  // Prepare query parameters for favorites
  const queryParams = {
    title: "Into the Presence",
    time: new Date().toLocaleTimeString(),
    category: "sleep"
  };

  return (
    <div>
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
        isSignedIn={true}
        favouritesLink={`/favourites?title=${encodeURIComponent(queryParams.title)}&time=${encodeURIComponent(queryParams.time)}&category=${encodeURIComponent(queryParams.category)}`}
      />
      <div className="flex pt-5 overflow-x-auto">
        <Selection />
      </div>

      <div className="flex flex-col pt-10 pl-10 mx-5 gap-5">
        <Link href="./sleep/ambient">
          <Card 
            title={"Into the Presence"} 
            duration={formatDuration(ambientDuration)} 
            imageSrc={"/ambient.svg"}
            weight={"full"} 
            height={"206px"} 
            color={"#E7F6FF"}
          />
        </Link>
        <div className="flex pt-5 pl-1 gap-5">
          <Link href="./sleep/breath" className="w-full">
            <Card title={"Breath Counting"} duration={"5"} imageSrc={"/breathing.svg"} weight={"full"} height={"210px"} color={"#E7F6FF"}/>
          </Link>
          <Link href="./sleep/visualisation" className="w-full">
            <Card title={"Sleep Visualisation"} duration={"12"} imageSrc={"/visualisation.svg"} weight={"full"} height={"250px"} color={"#FFE8EC"}/>
          </Link>
        </div>
        <div className="flex pt-5 pl-1 gap-5">
          <Link href="./sleep/presence" className="w-full">
            <Card title={"Into the Presence"} duration={"20"} imageSrc={"/presence.svg"} weight={"full"} height={"220px"} color={"#FFE3D3"}/>
          </Link>
          <Link href="./sleep/presence" className="w-full">
            <Card title={"Into the Presence 2"} duration={"20"} imageSrc={"/presence.svg"} weight={"full"} height={"220px"} color={"#FFFACA"}/>
          </Link>
        </div>
      </div>
    </div>
  )
}