import Buttons from "./buttons";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

const Header = ({ signInText = "Sign In", SignInButtonComponent = SignInButton, headerText = "MindfulMoments", imageSrc = "/logo.png", isSignedIn = false, favouritesLink = "" }) => {
  return (
    <div className="header flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <Image src={imageSrc} alt="logo" width={32} height={32} />
        <p>{headerText}</p>
      </div>
      <div className="flex gap-2 ml-2">
        <button className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-lg">
          {isSignedIn ? (
            <a href={favouritesLink} className="block">
              View Favourites
            </a>
          ) : (
            "Feedback"
          )}
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