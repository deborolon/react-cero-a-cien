//componente clase
//import {Component} from "react"

// class ButtonDefault extends Component {

//     //logica
//     //"this"

//     render(){
//         return(
//             <>
//                 <h1>Esto es un boton!</h1>
//                 {/* funcion anonima para que se invoque cuando corresponde */}
//                 <button onClick={() => alert("Hola mundo!")}>Click</button>
//             </>
//         )
//     }
// }

// export default ButtonDefault

const ButtonDefault = () => {
    //logica
    const sendAlert = () => alert("Hola soy una alerta!")

    return(
        <>
            <h1>Esto es un boton!</h1>
            <button onClick={sendAlert}>Click</button>
        </>
    )
}

export default ButtonDefault