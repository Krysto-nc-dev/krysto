'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'
import { signOut, useSession, getProviders } from 'next-auth/react'
import { Button } from '../ui/button'
const Navbar = () => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gray-800 text-primary">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">KRYSTO</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary-foreground focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`md:flex md:items-center w-full md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-primary-foreground hover:text-secondary"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 px-4 text-primary-foreground hover:text-secondary"
              >
                Produits
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-4 text-primary-foreground hover:text-secondary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-primary-foreground hover:text-secondary"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 text-primary-foreground hover:text-secondary"
              >
                Contact
              </Link>
            </li>

            {session && (
              <>
                <li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-4 text-primary-foreground hover:text-secondary"
                    >
                     Dashboard
                    </Link>
                  </li>
                </li>
                <li>
                  <Button onClick={() => signOut()}>Deconnexion</Button>
                </li>
              </>
            )}
            {!session && (
              <li>
                <Link
                  href="/users/register"
                  className="block py-2 px-4 text-primary-foreground hover:text-secondary"
                >
                  Connexion ou Inscription
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
