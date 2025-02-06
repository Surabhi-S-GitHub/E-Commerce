import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Navigation/Navigation";
import Product from "./Customer/Components/Product/Product";
import HomePages from "./Customer/Pages/HomePages/HomePages";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
import Order from "./Customer/Components/Order/Order";
import OrderDetails from "./Customer/Components/Order/OrderDetails";
import { Routes, Route } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
}

export default App;
