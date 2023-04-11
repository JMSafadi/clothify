import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ProductDetail from './pages/ProductDetails'
import Home from './pages/Home'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="overflow-hidden">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
