'use client'

import Header from "../components/header"
import { SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import Selection from "../components/selection"

export default function momentsPage(){
  const { user } = useUser();

  return (
    <div>
      <Header signInText="Sign Out" SignInButtonComponent={SignOutButton} headerText={user ? `Hi, ${user.fullName}` : "Welcome, Guest"} imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}/>
      <div className="flex ">
        <Selection />
      </div>
    </div>
  )
}