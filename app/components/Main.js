import Image from "next/image"
import { kanit } from "../fonts/kanit"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto">
      <div className="bg-gradient-to-r from-black to-slate-500 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center">
          <div className="justify-center max-w-[200px] mx-auto">
            <Image
              className="rounded-full p-2 object-cover"
              aria-hidden
              src="/images/aa.jpeg"
              alt="profile icon"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <div className="sm:col-span-2 bg-yellow-50 p-3">
            <h1 className="text-center font-extrabold text-3xl mb-2">Hi!</h1>
            <p className={`text-sm text-balance mb-2 ${kanit.className}`}>
              Welcome to my portfolio. I specialize in Front-End Development and
              App Development, driven by a passion for crafting intuitive and
              user-friendly digital experiences. Feel free to explore my
              projects and learn more about my journey in the About section.
            </p>
            <p className="text-sm text-balance mb-2">
              I would love to hear from you! Whether you&rsquo;re interested in
              collaborating, exchanging ideas, or simply connecting, don&rsquo;t
              hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
