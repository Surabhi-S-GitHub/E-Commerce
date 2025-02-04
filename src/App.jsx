import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Navigation/Navigation";
import Product from "./Customer/Components/Product/Product";
import HomePages from "./Customer/Pages/HomePages/HomePages";


function App() {
  return (
    <>
    <Navigation/>
    <div>
      {/* <HomePages/> */}
      <Product/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
