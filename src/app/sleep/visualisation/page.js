'use client'
import Header from "../../components/header";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Buttons from "../../components/buttons";
import Link from "next/link";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ambientSounds = () => {
  const { user } = useUser();

  const handleAddToFavorites = async (title) => {
    if (user) {
      const favoriteItem = {
        category: "sleep",
        username: user.firstName,
        title: title,
        time: new Date().toLocaleTimeString(),
        entryType: "Breath Count"
      };

      try {
        await addDoc(collection(db, "favorites"), favoriteItem);
        console.log("Added to favorites:", favoriteItem);
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    } else {
      console.log("User not signed in");
    }
  };

  // Prepare query parameters
  const queryParams = {
    title: "Breath Count",
    time: new Date().toLocaleTimeString(),
    entryType: "Breath Count",
    category: "sleep"
  };

  console.log("Navigating to favourites with params:", queryParams); // Debugging line
  console.log("Query Params:", queryParams);

  return (
    <div>
      <Header 
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
        isSignedIn={true}
        favouritesLink={`/favourites?title=${encodeURIComponent(queryParams.title)}&time=${encodeURIComponent(queryParams.time)}&category=${encodeURIComponent(queryParams.category)}`}
      />

      <div>
        <div className="h-[660px] pt-12 bg-white rounded-3xl flex flex-col justify-center items-center gap-6">
          <div className="w-[231px] h-[231px] relative">
            <div className="w-[231px] h-[231px] left-0 top-0 absolute">
              <div className="w-[231px] h-[231px] p-4 left-0 top-0 absolute justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-6 pb-2 bg-[#ede5ff] rounded-[240px] flex-col justify-center items-center gap-2.5 inline-flex">
                  <Image width={165} height={147} src="/visualisation.svg" />
                </div>
              </div>
              <div className="w-[231px] h-[231px] left-0 top-0 absolute rounded-full border-4 border-[#ede5ff]" />
            </div>
          </div>
          <div className="self-stretch h-[79px] px-2 flex-col justify-center items-center flex">
            <div className="self-stretch justify-center items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 px-2 pt-2 pb-[15px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="w-[351px] text-center text-[#181d20] text-2xl font-bold font-['Nunito Sans'] leading-[30.72px]">Sleep Visualisation</div>
                <div className="w-[300px] text-center text-[#646e77] text-sm font-normal font-['Nunito Sans'] leading-[21px]"> Reducing Anxiety and Getting to Sleep by Tara Brach</div>
              </div>
            </div>
          </div>
          <audio controls className="w-[-375px] ">
            <source src="/audio/Relieving-Anxiety-Getting-Sleep-12min-TaraBrach.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/moments">
              <Buttons variant="secondary" className="px-4 py-2 sm:px-6 sm:py-3">
                Back to Playlist
              </Buttons>
            </Link>

            <Link href={{ pathname: "/favourites", query: queryParams }}>
              <Buttons 
                variant="primary" 
                className="px-4 py-2 sm:px-6 sm:py-3"
              >
                Add to favourites
              </Buttons>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ambientSounds;