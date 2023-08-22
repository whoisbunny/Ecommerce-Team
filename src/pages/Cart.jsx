import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch();
  const { cartItems, subTotal, total, tax, shiping } = useSelector(
    (state) => state.cart

  );

  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  const increment = (id) => {
    dispatch({ type: "addtoCart", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  const deleteHandle = (id) => {
    dispatch({ type: "deleteHandle", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <section className="cart">
      <div className="container-xxl p-5 w-full">
        <h2 className="text-center text-green uppercase mb-4">Cart</h2>
        {cartItems.length > 0 ? (
          <div className="cart-details mb-4">
            <main className="p-5">
              {cartItems.map((e) => {
                return (
                  <>
                    <div className="cartItem " key={e.id}>
                      <img src={e.image} alt={""} />
                      <article>
                        <h3>{e.title}</h3>
                        <p>${e.price}</p>
                      </article>
                      <div>
                        <button onClick={() => decrement(e.id)}>-</button>
                        <p>{e.quantity}</p>
                        <button onClick={() => increment(e)}>+</button>
                      </div>
                      <AiFillDelete onClick={() => deleteHandle(e.id)} />
                    </div>
                  </>
                );
              })}
            </main>

            <aside className="cart_aside">
              <h2>Subtotal : ${subTotal}</h2>
              <h2>Shiping : ${shiping}</h2>
              <h2>Tax : ${tax}</h2>
              <h2>Total : ${total}</h2>
            </aside>
          </div>
        ) : (
          <h2 className="text-center text-red p-5 mb-4 ">
            No Items In Your Cart
          </h2>
        )}
      </div>
    </section>
  );
};

export default Cart;
