import { Link } from "react-router-dom"


const Item = ({ producto }) => {
  return (
    <div className="card1 bg-secondary">
      <div className="">
        <img className="imagenes" src={producto.imagen} />
        <h2 className="prod">{producto.producto}</h2>
        <p className="precios">{producto.precio}</p>
        <div className="card-footer">
          <Link to={`/descripcion/${producto.id}`}>
            <button className="btn btn-outline-dark">descripcion</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item