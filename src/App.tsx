import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App