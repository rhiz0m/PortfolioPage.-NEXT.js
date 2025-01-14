import { kanit } from "../../fonts/kanit"
import HeaderProjects from "./HeaderProjects"
import Footer from "@/app/components/Footer"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons"
import Card from "../../components/shared/Card"

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
      href: "#front-end-projects",
      title: "FrontEnd",
    },
    {
      icon: faMobileScreenButton,
      ariaLabel: "Mobile Apps link",
      href: "#mobile-projects",
      title: "Mobile",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderProjects internalLinks={internal} />
      <main className="flex-grow flex items-center justify-center max-w-2xl mx-auto overflow-y-auto">
        <div id="front-end-projects">
          <h2
            className={`my-4 text-center font-extrabold text-black text-2xl ${kanit.className}`}
          >
            Front End Projects
          </h2>
          <Card
            imageSrc="/images/metaLogo.jpg"
            imageAlt="Meta Final Project"
            title="Meta - React Advanced"
            description="Final course project"
            heading=""
            className=""
            content={
              <>
                <p>
                  This project was completed as part of Meta’s{" "}
                  <span className="font-semibold">React Advanced </span>
                  course on Coursera. It showcases the use of controlled
                  components and form validation with Formik, along with API
                  integration, context management, and React hooks such as
                  useRef, useEffect, and useState. The styling is implemented
                  using Chakra UI for a clean and responsive design. I am
                  excited to continue developing and enhancing this project
                  further.
                </p>
              </>
            }
            link="https://final-project-react-advanced.vercel.app/"
            linkText="Go to project"
          />
        </div>
        <div id="#mobile-projects">
     
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
