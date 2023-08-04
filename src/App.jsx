import './styles/app.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import  {
  Home,
  Blog,
  Cart,
  Error,
  About,
  Contact,
  Login,
  Signup,
  Forgotpasword,
  Checkout,
  Details,
} from './pages/'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgotpasword" element={<Forgotpasword />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="details" element={<Details />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
