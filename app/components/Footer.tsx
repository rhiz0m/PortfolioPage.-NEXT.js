import Image from "next/image"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import CombinedLinks from "./navComponents/CombinedLinks"
import { kanit } from "../fonts/kanit"

const contactInfo = [
  {
    icon: faEnvelope,
    ariaLabel: "email link",
    title: "Email",
    url: "mailto: antonsson.andreas@hotmail.com",
  },
]

const icons = [
  { nextjs: "/images/next.png" },
  { tailwind: "/images/tailwind.png" },
  { typescript: "/images/typescript.png" },
  { vercel: "/images/vercel.png" },
]

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black p-1">
      <div className="flex gap-4 items-center mx-1  my-4">
        <p className={`text-lg font-semibold text-white ${kanit.className}`}>
          Contact Me:
        </p>
        <CombinedLinks links={contactInfo} />
      </div>
      <div className="flex gap-2 col-span-2 items-center mb-4">
        <p className="text-xs text-white text-center">Technologies Used </p>
        {icons.map((icon, index) => (
          <Image
            key={index}
            className="rounded-lg object-contain bg-white mx-2 p-1"
            aria-hidden
            src={Object.values(icon)[0]}
            alt={Object.keys(icon)[0]}
            width={50}
            height={15}
            layout="intrinsic"
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
