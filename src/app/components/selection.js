"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Selection = () => {
    const [activeButton, setActiveButton] = useState('Sleep');
    const navigate = useNavigate();


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        switch (buttonName) {
            case 'Sleep':
                navigate('/sleep');
                break;
            case 'Stress':
                navigate('/stress');
                break;
            case 'Emotions':
                navigate('/');
                break;
            case 'Anxiety':
                navigate('/');
                break;
            case 'Confidence':
                navigate('/');
                break;
            case 'Connection':
                navigate('/');
                break;
            case 'Healing':
                navigate('/');
                break;
            case 'Gratitude':
                navigate('/');
                break;
            default:
                break;
        }
    };

    return (
      <div className="flex space-x-4 pl-14 rounded-lg items-center justify-between">
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Sleep' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Sleep')}
        >
          Sleep
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Stress' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Stress')}
        >
          Stress
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Emotions' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Emotions')}
        >
          Emotions
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Anxiety' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Anxiety')}
        >
          Anxiety
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Confidence' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Confidence')}
        >
          Confidence
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Connection' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Connection')}
        >
          Connection
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Healing' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Healing')}
        >
          Healing
        </button>
        <button 
          className={`px-4 py-2 no-outline ${activeButton === 'Gratitude' ? 'bg-black text-white' : 'text-gray-700'} rounded-lg`} 
          onClick={() => handleButtonClick('Gratitude')}
        >
          Gratitude
        </button>
      </div>
    )
}

export default Selection;