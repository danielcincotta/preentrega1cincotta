
import { useContador } from '../hooks/useContador'

function Contador() {
    const { count, agregar, eliminar, carrito } = useContador()
    return <div className='text-center'>
        <span className='fs-2 fw-bold'>{count}</span>
        <button onClick={agregar}>+</button>
        <button onClick={carrito}>agregar a carrito</button>
        <button onClick={eliminar}>-</button>
    </div>
}


export default Contador