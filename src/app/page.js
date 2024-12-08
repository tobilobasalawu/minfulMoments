import Image from "next/image";
import Header from "./components/header";
import Buttons from "./components/buttons";
import { SignUpButton,SignInButton } from "@clerk/nextjs";

export default function Home() {

  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:pl-20 pt-10 lg:pt-28 lg:gap-20">
        <div className="flex-col max-w-[634px] space-y-6 p-4 lg:p-0">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#1A1A1A] text-center lg:text-left">
            Embark on a Journey to Inner Peace and Resilience
          </h1>
          <p className="text-[#4D4D4D] leading-relaxed text-center lg:text-left">
            Mindful Moments is your companion for cultivating inner peace and reducing stress, offering guided meditations that fit seamlessly into your day.
            Whether you're seeking calm, better sleep, or tools to navigate life's challenges, our short, accessible sessions are designed to help you reconnect with yourself—one moment at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 items-center justify-center lg:justify-start">
            <Buttons variant="primary">
              <SignUpButton>
                Get Started
              </SignUpButton>
            </Buttons>
            <Buttons variant="secondary">
              Learn More
            </Buttons>
          </div>
        </div>

        <div className="w-full lg:w-auto px-4 lg:px-0">
          <Image 
            src="/meditation-transformed.png" 
            alt="meditation" 
            width={500} 
            height={500}
            className="w-full h-auto max-w-[500px] mx-auto" 
          />
        </div>
      </div>
    </div>
  );
}