import React, { useEffect, useState } from "react";
import ArticlePeli from "./ArticlePeli";

const Listado = ({listado, setListado}) => {


    const getPelis = () => {
        const listadoPelis = JSON.parse(localStorage.getItem("pelis"))
        setListado(listadoPelis)
        return listadoPelis
    }

    useEffect(() => {
        getPelis()
        
    }, [])


    return (
        <>

            {
                (listado != null) ? (
                    listado.map(element => {
                        return (
                            <ArticlePeli 
                            key={element.id}
                            element={element}
                            getPelis={getPelis}
                            setListado={setListado}
                        />
                        )
                    })
                ) : (
                    <h2>No hay peliculas para mostrar</h2>
                )
                
            }       
                      
        </>
    )
}

export default Listado

