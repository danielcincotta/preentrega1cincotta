import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, updateDoc, where } from 'firebase/firestore'



function CartContainer() {
    const {deleteCart, deleteProd, totalPrice,  cartList} = useCartContext()

const addOrder =  () =>{

    const order = {}
    order.buyer = {name: "daniel", 
                    email: "daniel@hotmail.com"
                }
    order.items = cartList.map(prod =>{
        return {id: prod.id, name: prod.name , price: prod.price, quantity: prod.quantity}
        })
    order.total = totalPrice()


    const dataBase = getFirestore()
    const ordersCollection = collection(dataBase, "orders")
    addDoc(ordersCollection, order)
    .then(
        resp => console.log(resp)  
    )
    
    /*
    order.items.forEach(element => {
        
        const db = getFirestore()
        const queryDoc = doc(db, 'products', element.id) // id useParams
        getDoc(queryDoc)
        .then(
            resp => ( { id: resp.id, ...resp.data() } ) 
        )
        .then(resp => {
        
            const stockUpdate = parseInt(resp.stock) - element.quantity
                const updateProduct = doc(dataBase, "products", element.id)
                updateDoc( updateProduct , {stock: stockUpdate})
            
            } 
        )
            
    })*/
            
    


}


  return (
    <>           
        {
            cartList.map(prod => 
                <div key={prod.id}>
                    <img src={prod.image} className="w-25"/>
                    {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
                    <button className="btn btn-danger" onClick={ () => deleteProd(prod.id) }> X </button>
                </div>
            )
        }
        <button onClick={ () => deleteCart() }>Vaciar Carrito</button>
        <h3>Precio total: {totalPrice()}</h3>

        <form >
                <input 
                id= "nombre"
                    type="text" 
                    name='name'
                    placeholder="ingrese el nombre" 

                />
                
                <input 
                id = "correo"
                    type="text" 
                    name='email'
                    placeholder="ingrese el email"
            
                   
                />
                
                <button onClick={addOrder}>Enviar</button>
            </form>
    </>
  )
}

export default CartContainer