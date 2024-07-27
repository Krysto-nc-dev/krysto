import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-14 bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-7">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-danger">
            <span className="sr-only">Erreur</span>🚧  404 
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Désolé, nous n'avons pas trouvé cette page.
          </p>
          <p className="mt-4 mb-8 text-primary-foreground">
            Mais ne vous inquiétez pas, vous pouvez trouver plein d'autres
            choses sur notre page d'accueil.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 font-semibold text-primary-foreground bg-secondary rounded-lg hover:bg-secondary-dark"
          >
            <FaHome className="mr-2" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
