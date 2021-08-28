import { motion } from 'framer-motion'
import Link from 'next/link'


const JavascriptPage: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
        <motion.img src="/img/nextjs.svg" layoutId="javascript-logo" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="https://nextjs.org/docs/getting-started">
            <a className="bg-gray-100 text-black px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition m-2">
              Docs
            </a>
          </Link>

          <Link href="/">
            <a className="bg-gray-100 text-black px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition m-2">
              Home
            </a>
          </Link>
        </motion.div>
      </div>
    );
}


export default JavascriptPage