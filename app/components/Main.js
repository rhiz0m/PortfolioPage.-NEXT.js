import Image from "next/image"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto">
      <div className="bg-slate-600 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center">
          <div className="flex justify-center max-w-[200px] mx-auto">
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
          <div className="sm:col-span-2 bg-white p-3" >
            <h1 className="text-lg text-center font-semibold">Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
