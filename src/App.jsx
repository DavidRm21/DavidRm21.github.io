import { Portfolio } from './pages/Portfolio'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Portfolio/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
