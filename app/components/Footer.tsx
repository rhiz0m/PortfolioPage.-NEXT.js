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
    <footer className="flex flex-col items-center bg-black p-1 mt-auto">
      <div className="flex gap-4 my-2">
        <p className={`text-lg font-semibold text-white ${kanit.className}`}>
          Contact Me
        </p>
        <ExternalLinks links={contactInfo} />
      </div>
      <div className="flex gap-4 col-span-2 items-center my-2">
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
    </footer>
  )
}

export default Footer
