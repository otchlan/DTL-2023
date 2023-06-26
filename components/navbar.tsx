import { useState } from "react";
import { useSession } from "next-auth/react";
import { useScroll } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const scrolled = useScroll();

  return (
    <nav
      className={`fixed top-0 w-full  ${
        scrolled ? " bg-black/50 backdrop-blur-xl" : "bg-black/0"
      } z-30`}
    >
      <div className="max-w-8xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <button className="mr-3 h-9 sm:h-9 cursor-pointer focus:outline-none">
                  <img
                    src="logo.svg"
                    className="h-full"
                    alt="Deeptechlabs Logo"
                  />
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/lanchpad">
                  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Lanchpad
                  </button>
                </Link>
                <Link href="/centrumsi">
                  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Centrum SI
                  </button>
                </Link>
                <Link href="/oferta">
                  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Oferta
                  </button>
                </Link>
                <Link href="/dao">
                  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    DAO
                  </button>
                </Link>
                <Link href="/blog">
                  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
