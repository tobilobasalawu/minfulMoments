'use client'
import Header from "../../components/header";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";


const ambientSounds = () => {
  const { user } = useUser();

  return(
    <div>
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
      />
      <div className="w-[231px] h-[231px] relative">
        <div className="w-[231px] h-[231px] p-4 left-0 top-0 absolute justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 self-stretch px-6 pb-2 bg-[#ede5ff] rounded-[240px] flex-col justify-center items-center gap-2.5 inline-flex">
            <Image width={165} height={147} src="/ambient.svg" />
          </div>
        </div>
        <div className="w-[231px] h-[231px] left-0 top-0 absolute rounded-full border-4 border-[#ede5ff]" />
      </div>

    </div>
  )
}

export default ambientSounds;