import InternalLinks from "./navComponents/internalLinks"
import ExternalLinks from "./navComponents/externalLinks"
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo, faBriefcase } from "@fortawesome/free-solid-svg-icons"


const internal = [
  {
    icon: faCircleInfo,
    href: "/pages/about",
    title: "About",
  },
  {
    icon: faBriefcase,
    href: "/pages/projects",
    title: "Projects",
  },
]

const external = [
  {
    icon: faGithub,
    title: "Github",
    url: "https://github.com/rhiz0m",
  },
  {
    icon: faLinkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/andreas-antonsson-12209024b/",
  },
]

const Header = () => {
  return (
    <header className="bg-white mx-0 sm:mx-12">
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-auto py-2 px-3">
        <div className="flex gap-4 justify-center">
          <InternalLinks links={internal} />
        </div>
        <div className="flex gap-4 justify-center">
          <ExternalLinks links={external} />
        </div>
      </nav>
    </header>
  )
}

export default Header
