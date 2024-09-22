import "./App.css";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    incrementQuantity,
    cleanCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      ></Header>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((g) => (
            <Guitar key={g.id} guitar={g} addToCart={addToCart}></Guitar>
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
