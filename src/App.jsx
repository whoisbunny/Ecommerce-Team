import './styles/app.scss'
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import {
  Home,
  Cart,
  Error,
  About,
  Contact,
  Login,
  Signup,
  Forgotpasword,
  Checkout,
  Details,
  Shop,
} from "./pages/";
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgotpasword" element={<Forgotpasword />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="details" element={<Details />} />
            <Route path="*" element={<Error  />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App
