import React from 'react';
import ThumbsupIcon from '../assets/thumbsup.svg';
import ThumbsdownIcon from '../assets/thumbsdown.svg';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-16 w-full">
      <h1 className="text-2xl font-bold mb-4">Select the Countries to be added as States!</h1>
      <h3 className="text-lg font-semibold mb-4">And see how the Electoral College would look</h3>
      <p>aca va el mapita</p>
      <div>
        <h2 className="text-xl font-bold mt-24">Some Popular Distributions</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">Trump's Trifecta</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">Puerto Rican Statehood</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">Continental Only</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">North American Power!</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">The OG 13</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">The True Americas</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">NATO Alliance</li>
            <li className="bg-blue-200 p-4 rounded-lg w-full text-center font-semibold">GLOBAL DOMINATION</li>
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-green-500 text-white p-2 rounded-full mx-2">
          <img src={ThumbsupIcon} alt="Thumbs Up" className="w-6 h-6" />
        </button>
        <button className="bg-red-500 text-white p-2 rounded-full mx-2">
          <img src={ThumbsdownIcon} alt="Thumbs Down" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Home;

