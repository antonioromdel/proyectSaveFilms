import React, { useState } from "react";
import FormularioEditar from "./FormularioEditar";

const ArticlePeli = ({element, getPelis, setListado}) => {

    const {id, nombre, description} = element
    const [editar, setEditar] = useState(0)

    const borrarPeli = id => {
        let pelisGuardadas = getPelis()
        
        let nuevoListadoPeliculas = pelisGuardadas.filter(peli => {
            return peli.id !== parseInt(id) 
         })

        setListado(nuevoListadoPeliculas)
        localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas))
    }

    return (
        <article className="peli-item">
                <h3 className="title">{nombre}</h3>
                <p className="description">{description}</p>

                <button className="edti" onClick={() => {setEditar(id)}}>Editar</button>
                <button className="delete" onClick={() => borrarPeli(id)}>Eliminar</button>

                {editar == id && (
                    <FormularioEditar 
                        key={id}
                        element={element}
                        getPelis={getPelis}
                        setEditar={setEditar}
                        setListado={setListado}
                    />
                )}

        </article>
    )

}

export default ArticlePeli