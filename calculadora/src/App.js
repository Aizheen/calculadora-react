import "./App.css";
import Boton from "./components/Button";
import "../src/stylesheets/Boton.css";
import Display from "./components/Display";
import Clear from "./components/Clear";
import { useState } from "react";
import { evaluate } from "mathjs";
import { FaReact } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <h1>Calculadora React <span className="react"><FaReact/></span></h1>
      
      </div>
      <div className="contenedor-calculadora">
        <Display input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          {" "}
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          {" "}
          <Boton className="igual" manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear manejarClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
