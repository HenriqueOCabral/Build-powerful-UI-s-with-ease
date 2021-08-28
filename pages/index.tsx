import { motion } from "framer-motion";
import Link from 'next/link'
import Header from "../components/Header";


interface ICardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<ICardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-100 rounded-xl cursor-pointer hover:border-purple-900 hover:bg-gray-300 transition">
        <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutId}/>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-purple-900">
        Enhance your skills with Tailwind, Next.Js, and Framer Motion.
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          href={"/tailwind"}
          imgSrc={"/img/tailwind.svg"}
          layoutId={"tailwind-logo"}
        />

        <Card
          href={"/javascript"}
          imgSrc={"/img/nextjs.svg"}
          layoutId={"javascript-logo"}
        />

        <Card
          href={"/framermotion"}
          imgSrc={"/img/framermotion.svg"}
          layoutId={"framermotion-logo"}
        />
      </div>
    </div>
  );
}
