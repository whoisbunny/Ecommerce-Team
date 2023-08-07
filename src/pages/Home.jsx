import { Link } from "react-router-dom";
import Featuredproducts from "../components/Featuredproducts";
import Newarrivals from "../components/Newarrivals";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="back-details">
            <p className="mb-3">Trade in offer</p>
            <h1>Super Value Deals</h1>
            <h2>On all products</h2>

            <p className="mb-3">Save more today with Apneck</p>

            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* <Hero/> */}

      <section className="featured_products p-5">
        <div className="container-xxl">
          <div className="">
            <div className="text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="repair-details text-center">
              <h5 className="mb-3">Repair Services</h5>
              <h2 className="mb-3">
                On 70% Off on All Products And Accessories
              </h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals p-4">
        <div className="container-xxl ">
          <div className="flex-center-column">
            <h1>New Arrivals</h1>
            <p>Your Best Designer Outfits</p>
          </div>
          <Newarrivals />
        </div>
      </section>
    </>
  );
};

export default Home;
