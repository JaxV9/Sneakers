import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './features/Home'
import { Cart } from './features/cart/Cart'


function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} /> 
            <Route path="/cart" element={<Cart />} /> 
            {/* Add more routes here as needed */}
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
