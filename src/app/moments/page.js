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
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.fullName}` : "Welcome, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
      />
      <div className="flex pt-5 overflow-x-auto">
        <Selection />
      </div>
    </div>
  )
}