
function Saludo(props) {
  return (
    <div className="text-center"><h1>{props.saludo}</h1>
      <h2>{props.titulo}</h2>
    </div>
  )
}

export default Saludo