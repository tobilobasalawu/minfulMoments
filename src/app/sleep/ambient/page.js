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
                <div className="w-[351px] text-center text-[#181d20] text-2xl font-bold font-['Nunito Sans'] leading-[30.72px]">Breath Counting</div>
                <div className="w-[351px] text-center text-[#646e77] text-sm font-normal font-['Nunito Sans'] leading-[21px]">5-minute calming technique</div>
              </div>
            </div>
          </div>
          <div className="w-[375px] px-12 justify-center items-center gap-6 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-20 h-20 justify-start items-start flex">
              <div className="w-20 self-stretch p-4 bg-[#ede5ff] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 relative">
                  <img className="w-[26.67px] h-[26.67px] left-[2.67px] top-[2.67px] absolute" src="/pause.svg" />
                </div>
              </div>
            </div>
            <div className="w-6 h-6 relative origin-top-left rotate-180" />
          </div>
          <div className="w-[375px] px-12 py-4 justify-center items-center gap-2 inline-flex">
            <div className="text-right text-[#646e77] text-xs font-normal font-['Nunito Sans'] leading-none">13:35</div>
            <div className="w-[207px] h-4 relative">
              <div className="w-[207px] h-1.5 left-0 top-[5px] absolute bg-[#ccd9e3] rounded" />
              <img className="w-[140px] h-4 left-0 top-[1px] absolute border border-[#ede5ff]" src="https://via.placeholder.com/140x16" />
            </div>
            <div className="text-[#646e77] text-xs font-normal font-['Nunito Sans'] leading-none">15:00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ambientSounds;