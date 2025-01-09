import Image from "next/image"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import ExternalLinks from "./navComponents/externalLinks"
import { kanit } from "../fonts/kanit"

const contactInfo = [
  {
    icon: faEnvelope,
    url: "mailto: antonsson.andreas@hotmail.com",
  },
]

const icons = [
  { nextjs: "/images/next.png" },
  { tailwind: "/images/tailwind.png" },
  { vercel: "/images/vercel.png" },
]

const Footer = () => {
  return (
    <footer className="bg-black p-4 mt-auto mb-0">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 justify-center items-center">
          <p className={`text-lg font-semibold text-white ${kanit.className}`}>
            Contact Me
          </p>
          <ExternalLinks links={contactInfo} />

          <div className="flex ml-10 justify-center items-center">
            <p className="text-xs text-white text-center">Technologies Used </p>
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="rounded-lg object-contain bg-white mx-2 p-1"
                aria-hidden
                src={Object.values(icon)[0]}
                alt={Object.keys(icon)[0]}
                width={45}
                height={15}
                layout="intrinsic"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
