import Image from "next/image"
import Link from "next/link"

// <nav className="row-start-3 flex gap-8 flex-wrap items-center justify-center bg-white p-1">

const Header = () => {
  return (
    <header className="bg-black p-2 ml-4 mr-4">
      <nav className="grid gap-4 sm:grid-cols-6 grid-cols-2 justify-items-stretch">
        <Link
          href="/pages/projects"
          className="transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-blue-300 bg-foreground text-background gap-2 hover:bg-slate-800 hover:text-white text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
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
        <Link
          href="/pages/about"
          className="transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-blue-300 bg-foreground text-background gap-2 hover:bg-slate-800 hover:text-white text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5 "
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
          className="transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center bg-orange-400 text-black gap-2 hover:bg-blue-300 text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
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
        <a
          className="transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center bg-orange-400 text-black gap-2 hover:bg-blue-300 text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
          href="https://github.com/rhiz0m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/github.png"
            alt="Github icon"
            width={28}
            height={28}
          />
        </a>
      </nav>
    </header>
  )
}

export default Header
