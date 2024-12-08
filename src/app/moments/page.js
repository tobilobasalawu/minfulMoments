'use client'

import Header from "../components/header"
import { SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"

export default function momentsPage(){
  const { user } = useUser();

  return (
    <div>
      <Header signInText="Sign Out" SignInButtonComponent={SignOutButton}/>
      <div>
        {user ? (
          <>
            <Image src={user.profileImageUrl} alt={user.fullName} width={50} height={50} />
            <span>{user.fullName}</span>
          </>
        ) : (
          <span>Hi, Guest</span>
        )}
      </div>
    </div>
  )
}