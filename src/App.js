// import logo from './logo.svg';
import "./App.css";
import Counter from "./Counter.js";
import Form from "./Form.js";
import Product from "./Product.js";
import Tour from "./tour-component/Tour.js";
import UseEffect from "./use-effect/UseEffect.js";

const data = [
  {
    name: "Nirma",
    price: "800",
  },
  {
    name: "soap",
    price: "1000",
  },
];

// definig products here
// {/* rendering product from Product component */}
//if your adding {}, add return also otherwise direct return element non need of return keyword
let products = data.map((ele) => (
  <Product key={ele.id} name={ele.name} price={ele.price} />
));

function App() {
  return (
    <div className="App w-full flex flex-col gap-4 items-center ">
      <Counter />
      <Form />
      {/* //display products */}
      {products}
    <Tour />
      <UseEffect />
    </div>
  );
}

export default App;
