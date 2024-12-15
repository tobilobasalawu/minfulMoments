'use client'
import Header from "../components/header";
import {SignOutButton, useUser} from "@clerk/nextjs";
import { useSearchParams } from 'next/navigation';
import Buttons from "../components/buttons";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';

const favourites = () => {
  const { user } = useUser();
  const searchParams = useSearchParams();
  
  // State to hold favorites
  const [favorites, setFavorites] = useState([]);

  // Extract details from search parameters
  const title = searchParams.get('title');
  const time = searchParams.get('time');
  const category = searchParams.get('category');

  // Fetch favorites from Firebase (you may need to implement this)
  useEffect(() => {
    const fetchFavorites = async () => {
      const db = firebase.firestore();
      const snapshot = await db.collection('favorites').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFavorites(items);
    };
    fetchFavorites();
  }, []);

  const handleRemove = async (itemId) => {
    const db = firebase.firestore(); // Ensure you have initialized Firebase

    try {
      await db.collection('favorites').doc(itemId).delete(); // Adjust the collection name as needed
      // Update the state to remove the item from the UI
      setFavorites(favorites.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
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
        {favorites.length > 0 ? (
          favorites.map(({ id, title, time, category }) => ( // Map over favorites
            <div key={id} className="border border-black rounded-lg w-2/3 md:w-2/3 p-4 my-2 flex flex-col md:flex-row justify-between">
              <h1 className="text-xl font-bold m-0">{title}</h1>
              <p className="text-base text-gray-600 my-1">{time}</p>
              <p className="text-base text-gray-600 my-1">{category}</p>
              <button onClick={() => handleRemove(id)} className="bg-red-500 text-white w-[120px] md:w-[80px] h-[30px] rounded mt-2 md:mt-0">Remove</button>
            </div>
          ))
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