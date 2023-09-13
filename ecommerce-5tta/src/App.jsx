
import Navbar from './componets/Navbar/Navbar'
import Saludo from './componets/Saludo/Saludo'
import Contador from './componets/Contador/Contador'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'



import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
       
       
        <Route path='/categoria/:cid' element={<ItemListContainer/>} />
        <Route path='/descripcion/:pid' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
