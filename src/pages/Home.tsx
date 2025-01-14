import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-16 w-full">
      <h1 className="text-2xl font-bold mb-4">Select the Countries to be added as States!</h1>
      <h3 className="text-lg font-semibold mb-4">And see how the Electoral College would look</h3>
      <p>aca va el mapita</p>
      <div>
        <h2 className="text-xl font-bold mt-24">Some Popular Distributions</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
          <li className="bg-blue-200 p-4 rounded-lg w-full text-center">Donald's Trifecta</li>
          <li className="bg-blue-200 p-4 rounded-lg w-full text-center">Puerto Rican Statehood</li>
          <li className="bg-blue-200 p-4 rounded-lg w-full text-center">Continental Only</li>
          <li className="bg-blue-200 p-4 rounded-lg w-full text-center">North American Power!</li>
          <li className="bg-blue-200 p-4 rounded-lg w-full text-center">The OG 13</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

