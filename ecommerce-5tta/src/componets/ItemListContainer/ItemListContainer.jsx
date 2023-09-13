import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fetch from "../../utilidades/fetch"
import ItemList from "../ItemList/ItemList"

import "../ItemListContainer/itemlistcontainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState([true])
  const { cid } = useParams()

  useEffect(() => {
    if (cid) {
      fetch()
        .then(res => {
          return res
        })
        .then(respuesta => setProductos(respuesta.filter(producto => cid === producto.categoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      fetch()
        .then(res => {
          return res
        })
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [cid])

  return (
    <div className="container">
      {loading ? <h2>cargando...</h2> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer



