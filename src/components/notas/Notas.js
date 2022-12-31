import React, { useState } from "react";

function Notas() {
    // State Hook - `useState`
    const [notas, setNotas] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {

        if (!notas) {
            alert("Introduce la nota");
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 100),
            value: notas,
        };

        setItems((oldList) => [...oldList, item]);
        setNotas("");
    }


    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    return (
        <div className="container-md card d-flex justify-content-center align-items-center mt-5 border-0" >

            <h1>Notas</h1>
            <div className="input-group-md col-md-4  d-flex justify-content-center mt-5">
                <input
                    type="text"
                    placeholder="Agregar una nota ..."
                    className="form-control mx-2"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}                    
                />
                <button onClick={() => addItem()} className="btn btn-primary text-white">Agregar</button>               
            </div>

            <div className=" container d-flex justify-content-center align-items-center mt-5" >
                <ul className="list-group d-flex flex-row justify-content-center flex-wrap bd-highlight mx-3 ">
                    {items.map((item) => {
                        return (
                            <div className="mx-3">
                                <li className="list-group-item d-flex justify-content-between mb-3 bg-warning shadow-lg p-3 mb-5 rounded" key={item.id} style={{ width: 200, height: 200 }}>
                                    <p className="mt-5">{item.value}</p>
                                    <button
                                        className="border-0 bg-transparent d-flex justify-content-start"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="black" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Notas;