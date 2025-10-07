import './App.scss'
import Bring from './components/Bring/Bring'
import Cards from './components/Cards/Cards'
import Equipment from './components/Equipment/Equipment'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Scan from './components/Scan/Scan'
import Teams from './components/Teams/Teams'
import Links from './components/Links/Link'
import Build from './components/Build/Build'
import Footer from './components/Footer/Footer'
import DropCount from './components/DropCount/DropCount'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Cards/>
    <DropCount/>  
    <Equipment/>
    <Bring/>
    <Build/>
    <Teams/>
    <Links/>  
    <Scan/>
    <Footer/>
    </>
  )
}

export default App
