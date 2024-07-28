import React from 'react';
import heroImage from '../assets/images/home_hero.jpeg';
import Link from 'next/link'; // Assurez-vous d'importer Link de 'next/link' pour la navigation

const Hero = () => {
  return (
    <section
      className="mx-auto px-6 py-16 bg-cover bg-center bg-no-repeat min-h-screen relative flex items-center justify-center" 
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-blue-400 bg-opacity-30"></div> 
      
      {/* Contenu du texte centré */}
      <div className="text-primary-color text-center relative z-10 flex flex-col items-center justify-center space-y-4"> 
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Le Changement commence localement.</h1>
        <p className="text-lg md:text-2xl mb-4">Votre solution pour le recyclage des plastiques</p>
        {/* Boutons CTA */}
        <div className="flex flex-col md:flex-row md:space-x-4 ">
          <Link href="/products" className="px-6 py-3 bg-secondary  font-bold text-gray-800 rounded hover:bg-secondary-dark transition duration-300 ease-in-out">
       
            Nos produits
          </Link>
          <Link href="/about" className="px-6 py-3 bg-primary font-bold text-gray-800 rounded hover:bg-primary-dark transition duration-300 ease-in-out">
          
              Découvrir
     
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
