import Header from "./components/Hearder";
import Meals from "./components/Meals";
import { CartContextProviders } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProviders>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProviders>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
