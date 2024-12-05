import Image from "next/image"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto mt-12">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-2xl font-bold text-center">Portfolio</h1>
        <div className="flex p-2">
          <div className="flex-[1]">
            <Image
            className="rounded-full border-e-red-50 "
              aria-hidden
              src="/images/andreas.jpg"
              alt="profile icon"
              width={300}
              height={300}
              layout="responsive"
            ></Image>
          </div>
          <p className="flex-[2] ml-8">
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
