import { useState } from 'react'

const Contador = () => {
    const [count, setCount] = useState(0)
    const agregar = () => {
        setCount(count + 1)
    }

    return (
        <div className='text-center'><span className='fs-2 fw-bold'>{count}</span>
            <button onClick={agregar}>comprar</button></div>
    )
}

export default Contador
