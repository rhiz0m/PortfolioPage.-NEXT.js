import InternalLinks from "./navComponents/internalLinks"
import ExternalLinks from "./navComponents/externalLinks"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const internal = [
  {
    href: "/pages/about",
    title: "About",
  },
  {
    href: "/pages/projects",
    title: "Projects",
  }
]

const external =
  [
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  }
  ]

const Header = () => {
  return (
    <header className="bg-black p-4">
      <nav className="grid gap-4 sm:grid-cols-6 grid-cols-1 justify-items-stretch">
        <div className="col-span-2 flex gap-4">
          <InternalLinks links={internal} />
        </div>
        <div className="col-span-1 flex gap-4">
          <ExternalLinks links={external} />
        </div>
      </nav>
    </header>
  )
}

export default Header
