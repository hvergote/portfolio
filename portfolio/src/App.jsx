import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'



function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
    </div>
  )
}

export default App
