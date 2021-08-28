import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
      <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
        <Image src="/img/javascript.svg" alt="Logo" width={80} height={80} />

        <nav className="hidden md:block space-x-8">
          <Link href="/tailwind">
            <a className="tracking-wide hover:text-purple-900">Tailwind</a>
          </Link>

          <Link href="/javascript">
            <a className="tracking-wide hover:text-purple-900">Javascript</a>
          </Link>

          <Link href="framermotion">
            <a className="tracking-wide hover:text-purple-900">Framer Motion</a>
          </Link>
        </nav>
      </header>
    );
}


export default Header;