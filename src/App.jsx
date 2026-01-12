import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
