import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/mtrix.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="mt-8">
        <nav className="row-start-3 flex gap-8 flex-wrap items-center justify-center bg-white p-1">
          <Link
            href="/pages/projects"
            className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-orange-400 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
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
            className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-orange-400 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
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
            className="hover:translate-x-2 transition duration-500 ease-in-out hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center text-orange-400 bg-foreground text-background gap-2 hover:bg-slate-800 dark:hover:bg-[#ccc] hover:text-blue-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
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
            className="transition duration-500 ease-in-out hover:scale-105 hover:underline hover:underline-offset-4 rounded-md border border-solid border-transparent flex items-center justify-center bg-white text-background gap-2 hover:bg-orange-400 dark:hover:bg-[#ccc] hover:text-blue-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white rounded-md p-4 ml-4">
        <h1 className="h-1 font-bold">Portfolio Page</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row max-w-3xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
      <footer className="bg-slate-800 text-blue-200 rounded-sm p-4 ml-4">
        <p>Contact Information</p>
      </footer>
    </div>
  )
}

export default Home
