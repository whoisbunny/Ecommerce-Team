import { AiFillDelete } from "react-icons/ai";
import img8 from "../assets/images/products/f4.jpg";
import { useSelector } from "react-redux";


const Cart = () => {
  const {cartItems} = useSelector(state => state); 
  console.log(cartItems);


  return (
    <section className="cart">
      <div className="container-xxl p-5 w-full">
        <h2 className="text-center text-green uppercase mb-4">Cart</h2>
        <div className="cart-details mb-4">
<main className="p-5">

{cartItems.map((e)=>{
  return (
    <>
      <div className="cartItem " key={e.id}>
        <img src={e.image} alt={""} />
        <article>
          <h3>{e.title}</h3>
          <p>${e.price}</p>
        </article>
        <div>
          <button>-</button>
          <p>{11}</p>
          <button>+</button>
        </div>
        <AiFillDelete />
      </div>
    </>
  );
})}

  
</main>

        <aside className="cart_aside">
          <h2>Subtotal : $1515</h2>
          <h2>Shiping : $5515</h2>
          <h2>Tax : $115</h2>
          <h2>Total : 232123</h2>
        </aside>

        </div>
        {/* <h2 className="text-center text-red p-5 mb-4 ">No Items In Your Cart</h2> */}
      </div>
    </section>
  );
}

export default Cart