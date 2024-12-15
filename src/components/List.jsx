import { useState, useEffect } from "react"

const List = () => {
    const [ products, setProducts ] = useState([])

    //Logica aquí...
    

    //Hook: funciones de React para el manejo de los ciclos de vida de los componentes

    //Fetch con promesas
    const data = fetch('https://fakestoreapi.com/products')
                    .then(res=>res.json())
    console.log("DATA: ", data)
    setProducts(data)

    //Async/Await
    // const dataAsync = async () => {
    //     const data = await fetch('https://fakestoreapi.com/products')
    // }

    console.log("products: ", products)

    return(
        <>
            <table>
                <thead>
                    <tr>
                        data.map()<th>Nombre:</th>
                        <th>Categoria:</th>
                        <th>Precio:</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((producto) => {
                        <tr>
                            <td>{producto.title}</td>
                            <td>{producto.category}</td>
                            <td>{producto.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default List