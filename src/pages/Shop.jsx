import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API; 
const Shop = () => {
  return (
    <>
      <section className="shop-banner p-5">
        <div className="container-xxl">
          <div className="flex-center-column">
            <div className=" text-center">
              <div className="shop-details">
                <h1 className="text-white mb-3">
                  <b className="text-green">#100%</b> Off On All Products
                </h1>
                <p className="text-white fs-5">
                  Make your orders we will deliver..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row  gap-2 ">
            <Shopcontent />
          </div>
        </div>
      </section>
    </>
  );
}




const Shopcontent = () => {
  
  const [Products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state);
  
  useEffect(() => {
    allProducts();
  }, []);
  
  const allProducts = async () => {
    const responce = await fetch(`${API}/products`);
    const data = await responce.json();
    setProducts(data);

  };


const filterresult =async (catItem) => {
  const responce = await fetch(`${API}/products/category/${catItem}`);
  const data = await responce.json();
   setProducts(data);
};

  
const dispatch = useDispatch()
const addtoCart = (opt) => {
dispatch({ type: "addtoCart", payload: opt });
console.log(cartItems);


}
  return (





    <>
      <aside className="category-section">
        <div className=" text-green w-full  uppercase ">
          <h3 className="text-center ">category </h3>
          <div className="flex-center-column row gap-1 category-buttons ">
            <button
              className="category-btn uppercase"
              onClick={() => allProducts()}
            >
              all
            </button>

            <button
              className="category-btn uppercase"
              onClick={() => filterresult("men's clothing")}
            >
              men&apos;s clothing
            </button>
            <button
              className="category-btn uppercase"
              onClick={() => filterresult("women's clothing")}
            >
              women&apos;s clothing
            </button>
            <button
              className="category-btn uppercase"
              onClick={() => filterresult("jewelery")}
            >
              jewelery
            </button>
            <button
              className="category-btn uppercase"
              onClick={() => filterresult("electronics")}
            >
              electronics
            </button>
          </div>
        </div>
      </aside>
      <div className="flex product-section">
        <div className="row-grid-3">
          {Products.map((e) => {
            return (
              <>
                <ProductCard
            key={e.id}
            title={e.title}
            price={e.price}
            image={e.image}
            id={e.id}
            handler={addtoCart}
          />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}




const ProductCard = ({ title, id, image, handler, price }) => {
  return (<>
  
  
  <Link className="card" id={id} key={id}>
                  <img src={image} className=" card-img" alt="..." />
                  <div className="card-body">
                    <h4 className="mb-3 ">
                      {title ? title.slice(0, 50) : ""}...
                    </h4>
                    <div className="p-3 m-auto text-center">

                      <p className="price  mb-2">
                        <span className="text-green">${price} </span>&nbsp;
                      </p>
                      <Link
                        to="/details"
                        // onClick={() => viewProductDetails(id)}
                      >
                        <p className="text-center mb-3">
                          <button className="details_btn" id="clear-cart">
                            View Details
                          </button>
                        </p>
                      </Link>

                      <div className="flex-center mb-2">
                        <button className="cart-btn " onClick={()=>handler({id ,title,image, quantity:1})}>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </Link>
  </>)
}


export default Shop