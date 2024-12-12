'use client'
import Header from "../components/header";
import {SignOutButton, useUser} from "@clerk/nextjs";
import { useSearchParams } from 'next/navigation';
import Buttons from "../components/buttons";

const favourites = () => {
  const { user } = useUser();
  const searchParams = useSearchParams();

  // Extract details from search parameters
  const title = searchParams.get('title');
  const time = searchParams.get('time');
  const category = searchParams.get('category');

  const handleRemove = () => {
    // Logic to remove the favorite from Firebase
    console.log("Remove favorite logic here");
  };

  const addToFavorites = (title, time, category) => {
    // Logic to add to favorites in Firebase
    // After adding, redirect to the favorites page
    // Ensure that the item is only added when this function is called
    window.location.href = `/favourites?title=${encodeURIComponent(title)}&time=${encodeURIComponent(time)}&category=${encodeURIComponent(category)}`;
  };


  return(
    <div>
      <Header         
        className="fixed top-0 left-0 w-full z-10"
        signInText="Sign Out" 
        SignInButtonComponent={SignOutButton} 
        headerText={user ? `Hi, ${user.firstName}` : "Hi, Guest"} 
        imageSrc={user && user.profileImage ? user.profileImage : "/userImage.png"}
        isSignedIn={true}
        favouritesLink={`/favourites?title=${encodeURIComponent(title)}&time=${encodeURIComponent(time)}&category=${encodeURIComponent(category)}`}
      />

      <div className="flex flex-col items-center md:flex-row justify-center mt-20">
        {title && time && category ? (
          <div className="border border-black rounded-lg w-2/3 md:w-2/3 p-4 my-2 flex flex-col md:flex-row justify-between">
            <h1 className="text-xl font-bold m-0">{title}</h1>
            <p className="text-base text-gray-600 my-1">{time}</p>
            <p className="text-base text-gray-600 my-1">{category}</p>
            <button onClick={handleRemove} className="bg-red-500 text-white w-[120px] md:w-[80px] h-[30px] rounded mt-2 md:mt-0">Remove</button>
          </div>
        ) : (
          <p className="text-lg text-gray-600">No favorites</p>
        )}
      </div>

      <div className="flex items-center justify-center mt-20">
        <Buttons variant="primary" size="large">
          <a href="/moments">Back to Moments</a>
        </Buttons>
      </div>

    </div>
  )
}
export default favourites;