//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FaClock } from 'react-icons/fa';

const SecondsCounter = (props) => {
    return (
        <>
            <div className="container bg-dark" id="clock">
				<div className="row">
					<div className="col bg-light m-3 text-center" id="centenaDeMil"><strong>{props.hundredsUnit % 10}</strong></div>
					<div className="col bg-light m-3 text-center" id="decenaDeMil"><strong>{props.tensUnit % 10}</strong></div>
					<div className="col bg-light m-3 text-center" id="unidadDeMil"><strong>{props.thousandUnit % 10}</strong></div>
					<div className="col bg-light m-3 text-center" id="centenas"><strong>{props.hundreds % 10}</strong></div>
					<div className="col bg-light m-3 text-center" id="decenas"><strong>{props.tens % 10}</strong></div>
					<div className="col bg-light m-3 text-center" id="unidades"><strong>{props.units % 10}</strong></div>
				</div>
			</div>
        </>
    )
}

let contador = 0;
setInterval(()=>{
    const centenaDeMil = Math.floor(contador/100000);
    const decenaDeMil = Math.floor(contador/10000);
    const unidadDeMil = Math.floor(contador/1000);
    const centenas = Math.floor(contador/100);
    const decenas = Math.floor(contador/10);
    const unidades = Math.floor(contador/1);
    contador++;
    ReactDOM.render(<SecondsCounter units={unidades} tens={decenas} hundreds={centenas} thousandUnit={unidadDeMil} tensUnit={decenaDeMil} hundredsUnit={centenaDeMil} />, document.querySelector("#contenedor"))}
    ,1000);

    export default SecondsCounter;