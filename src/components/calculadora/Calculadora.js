import React, { useState } from 'react'

import '../calculadora/Calculadora.css'

function Calculadora() {
    const [resultado, setResultado] = useState("");

    const clickBoton = (e) =>{
        setResultado(resultado.concat(e.target.name));
    }

    const limpiar = () => {
        setResultado("")
    }

    const regresar = () => {
        setResultado(resultado.slice(0, resultado.length -1))
    }

    const calcular = () => {
        try{
            setResultado(eval(resultado).toString());            
        }catch(err){
            setResultado("Error")
        }
    }
    return (
        <>
            <div className='contenido'>
                <form>
                    <input className='input' type="text" value={resultado} />
                </form>
                <div className='botones'>
                    <button className='boton btn-limpiar' onClick={ limpiar } id="limpiar">Limpiar</button>
                    <button className='boton btn-limpiar' onClick={ regresar} id="regresar">C</button>
                    <button className='boton btn-operadores' name="/" onClick={clickBoton }>&divide;</button>
                    <button className='boton' name="7" onClick={clickBoton }>7</button>
                    <button className='boton' name="8" onClick={clickBoton }>8</button>
                    <button className='boton' name="9" onClick={clickBoton }>9</button>
                    <button className='boton btn-operadores' name="*" onClick={clickBoton }>&times;</button>
                    <button className='boton' name="4" onClick={clickBoton }>4</button>
                    <button className='boton' name="5" onClick={clickBoton }>5</button>
                    <button className='boton' name="6" onClick={clickBoton }>6</button>
                    <button className='boton btn-operadores' name="-" onClick={clickBoton }>&ndash;</button>
                    <button className='boton' name="1" onClick={clickBoton }>1</button>
                    <button className='boton' name="2" onClick={clickBoton }>2</button>
                    <button className='boton' name="3" onClick={clickBoton }>3</button>
                    <button className='boton btn-operadores' name="+" onClick={clickBoton }>+</button>
                    <button className='boton' name="0" onClick={clickBoton }>0</button>
                    <button className='boton' name="." onClick={clickBoton }>.</button>
                    <button className='boton btn-resultado' onClick={calcular} id="igual">=</button>
                </div>
            </div>
        </>
    )
}

export default Calculadora