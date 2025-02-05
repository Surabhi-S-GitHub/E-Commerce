import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Navigation/Navigation";
import Product from "./Customer/Components/Product/Product";
import HomePages from "./Customer/Pages/HomePages/HomePages";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
function App() {
  return (
    <>
    <Navigation/>
    <div>
      {/* <HomePages/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      <Checkout/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
