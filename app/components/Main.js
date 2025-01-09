import Image from "next/image"
import { kanit } from "../fonts/kanit"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto mb-0">
      <div className="bg-gradient-to-r from-black to-slate-800 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center">
          <div className="justify-center max-w-[200px] mx-auto">
            <Image
              className="rounded-full object-cover"
              aria-hidden
              src="/images/aa.jpeg"
              alt="profile icon"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <div className="sm:col-span-2 bg-white space-y-3 text-sm text-slate-600 text-justify p-6">
            <h1
              className={`text-center font-extrabold text-black text-4xl ${kanit.className}`}
            >
              Hi!
            </h1>
            <p className="text-slate-800">Welcome to my portfolio page.</p>
            <p>
              My name is <span className="font-semibold">Andreas</span> and I
              specialize in UX/UI, Front-End and App Development. Feel free to
              explore my projects and learn more about my journey in the About
              section.
              <br />
            </p>
            <p>
              <span className="italic text-justify">
                I would love to hear from you!
              </span>{" "}
              Whether you&rsquo;re interested in collaborating, exchanging
              ideas, or simply connecting, don&rsquo;t hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
