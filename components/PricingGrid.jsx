import Link from 'next/link'
import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'

const PricingGrid = () => {
  return (
    <section className="flex items-center justify-center mt-10">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
   
        <div className="bg-secondary-light rounded-xl">
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-gray-700 text-gray-100">
        <div className="text-center uppercase">
             Basique
            </div>
            <h2 className="mt-10 text-5xl text-center">Rapport</h2>
            <h2 className="mt-2  text-center"> XPF2000/ Mois</h2>
            <div className='flex justify-center'>
                <Link className=" my-6 font-bold inline-block px-10 py-2 text-center border border-primary-dark rounded-lg hover:bg-primary" 
                href={'/services/rapport-plan'}>En savoir plus</Link>

            </div>
        </div>
        {/* border */}
        <div className="border-t border-primary-light"></div>
      
        {/* LowerContainer */}
        <div className="p-8 mb-3 mx-3 rounded-b-xl bg-gray-700 text-gray-100">
            {/* List container */}
            <div className="flex flex-col space-y-3">

                <div className="flex justify-between items-center ">


                <span className="text-sm mr-6">Accès au tableau de bord standard</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between  items-center ">


                <span className="text-sm mr-6">Rapport partageable sur le web</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between text-right items-center ">


                <span className="text-sm">Support par email</span>
                <FaCheckDouble  className="  text-green-700"/>
                </div>
            </div>
        </div>
        </div>
        <div className="bg-secondary rounded-xl">
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-gray-800 text-gray-100">
        <div className="text-center uppercase">
             Premium
            </div>
            <h2 className="mt-10 text-5xl text-center">PRO</h2>
            <h2 className="mt-2  text-center"> XPF2000/ Mois</h2>
            <div className='flex justify-center'>
                <Link className=" my-6 font-bold inline-block px-10 py-2 text-center border border-primary-dark rounded-lg hover:bg-primary" href={'/'}>En savoir plus</Link>

            </div>
        </div>
        {/* border */}
        <div className="border-t border-primary-light"></div>
      
        {/* LowerContainer */}
        <div className="p-8 mb-3 mx-3 rounded-b-xl bg-gray-800 text-gray-100">
            {/* List container */}
            <div className="flex flex-col space-y-3">

                <div className="flex justify-between items-center ">


                <span className="text-sm mr-6">Accès au tableau de bord standard</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between  items-center ">


                <span className="text-sm mr-6">Rapport partageable sur le web</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between text-right items-center ">


                <span className="text-sm">Support par email</span>
                <FaCheckDouble  className="  text-green-700"/>
                </div>
            </div>
        </div>
        </div>
        <div className="bg-secondary-light rounded-xl">
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-gray-700 text-gray-100">
        <div className="text-center uppercase">
             Basique
            </div>
            <h2 className="mt-10 text-5xl text-center">Rapport</h2>
            <h2 className="mt-2  text-center"> XPF2000/ Mois</h2>
            <div className='flex justify-center'>
                <Link className=" my-6 font-bold inline-block px-10 py-2 text-center border border-primary-dark rounded-lg hover:bg-primary" href={'/'}>En savoir plus</Link>

            </div>
        </div>
        {/* border */}
        <div className="border-t border-primary-light"></div>
      
        {/* LowerContainer */}
        <div className="p-8 mb-3 mx-3 rounded-b-xl bg-gray-700 text-gray-100">
            {/* List container */}
            <div className="flex flex-col space-y-3">

                <div className="flex justify-between items-center ">


                <span className="text-sm mr-6">Accès au tableau de bord standard</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between  items-center ">


                <span className="text-sm mr-6">Rapport partageable sur le web</span>
                <FaCheckDouble className="text-green-700"/>
                </div>
                <div className="flex justify-between text-right items-center ">


                <span className="text-sm">Support par email</span>
                <FaCheckDouble  className="  text-green-700"/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PricingGrid
