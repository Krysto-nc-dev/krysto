'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaEdit, FaTimes, FaWaveSquare } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { Button } from '../ui/button';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar';
import { LuWaves } from "react-icons/lu";
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed text-primary top-0 left-0 w-full z-50 transition-all duration-300  ${scrolled ? 'bg-transparent bg-opacity-80 backdrop-blur-lg text-black' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center p-3 flex-col md:flex-row">
        <div className="w-full flex justify-between items-center md:w-auto">
          <Link href={'/'} className="text-2xl font-bold max-md:ml-4 flex items-center gap-2">
          <LuWaves className= "mt-1" /> Krysto
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary-foreground focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <nav
          className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 w-full md:w-auto max-md:my-4 ">
            <li>
              <Link href="/" className="block py-2 px-2 text-primary-foreground hover:text-secondary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/products" className="block py-2 px-2 text-primary-foreground hover:text-secondary">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-2 text-primary-foreground hover:text-secondary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-2 text-primary-foreground hover:text-secondary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-2 text-primary-foreground hover:text-secondary">
                Contact
              </Link>
            </li>
            {session && (
              <li className="md:flex md:items-center">
                <Menubar className="border-none bg-transparent">
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Avatar>
                        <AvatarImage
                          src={profileImage || '/default-profile.png'}
                          alt="User Avatar"
                        />
                      </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className="bg-gray-800 border-primary text-primary">
                      <MenubarItem>
                        <Link href={'/dashboard'}>Tableau de bord</Link>
                      </MenubarItem>
                      <MenubarItem>Message</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>
                          <FaUser className="mr-2" /> Profile
                        </MenubarSubTrigger>
                        <MenubarSubContent className="bg-gray-800 border-primary">
                          <MenubarItem>
                            <FaEdit className="mr-2" />
                            Modifer
                          </MenubarItem>
                          <MenubarItem>
                            <FaEnvelope className="mr-2" />
                            Messages
                          </MenubarItem>
                          <MenubarItem>Paramétres</MenubarItem>
                          <MenubarItem>
                            <MdContactSupport />
                            Supports
                          </MenubarItem>
                          <MenubarItem>Documentation</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        <button
                          className="text-red-500"
                          onClick={() => signOut()}
                        >
                          <AiOutlineLogout className="inline mr-2 font-bold" />
                          Deconnexion
                        </button>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </li>
            )}
            {!session && (
              <li>
                <Link
                  href="/users/register"
                  className="block py-2 px-2 text-primary-foreground hover:text-secondary"
                >
                  Connexion ou Inscription
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
