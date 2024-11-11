import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Shared/Navbar/Navbar'
import Footer from './Shared/Footer/Footer'
import ProductDetail from './Pages/Products.tsx/ProductDetail'
import ViewMore from './Pages/viewMore/ViewMore'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail/:id' element={<ProductDetail/>} />
      {/* <Route path='/detail' element={<ProductDetail/>} /> */}
      <Route path='/viewmore' element={<ViewMore/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
