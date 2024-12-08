'use client'

import Header from "../components/header"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Selection from "../components/selection"
import Card from "../components/card"
import Link from "next/link"

export default function momentsPage(){
  const { user } = useUser();

  return (
    <div>
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
      />
      <div className="flex pt-5 overflow-x-auto">
        <Selection />
      </div>

      <div className="flex flex-col pt-10 pl-10 mx-5 gap-5">
        <Link href="./sleep/ambient">
          <Card title={"Ambient Sounds"} duration={"20"} imageSrc={"/ambient.png"} weight={"full"} height={"206px"} color={"#E7F6FF"}/>
        </Link>
        <div className="flex pt-5 pl-1 gap-5">
          <Link href="/" className="w-full">
            <Card title={"Breath Counting"} duration={"5"} imageSrc={"/mindful.png"} weight={"full"} height={"174px"} color={"#E7F6FF"}/>
          </Link>
          <Link href="/" className="w-full">
            <Card title={"Sleep Visualisation"} duration={"10"} imageSrc={"/body.png"} weight={"full"} height={"250px"} color={"#FFE8EC"}/>
          </Link>
        </div>
      </div>
    </div>
  )
}