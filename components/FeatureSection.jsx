import Image from "next/image";
import featureImg from '../assets/images/bouchons.jpeg';
import { Button } from "./ui/button";

const FeatureSection = () => {
  return (
    <section id="feature" className="relative bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
          <Image 
            src={featureImg} 
            alt="Bouchons plastique" 
            width={800}
            height={600}
            className="rounded-lg shadow-lg" 
            priority 
          />
        </div>
        <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 p-10 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl text-center text-gray-800 font-bold uppercase leading-tight mb-6 md:text-5xl">
            Vos déchets sont notre ressource
          </h2>
          <p className="text-gray-600 text-lg text-center leading-relaxed">
            Transformons ensemble vos déchets en ressources précieuses. Rejoignez notre mission pour un avenir durable et responsable.
          </p>
          <Button className="mt-8 w-full md:w-auto">En savoir plus</Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
