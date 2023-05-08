import About from "./scenes/About"
import Contact from "./scenes/Contact"
import Navbar from "./scenes/global/Navbar"
import Header from "./scenes/Header"
import Projects from "./scenes/Projects"

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
