import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const API = import.meta.env.VITE_API;

const Details =  () => {
  const productId = useSelector(state => state.product.id)

  useEffect(() => {
    ProductData()
  }, [])


  const [product, setproduct] = useState([])
  const ProductData = async ()=>{

     axios.get(`${API}/products/${productId}`).then((e)=>{
      console.log(e.data);
      setproduct(e.data);
    })
  }
  
  
console.log(product);
  return (
    <>
      <div className="container-xxl p-5">
        <div className="row product_detail ">
          
          <div className="image_section">fgjd</div>

          <div className="detail_section">mmm</div>
        </div>
      </div>
    </>
  );
}

export default Details;