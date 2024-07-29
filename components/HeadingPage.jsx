
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button"

const HeadingPage = ({ title, href }) => {
  return (
    <section className=" container mx-auto   pt-16 p-2 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-white transition duration-300 ease-in-out mt-3 ">
        {title}
      </h1>
  
      <Button  variant="ghost">
        <FaRegArrowAltCircleLeft className="mr-2"/>
        Retour
      </Button>
    </section>
  )
}

export default HeadingPage
