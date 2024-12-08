'use client'
import Header from "../../components/header";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const ambientSounds = () => {
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

      <div>
        <div className="h-[660px] pt-12 bg-white rounded-3xl flex flex-col justify-center items-center gap-6">
          <div className="w-[231px] h-[231px] relative">
            <div className="w-[231px] h-[231px] left-0 top-0 absolute">
              <div className="w-[231px] h-[231px] p-4 left-0 top-0 absolute justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-6 pb-2 bg-[#ede5ff] rounded-[240px] flex-col justify-center items-center gap-2.5 inline-flex">
                  <Image width={165} height={147} src="/ambient.svg" />
                </div>
              </div>
              <div className="w-[231px] h-[231px] left-0 top-0 absolute rounded-full border-4 border-[#ede5ff]" />
            </div>
          </div>
          <div className="self-stretch h-[79px] px-2 flex-col justify-center items-center flex">
            <div className="self-stretch justify-center items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 px-2 pt-2 pb-[15px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="w-[351px] text-center text-[#181d20] text-2xl font-bold font-['Nunito Sans'] leading-[30.72px]">Ambient Sounds</div>
                <div className="w-[300px] text-center text-[#646e77] text-sm font-normal font-['Nunito Sans'] leading-[21px]">Immerse yourself in calming ambient sounds like rain whispers to soothe your mind and body.</div>
              </div>
            </div>
          </div>
          <audio controls className="w-[-375px] ">
            <source src="/audio/rain.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  )
}

export default ambientSounds;