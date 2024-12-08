
//importacion de props
//por desestructuracion
//muy utilizado con Typescript
// {...variableA, variableB}
// function BienvenidaDinamico({saludo, nombre}) {
    
//     return (
//         <div>{saludo + " " + nombre}</div>
//     )
// }

// export default BienvenidaDinamico

//funcion tradicional de Javascript
// function BienvenidaDinamico(props) {
    
//     return (
//         <div>{props.saludo + " " + props.nombre}</div>
//     )
// }

// export default BienvenidaDinamico

//función flecha de Javascript
const BienvenidaDinamico = (props) => {
    return (
        <div>{props.saludo + " " + props.nombre}</div>
    )
}

export default BienvenidaDinamico