import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import "./index.css";
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import WorkPage from './pages/OurWork'
import ContactPage from "./pages/Contact";


function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/work' element={<WorkPage />} />
        {/* <Route path='/team' element={<TeamPage />} />
        <Route path='/blogs' element={<BlogsPage />} /> */}
        <Route path='/contact' element={<ContactPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App



