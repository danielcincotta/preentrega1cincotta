import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fetch from "../../utilidades/fetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({})
  const [loading, setLoading] = useState([true])
  const { pid } = useParams()

  useEffect(() => {
    fetch((pid))
      .then(res => {
        return res
      })
      .then(respuesta => {
        const prod = respuesta.find(obj => {
          return obj.id === Number(pid)
        })
        setProductos(prod)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [pid])

  return (
    <div>
      {loading ? <h2>cargando...</h2> : <ItemDetail producto={productos} />}
    </div>
  )
}
export default ItemDetailContainer