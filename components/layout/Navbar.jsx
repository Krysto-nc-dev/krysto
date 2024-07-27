'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">KRYSTO</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary-foreground focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`md:flex md:items-center w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><a href="/home" className="block py-2 px-4 text-primary-foreground hover:text-secondary">Accueil</a></li>
            <li><a href="/about" className="block py-2 px-4 text-primary-foreground hover:text-secondary">À propos</a></li>
            <li><a href="/services" className="block py-2 px-4 text-primary-foreground hover:text-secondary">Services</a></li>
            <li><a href="/contact" className="block py-2 px-4 text-primary-foreground hover:text-secondary">Contact</a></li>
            <li><a href="/users/register" className="block py-2 px-4 text-primary-foreground hover:text-secondary">Créer un compte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
