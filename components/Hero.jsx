import React from 'react';
import heroImage from '../assets/images/home_hero.jpeg';

const Hero = () => {
  return (
    <section
      className="mx-auto px-6 py-16 bg-cover bg-center bg-no-repeat h-full"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="text-primary-color text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue chez KRYSTO</h1>
        <p className="text-lg md:text-2xl">Votre solution pour le recyclage des plastiques</p>
      </div>
    </section>
  );
};

export default Hero;

