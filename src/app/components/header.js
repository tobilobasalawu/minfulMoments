import Buttons from "./buttons";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

const Header = ({ signInText = "Sign In", SignInButtonComponent = SignInButton }) => {
  return (
    <div className="header flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <p>MindfulMoments</p>
      </div>
      <div className="flex gap-2 ml-2">
        <button className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-lg">
          Feedback
        </button>
          <Buttons variant="secondary" size="small">
            <SignInButtonComponent>
              {signInText}
            </SignInButtonComponent>
          </Buttons>
      </div>
    </div>
  );
}

export default Header;