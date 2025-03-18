import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import OurServices from './pages/OurServices/OurServices'
import Team from './pages/Team/Team'
import Footer from './components/Footer/Footer'
function App() {
 
  return (
    <>
      <Header/>
      <HomePage/>
      <About/>
      <OurServices/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
