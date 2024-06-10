
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import ExpertiseSection from "./components/ExpertiseSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactmeSection from "./components/ContactmeSection"
function App() {


  //adding the projects data


  return (
    <div className=" bg-raisinBlack">

      {/* The navbar */}
      <Nav />

      {/* The hero of the home page */}
      <Hero />


      {/* My expertise Section */}
      <ExpertiseSection />

      {/* The projects section */}
      <ProjectsSection />

      {/* Contact me section */}
      <ContactmeSection />
    </div>
  )
}

export default App
