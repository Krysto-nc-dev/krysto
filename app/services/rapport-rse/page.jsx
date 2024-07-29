import PricingGrid from '@/components/PricingGrid';
import React from 'react';



const RseRapportPage = () => {
 

  return (

        <div className="min-h-screen container mx-auto pt-16 p-3 overflow-hidden">
    <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-2 mt-3">
      Boostez votre <span className='text-primary-dark'>bilan RSE</span>
    </h1>
    <p className="mb-6 mt-4">
      Chez Krysto, nous comprenons que chaque entreprise est unique...
    </p>

 
  <PricingGrid />
  </div>
      
  );
}

export default RseRapportPage;
