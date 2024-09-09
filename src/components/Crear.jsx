import React, { useState } from "react";
import { SaveStorage } from "../helpers/SaveStorage";

const Crear = ({setListado}) => {

    const tituloComponente = "Añadir Película"    

    const getDatesForm = (e) => {
        e.preventDefault()
        
        let target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value

        const pelicula = {
            id: new Date().getTime(),
            nombre: titulo,
            description: descripcion
        }

        SaveStorage("pelis", pelicula)
        setListado(elementos => {
            return [...elementos, pelicula]
        })
        e.target.reset()

    }

    return (

        <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                <form onSubmit={getDatesForm}>
                    <input required type="text" placeholder="Titulo" id="titulo" name="titulo"/>
                    <textarea required name="descripcion" id="descripcion" placeholder="Descripción"></textarea>
                    <button type="submit">Enviar</button>
                </form>
        </div>
    )

}

export default Crear