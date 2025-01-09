import Image from "next/image"
import { kanit } from "../fonts/kanit"

const Main = () => {
  return (
    <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto mb-0">
      <div className="text-slate-600 bg-gradient-to-r from-slate-200 to-white rounded-xl py-1">
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
            <div className="text-center text-sm space-y-1 pb-2">
              <p>_____</p>
              <p>UX/UI | Front-End</p>
              <p>App-development</p>
            </div>
          </div>
          <div className="sm:col-span-2 bg-white px-12 py-4 space-y-3 text-sm text-slate-600 text-justify rounded-xl">
            <h1
              className={`text-center font-extrabold text-black text-4xl ${kanit.className}`}
            >
              Hi!
            </h1>
            <p>Welcome to my portfolio page.</p>
            <p>
              My name is <span className="font-semibold">Andreas</span> and I am
              a developer. Feel free to explore my projects and learn more about
              my journey in the About section.
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
