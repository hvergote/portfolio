import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import ScrollToTop from "react-scroll-to-top";
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ScrollToTop id='scrollbtn'/>
      <div>
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
