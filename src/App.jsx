import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import ScrollToTop from "react-scroll-to-top";
import Skills from './components/Skills'


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
      </div>
    </div>
  )
}

export default App
