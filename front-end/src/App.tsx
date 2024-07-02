import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './features/Home'
import { Store } from './features/store/Store'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} /> 
            <Route path="/store" element={<Store />} />  
            {/* Add more routes here as needed */}
        </Route>
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
