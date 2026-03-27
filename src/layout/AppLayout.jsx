import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Project from '../Pages/Project'      
  
function AppLayout() {

  const routes = <>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
   <Route path="/project" element={<Project/>} />
    <Route path='*'
      element={ 
        <Navigate to={"/"} />
      } />
  </>
  return (
    <>
    <Header/>
      <Routes>
        {routes}
      </Routes>
      <Footer/>
    </>
  )
}

export default AppLayout