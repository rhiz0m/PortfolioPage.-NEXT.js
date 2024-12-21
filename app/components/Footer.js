import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import ExternalLinks from "./navComponents/externalLinks"

const contactInfo = [
  {
    icon: faEnvelope,
    url: "mailto: antonsson.andreas@hotmail.com",
  },
]

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-blue-200 rounded-sm p-4 mt-auto">
      <h1 className="text-center text-lg font-semibold mb-2">Contact Info</h1>
      <div className="flex flex-col items-center">
        <p className="flex gap-4 justify-center items-center">
          <span className="font-semibold text-white">Mail:</span>
          <ExternalLinks links={contactInfo} />
        </p>
      </div>
    </footer>
  )
}

export default Footer
