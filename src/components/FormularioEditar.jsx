import React from "react";

const FormularioEditar = ({element, getPelis, setEditar, setListado}) => {

    const {id, nombre, description} = element

    const guardarEdicion = (e, id) => {
        e.preventDefault()
        
        let target = e.target

        const pelisAlmacenadas = getPelis()

        const index = pelisAlmacenadas.findIndex(item => {
            return item.id === id
        })

        let peliAcutalizada = {
            id: id,
            nombre: target.titulo.value,
            description: target.descripcion.value
        }

        // Actualizar peli en el indice que corresponde
        pelisAlmacenadas[index] = peliAcutalizada

        // Guardar nuevo array actualizado
        localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas))
        setListado(pelisAlmacenadas)
        setEditar(0)

    }

    return (
        <div className="edit_form">
            <h3 className="title">Editar Pelicula</h3>

            <form action="" onSubmit={ e => guardarEdicion(e, id)}>

                <input type="text" name="titulo" className="titulo_editado" defaultValue={nombre}/>
                <textarea name="descripcion" id="" defaultValue={description} className="descripcion editada"></textarea>
                <button type="submit" className="editar">Actualizar</button>

            </form>

        </div>
    )
}

export default FormularioEditar

