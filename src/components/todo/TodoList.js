import React, { useState } from "react";

import Alertas from "../todo/Alertas";
import Listas from "../todo/Listas";

import '../todo/Todo.css'


function TodoList() {

    const [tareas, setTareas] = useState("")
    const [lista, setLista] = useState([])
    const [editar, setEditar] = useState(false)
    const [editarId, setEditarId] = useState(null)
    const [alerta, setAlerta] = useState({ show: false, msg: "", type: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!tareas){
            showAlerta(true, "danger", "Por favor inroduce la tarea")
        }else if(tareas && editar){
            setLista(
                lista.map((item)=>{
                    if(item.id === editarId){
                        return{...item, title: tareas}
                    }
                    return item
                })
            );
            setTareas("");
            setEditarId(null);
            setEditar(false);
            showAlerta(true, "success", "Tareas Modificada")
        } else{
            showAlerta(true, "success", "Tarea agregada a la lista");
            const newItem = {id: new Date().getTime().toString(), title: tareas};
            setLista([...lista, newItem]);
            setTareas("");
        }
     }

    const showAlerta = (show = false, type = "", msg = "") => {
        setAlerta({show, type, msg});        
    }

    const removerItem = (id) => {
        showAlerta(true, "danger", "Tarea eliminada");
        setLista(lista.filter((item) => item.id !== id))
     }
    const editarItem= (id) => {
        const editarItem = lista.find((item) => item.id === id);
        setEditar(true);
        setEditarId(id);
        setTareas(editarItem.title)
     }

    const limpiarLista = () => {
        showAlerta(true, "danger", "No hay tareas asignadas");
        setLista([]);
     }

    return (

        <section className="section-center">
            <form onSubmit={handleSubmit}>
                {alerta.show && <Alertas {...alerta} removeAlert={showAlerta} list={lista} />}
                <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                    Lista de Tareas
                </h3>
                <div className="mb-3 form">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Introduce la tarea"
                        onChange={(e) => setTareas(e.target.value)}
                        value={tareas}
                    />
                    <button type="submit" className="btn btn-success">
                        {editar ? "Editar" : "Agregar"}
                    </button>
                </div>
            </form>

            {lista.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                    <Listas items={lista} removerItem={removerItem} editarItem={editarItem} />
                    <div>
                        <button className="btn btn-warning" onClick={limpiarLista}>
                            Borrar tareas
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default TodoList;



