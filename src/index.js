import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<h1>Hello Bonito Mundo</h1>)

function Greeting() {
    return <div>
    <h1>Hola Mundo</h1>
    <p>lorem123</p></div>
}

//-root.render(Greeting())

root.render(<div>  {Greeting()}
    {Greeting()}
    <Greeting></Greeting>
    <Greeting />

</div>)