'use client'

import Header from "../components/header"
import { SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import Selection from "../components/selection"
import Card from "../components/card"

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
        <Card title={"Ambient Sounds"} duration={"20"} imageSrc={"/ambient.png"} weight={"full"} height={"206px"} color={"#FFE8EC"}/>
        <div className="flex pt-5 pl-1 gap-5">
          <Card title={"Breath Counting"} duration={"6"} imageSrc={"/mindful.png"} weight={"1/2"} height={"174px"} color={"#FFE8EC"}/>
          <Card title={"Body Scan"} duration={"10"} imageSrc={"/body.png"} weight={"1/2"} height={"200px"} color={"#FFE8EC"}/>
        </div>
      </div>
    </div>
  )
}