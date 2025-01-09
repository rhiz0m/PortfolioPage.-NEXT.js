import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import ExternalLinks from "./navComponents/externalLinks"
import { kanit } from "../fonts/kanit"

const contactInfo = [
  {
    icon: faEnvelope,
    url: "mailto: antonsson.andreas@hotmail.com",
  },
]

const Footer = () => {
  return (
    <footer className="bg-black p-4 mt-auto mb-0">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 justify-center items-center">
          <p
            className={`text-lg font-semibold text-white ${kanit.className}`}
          >
            Contact Me:
          </p>
          <ExternalLinks links={contactInfo} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
