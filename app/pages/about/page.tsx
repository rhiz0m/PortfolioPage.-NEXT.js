import Header from "@/app/components/shared/Header"
import Footer from "@/app/components/Footer"
import {
  faHouse,
  faUserGraduate, 
  faFileLines,
  faRocket,
} from "@fortawesome/free-solid-svg-icons"



const About = () => {
  const links = [
    {
      icon: faHouse,
      ariaLabel: "Home link",
      href: "/",
      title: "Home",
    },
    {
      icon: faUserGraduate,
      ariaLabel: "Education",
      href: "#education",
      title: "Education",
    },
    {
      icon: faFileLines,
      ariaLabel: "CV",
      href: "#cv",
      title: "CV",
    },
    {
      icon: faRocket,
      ariaLabel: "other",
      href: "#other",
      title: "Other",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <Header combinedLinks={links} />
      <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto">
        <h2 id="about">About page (in progress...)</h2>
        <h2 id="education"></h2>
        <h2 id="cv"></h2>
        <h2 id="other"></h2>
      </main>
    <Footer />
    </div>
  )
}

export default About
