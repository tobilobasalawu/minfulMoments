import Image from "next/image";
import Header from "./components/header";
import Buttons from "./components/buttons";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center pl-20 pt-28">
        <div className="flex-col max-w-[634px] space-y-6">
          <h1 className="text-4xl font-bold text-[#1A1A1A]">
            Embark on a Journey to Inner Peace and Resilience
          </h1>
          <p className="text-[#4D4D4D] leading-relaxed">
            Mindful Moments is your companion for cultivating inner peace and reducing stress, offering guided meditations that fit seamlessly into your day.
            Whether you're seeking calm, better sleep, or tools to navigate life's challenges, our short, accessible sessions are designed to help you reconnect with yourself—one moment at a time.
          </p>
          <div className="flex gap-4 pt-2">
            <Buttons variant="primary">
              Get Started
            </Buttons>
            <Buttons variant="secondary">
              Learn More
            </Buttons>
          </div>
        </div>

        <div>
          <Image src="/meditation.png" alt="meditation" width={500} height={500} />
        </div>

      </div>
    </div>
  );
}