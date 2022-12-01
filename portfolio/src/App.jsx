import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import ScrollToTop from "react-scroll-to-top";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ScrollToTop id='scrollbtn'/>
      <div>
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App
