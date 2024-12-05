import Image from "next/image"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto mt-12">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-2xl font-bold text-center p-2">Portfolio</h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 items-center justify-center">
          <div className="flex justify-center">
            <Image
              className="rounded-full p-2 object-cover"
              aria-hidden
              src="/images/andreas.jpg"
              alt="profile icon"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <p className="sm:col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Main
