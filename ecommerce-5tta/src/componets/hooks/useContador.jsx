import { useState } from 'react'
export const useContador = () => {
    const [count, setCount] = useState(0)
    const agregar = () => {
        setCount(count + 1)
    }
    const eliminar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const carrito = () => {
        if (count > 0) {
            console.log("se agregaron al carrito " + count + " productos")
        }
    }
    return { count, agregar, eliminar, carrito }
}