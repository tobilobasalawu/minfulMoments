import React, { useState } from 'react';

const Selection = () => {
    const [activeButton, setActiveButton] = useState('Sleep');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
      <div className="flex space-x-4 pl-14 rounded-lg items-center justify-between">
        <button 
          className={`px-4 py-2 ${activeButton === 'Sleep' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Sleep')}
        >
          Sleep
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Stress' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Stress')}
        >
          Stress
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Emotions' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Emotions')}
        >
          Emotions
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Anxiety' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Anxiety')}
        >
          Anxiety
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Confidence' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Confidence')}
        >
          Confidence
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Connection' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Connection')}
        >
          Connection
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Healing' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Healing')}
        >
          Healing
        </button>
        <button 
          className={`px-4 py-2 ${activeButton === 'Gratitude' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Gratitude')}
        >
          Gratitude
        </button>
      </div>
    )
}

export default Selection;