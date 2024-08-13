import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<h1>Hello Bonito Mundo</h1>)

/*function Greeting() {
    return <div>
    <h1>Hola Mundo</h1>
    <p>lorem123</p></div>
}*/

//root.render(Greeting())

/*root.render(<div>  {Greeting()}
    {Greeting()}
    <Greeting></Greeting>
    <Greeting />

</div>)*/

/*function Greetingname() {
    const name = 'Romulo'
    return <h1>{10 +20}</h1>
    //return <h1> name </h1>
}
root.render(Greetingname())*/


function Greetingnames() {
    const married = false
 /*   if (married) {
        return <h1>Estoy casado</h1>
     } else {return <h1>No estoy casado</h1>
}}*/


return <h1> {married ? 'estoy casado': "no estoy casado"}</h1>}

root.render(Greetingnames())