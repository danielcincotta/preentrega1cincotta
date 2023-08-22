
import Navbar from './componets/Navbar/Navbar'
import Saludo from './componets/Saludo/Saludo'
import Contador from './componets/Contador/Contador'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navbar />
      <Saludo saludo="Bienvenidos a Compu.Net" titulo="Esperamos su compra" />
      <Contador />
    </div>
  )
}

export default App
