import Image from "next/image"
import Link from "next/link"

// <nav className="row-start-3 flex gap-8 flex-wrap items-center justify-center bg-white p-1">

const Header = () => {
  return (
    <header className="sticky top-0 bg-black p-2">
      <nav className="flex gap-12">
        <Link
          href="/pages/projects"
          className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-blue-300 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </Link>
        <a
          className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-blue-300 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
          href="https://uneedevs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          UneeDevs
        </a>
        <Link
          href="/pages/about"
          className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-blue-300 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About
        </Link>
        <a
          className="transition duration-500 ease-in-out hover:scale-105 hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center bg-orange-400 text-background gap-2 hover:bg-blue-300 dark:hover:bg-[#ccc] hover:text-blue-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://www.linkedin.com/in/andreas-antonsson-12209024b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/linkedin.png"
            alt="Window icon"
            width={28}
            height={28}
          />
        </a>
      </nav>
    </header>
  )
}

export default Header
