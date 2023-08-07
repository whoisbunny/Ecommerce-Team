import img8 from "../assets/images/products/f4.jpg";

const Newarrivals = () => {
  return (
    <>
      <div className="row text-center gap-2 mt-5">
        <div className="card ">
          <img src={img8} className=" card-img" alt="..." />
          <div className="card-body">
            <p className="card-text mb-2">addidas</p>
            <h3 className="mb-3">product.name </h3>
            <div className="card-footer m-auto text-center">
              <p className="text-danger fs-4">product.status</p>
              <p className="price">
                <span className="red"></span> <strike>$ 26 </strike>
              </p>
            </div>
          </div>
        </div>
        <div className="card ">
          <img src={img8} className=" card-img" alt="..." />
          <div className="card-body">
            <p className="card-text mb-2">addidas</p>
            <h3 className="mb-3">product.name </h3>
            <div className="card-footer m-auto text-center">
              <p className="text-danger fs-4">product.status</p>
              <p className="price">
                <span className="red"></span> <strike>$ 26 </strike>
              </p>
            </div>
          </div>
        </div>
        <div className="card ">
          <img src={img8} className=" card-img" alt="..." />
          <div className="card-body">
            <p className="card-text mb-2">addidas</p>
            <h3 className="mb-3">product.name </h3>
            <div className="card-footer m-auto text-center">
              <p className="text-danger fs-4">product.status</p>
              <p className="price">
                <span className="red"></span> <strike>$ 26 </strike>
              </p>
            </div>
          </div>
        </div>
        <div className="card ">
          <img src={img8} className=" card-img" alt="..." />
          <div className="card-body">
            <p className="card-text mb-2">addidas</p>
            <h3 className="mb-3">product.name </h3>
            <div className="card-footer m-auto text-center">
              <p className="text-danger fs-4">product.status</p>
              <p className="price">
                <span className="red"></span> <strike>$ 26 </strike>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Newarrivals;
