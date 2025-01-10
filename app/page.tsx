import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Video from "./components/video/Video"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Video />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
