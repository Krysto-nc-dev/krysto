"use client"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import heroImage from '../../../assets/images/home_hero.jpeg';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 w-full h-screen    p-10 bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
        <form className="space-y-4 mt-36  mx-auto max-w-[480px] flex flex-col">
            <h1 className="text-xl">S'inscrire</h1>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-4 py-3 border-0 bg-white bg-opacity-80 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="block w-full px-4 py-3 border-0 bg-white bg-opacity-80 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-4 py-3 border-0 bg-white bg-opacity-80 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
              Confirmer le mot de passe
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="block w-full px-4 py-3 border-0 bg-white bg-opacity-80 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              S'inscrire
            </button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm text-gray-100">ou</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-300 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => signIn('google')}
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Se connecter avec Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
