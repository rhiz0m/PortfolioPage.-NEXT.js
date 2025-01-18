import { kanit } from "../../fonts/kanit"
import Header from "@/app/components/shared/Header"
import Footer from "@/app/components/Footer"
import { faReact, faArtstation } from "@fortawesome/free-brands-svg-icons"
import {
  faHouse,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons"
import Card from "../../components/shared/Card"

const Projects = () => {
  const links = [
    {
      icon: faHouse,
      ariaLabel: "Home link",
      href: "/",
      title: "Home",
    },
    {
      icon: faMobileScreenButton,
      ariaLabel: "Mobile Apps link",
      href: "#mobile-projects",
      title: "Mobile",
    },
    {
      icon: faReact,
      ariaLabel: "React link",
      href: "#front-end-projects",
      title: "Front End",
    },
    {
      icon: faArtstation,
      ariaLabel: "Other projects link",
      url: "https://www.artstation.com/rhiz0m",
      title: "Artstation",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <Header combinedLinks={links} />
      <main className="flex-grow flex-col items-center justify-center max-w-2xl mx-auto overflow-y-auto">
        <div
          id="#mobile-projects"
          className="flex flex-col items-center justify-center"
        >
          <h2
            className={`my-4 text-center font-extrabold text-black text-2xl ${kanit.className}`}
          >
            Mobile Projects
          </h2>
          <video
            className="h-96 rounded-lg shadow-md"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/reader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Card
            imageSrc="/images/apple.jpeg"
            imageAlt="Apple logo"
            title="IOS Development"
            description="Reader App"
            heading=""
            className=""
            content={
              <>
                <p>
                  This <span className="font-semibold">Reader App </span> is an
                  ongoing project designed to make reading more interactive and
                  engaging. Users can select a text, press the play button, and
                  the app will start the reader. The app highlights one word at
                  a time, allowing the user to focus and immerse themselves in
                  the content. For an added challenge, users can adjust the
                  speed at which the words are displayed. Additionally, users
                  have the option to paste their own text or write new content
                  directly in the app. The app is currently built using{" "}
                  <span className="font-semibold">SwiftUI </span>, a poetry-API,
                  the Combine framework, Coordinator Navigation, and follows
                  best practices like DAO, Repository, reusable components,
                  modifiers, and extensions. Authentication is handled through
                  Firebase. Future updates will incorporate a more robust{" "}
                  <span className="font-semibold">MVVM architecture</span>,
                  enhancing scalability and maintainability
                </p>
              </>
            }
          />
        </div>
        <div id="front-end-projects">
          <h2
            className={`my-4 text-center font-extrabold text-black text-2xl ${kanit.className}`}
          >
            Front End Projects
          </h2>
          <Card
            imageSrc="/images/reactLogo.png"
            imageAlt="react logo"
            title="Front End Development"
            description="Portfolio Page"
            heading=""
            className=""
            content={
              <>
                <p>
                  I completed this front end project as part of Meta’s{" "}
                  <span className="font-semibold">React Advanced </span>
                  course on <span className="font-semibold">Coursera</span>. It
                  showcases a portfolio-page that use controlled components and
                  form validation with Formik, along with API integration,
                  context management, and React hooks such as useRef, useEffect,
                  and useState. The styling is implemented using Chakra UI for a
                  clean and responsive design. I am excited to continue
                  developing and enhancing this project further.
                </p>
              </>
            }
            link="https://final-project-react-advanced.vercel.app/"
            linkText="Go to project →"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
