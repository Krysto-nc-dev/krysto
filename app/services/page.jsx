import React from 'react';
import Image from 'next/image';
import conceptionImage from '../../assets/images/conception.jpg';
import collecteImage from '../../assets/images/bouchon_hand.jpeg';
import rapportImage from '../../assets/images/rapport.jpg';
import childImage from '../../assets/images/child.jpg';
import moldImage from '../../assets/images/mold.jpg';
import buildingImage from '../../assets/images/teamBulding.jpg';
import Link from 'next/link';
const services = [
  { 
    name: "Initiations au recyclage", 
    description: "Découvrez comment recycler efficacement avec nos ateliers pratiques.", 
    image: childImage, // Utilisez directement l'objet image importé
    link:'/',
  },
  { 
    name: "Team Building", 
    description: "Renforcez l'esprit d'équipe avec des activités centrées sur le développement durable.", 
    image: buildingImage, // Utilisez directement l'objet image importé
    link:'/',


  },
  { 
    name: "Conception de moules", 
    description: "Nous concevons des moules sur mesure pour vos projets de recyclage.", 
    image: moldImage, // Utilisez directement l'objet image importé
    link:'/',

  },
  { 
    name: "Collecte de plastique", 
    description: "Participez à nos efforts de collecte de plastique pour un environnement plus propre.", 
    image: collecteImage, // Utilisez directement l'objet image importé
    link:'/',
 
  },
  { 
    name: "Rapport RSE interactif", 
    description: "Créez des rapports RSE dynamiques qui mettent en lumière vos initiatives écologiques.", 
    image: rapportImage, // Utilisez directement l'objet image importé
   
    link:'/'
   
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen container mx-auto pt-16 p-3">
    <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-2 mt-3">
    Construisons L'avenir  <span className='text-primary-dark'> Ensemble</span>
    </h1>
    <h2>
    Des Solutions Durables Pour des Défis Modernes
    </h2>
    <p className= "mb-6 mt-4">
    Face à un monde en constante évolution, les défis modernes exigent des solutions innovantes. Chez Krysto, nous allons au-delà des services traditionnels pour proposer des solutions éco-responsables qui ont un impact à long terme. Qu'il s'agisse de sensibiliser les jeunes dans les écoles, d'engager les collectivités locales ou de transformer les pratiques au sein de votre entreprise, nous sommes votre partenaire dédié. De la sensibilisation à l'éco-conception, notre gamme de services est conçue pour répondre aux besoins diversifiés de nos clients tout en préservant notre planète. Rejoignez-nous dans cette mission passionnante pour construire un avenir meilleur, ensemble. </p>
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {services.map((service, index) => (
        <Link key={index} href={service.link} passHref>
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[300px] cursor-pointer group">
            <Image
              src={service.image}
              alt={service.name}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 text-center text-white px-4">
                <p className="text-md font-bold">{service.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-primary-dark to-transparent z-10">
              <h2 className="text-xl font-bold text-white">{service.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default ServicesPage;
