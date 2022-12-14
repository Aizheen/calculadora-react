import React from "react";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != ".";
  };

  return (
    <div
      className={`btn-contenedor 
      ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}
export default Boton;
