// import { useContext } from "react"
// import { CartContext } from "../context/CartContext"
// import { Link } from "react-router-dom"
// import CartItem from "../cartItem/CartItem"


// const Cart = () => {
//     const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

//     if (totalQuantity === 0) {
//         return (
//             <div>
//                 <h1> No hay item en el carrito</h1>
//                 <Link to='/' className="option">productos</Link>
//             </div>
//         )
//     }
//     return (
//         <div>
//             {cart.map(p => <CartItem key={p.id} {...p}/>)}
//             <h3>Total : ${total}</h3>
//             <button onClick={() => clearCart()} className="button">Limpiar carrito</button>
//             <Link to='/checkout' className="option">check out</Link>
//         </div>
//     )
// }

// export default Cart