import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import { Home, Skills, About, Products } from './pages/index'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/skills' element={<Skills />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
      </Routes>
    </Router>
  )
}

export default App
