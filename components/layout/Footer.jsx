import Image from 'next/image';
import logo from '@/assets/images/logo_krysto_couleur.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-primary py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2">
        <div className="mb-4 md:mb-0">
          <Image className="h-10 w-auto" src={logo} alt="Krysto" />
        </div>

        {/* <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
          <a href="/home" className="text-primary-foreground hover:text-secondary mb-2 md:mb-0">Accueil</a>
          <a href="/about" className="text-primary-foreground hover:text-secondary mb-2 md:mb-0">À propos</a>
          <a href="/services" className="text-primary-foreground hover:text-secondary mb-2 md:mb-0">Services</a>
          <a href="/contact" className="text-primary-foreground hover:text-secondary mb-2 md:mb-0">Contact</a>
        </div> */}

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com" className="text-primary-foreground hover:text-secondary" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.twitter.com" className="text-primary-foreground hover:text-secondary" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" className="text-primary-foreground hover:text-secondary" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" className="text-primary-foreground hover:text-secondary" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <div>
          <p className="text-sm text-primary-foreground mt-2 md:mt-0">
            &copy; {currentYear} Krysto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
