import HeaderProjects from "./HeaderProjects"
import Footer from "@/app/components/Footer"
import { faReact,  } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  const internal = [
    {
      icon: faArrowLeft,
      ariaLabel: "Home link",
      href: "/",
      title: "",
    },
    {
      icon: faReact,
      ariaLabel: "React link",
      href: "front-end-projects",
      title: "Front End Apps",
    },
    {
      icon: faMobileScreenButton,
      ariaLabel: "Mobile Apps link",
      href: "/pages/about",
      title: "#mobile-projects",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderProjects internalLinks={internal} />
      <div id="front-end-projects">
        <h1>Front End Projects</h1>
      </div>
      <div id="#mobile-projects">
        <h1>Mobile Projects</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
