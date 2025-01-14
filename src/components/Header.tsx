import React from 'react';
import { Link } from 'react-router-dom';
import electoralIcon from '../assets/electoral_icon.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-start">
        <Link to="/" className="flex items-center">
          <img src={electoralIcon} alt="Electoral Icon" className="h-10 w-10" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
