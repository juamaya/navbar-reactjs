import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Api from './pages/Api'
import Contact from './pages/Contact'
import Footer from './componentes/footer/Footer'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
       
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/api' element={<Api />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </>

  )
}

export default App
