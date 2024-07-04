import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './features/Home'

import { Store } from './features/store/Store'

import { Cart } from './features/cart/Cart'
import { Projet } from './features/Projet/Projet'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} /> 

            <Route path="/store" element={<Store />} />  

            <Route path="/cart" element={<Cart />} /> 

            <Route path="/projet" element={<Projet />} /> 

            {/* Add more routes here as needed */}
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
