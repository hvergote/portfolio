import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Desktop from './components/desktop'
import Home from './components/home'

function App() {

  return (
    <>
      <Desktop />
      {/* <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </BrowserRouter> */}
    </>
  )
}

export default App
