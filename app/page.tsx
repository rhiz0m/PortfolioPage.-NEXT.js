import Header from "./components/shared/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Video from "./components/video/Video"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo, faBriefcase } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  const links = [
    {
      icon: faCircleInfo,
      ariaLabel: "About link",
      href: "/pages/about",
      title: "About",
    },
    {
      icon: faBriefcase,
      ariaLabel: "Projects link",
      href: "/pages/projects",
      title: "Projects",
    },
    {
      icon: faGithub,
      ariaLabel: "Github link",
      title: "Github",
      url: "https://github.com/rhiz0m",
    },
    {
      icon: faLinkedin,
      ariaLabel: "linkedIn link",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/andreas-antonsson-12209024b/",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Video />
      <Header combinedLinks={links} />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
