import React, { useState } from "react";

const Buscador = ({listado, setListado}) => {

    const [busqueda, setBusqueda] = useState("")
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        e.preventDefault()
        
        let buscar = e.target.value
        setBusqueda(buscar)
        
        let pelisEncontradas = listado.filter( item => {
            return item.nombre.toLowerCase().includes(busqueda.toLowerCase()) 
        })

        if(busqueda.length <= 1 || pelisEncontradas <= 0){
            pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }

        setListado(pelisEncontradas)


    }

    return(

        <div className="search">
                <h3 className="title">Buscador</h3>
                {(noEncontrado && busqueda.length > 2) && (
                    <span>No se ha encontrado</span>
                )}
                <form action="">
                    <input type="text" placeholder="Buscar..." name="busqueda" autoComplete="off" value={busqueda} onChange={buscarPeli}/>
                    <button>Buscar</button>
                </form>
            </div>

    )

}

export default Buscador