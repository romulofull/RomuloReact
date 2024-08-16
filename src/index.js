import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Greetingnames, UserCards } from "./Greetingnames";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const handleChange = (e) => {
console.log(e.target.value)
} */

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

/*function Greetingnames() {
  const married = false;
  /*   if (married) {
        return <h1>Estoy casado</h1>
     } else {return <h1>No estoy casado</h1>
}}

  return <h1> {married ? "estoy casado 😃" : "no estoy casado🤫"}</h1>;
}

root.render(Greetingnames());*/

/* function Greetingnames() {
  const user = {
    firstName: "ryan",
    lastName: "Ray",
  };

  return <h1> { JSON.stringify(user)  }</h1>;
}

root.render(Greetingnames());*/

/*function Greetingnames() {
    const user = {
      firstName: "Rom",
      lastName: "RomC",
    };
  
    return (<div><h1>{user.firstName}</h1>
    <h3>{user.lastName}</h3>
    </div>);
}
  
  root.render(Greetingnames());*/

/*function Greetingnames() {
  const married = true;
  return (
    <div>
      <h1> {married.toString()}</h1>
    </div>
  );
}
root.render(Greetingnames());*/

/*function Greetingnames() {
  function add(x,y) {
    return x+y}
  return (
    <div>
      <h1>{add(10,30)}</h1>
    </div>
  );

root.render(<div><Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/></div>);}*/

/*function Greetingnames() {
  function add(x,y) {
    return x+y;}
  return (
      <h1>{add(10,30)}</h1>);
}
root.render(<><Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/></>);*/

/*root.render(<><Greetingnames/>
<Greetingnames/>
<UserCards/>
<Product/>
<Navbar/>
<Greetingnames/>
<Greetingnames/></>);*/

/*root.render(<><Greetingnames title="hola"/>
  <Greetingnames x="bye"/>
  <Greetingnames y= {30}/>
  <Greetingnames z={true}/>
  <Greetingnames a={[1,2,3]}/></>);*/

/*root.render(<><Greetingnames title="hola MYSQL" name="Juan"/>
  <Greetingnames title="hola Javascript" name="David"/>
  <Greetingnames title="hola Html"/>
  <Greetingnames title="hola CSS"/>
  <Greetingnames title="hola React"/></>);*/

/* root.render(<>
<UserCards name= "Romulo" 
amount= {3000}  
married={true} 
points= {[99, 33.3, 22.2]} 
address= {{street: '123 Main Street',
city: 'New York'}}
greet={function () { alert ('Hello')}}

/>
<UserCards name= "Remo" 
amount= {2500}  
married={true} 
points= {[98, 33.4, 20.2]} 
address= {{street: '123 Yoga',
city: 'Los Angeles'}}
greet={function () { alert ('Hello')}}/>


</>);
 */

/* root.render(<>
<Button text= 'Click me'/>
<Button text= 'Pay'/>
<Button text= 'Go to'/>
<Button text= 'Go to'/>
<Button text= '3000'/>
<Button text= {true}/>
</>)
 */

/* root.render(<>
  <Button text= 'Click me'/>
  <Button text= 'Pay'/>
  <Button text= ' '/>
  <Button text= 'Go to'/>
  <Button text= '3000'/>
  <Button text= {[1,2,3]}/>
  </>) */

/* root.render(<>
  <Button text= 'Click me'/>
  <Button text= 'Pay'/>
  <Button text= ' ' name= 'Joe'/>
  <Button text= 'Go to'/>
  <Button text= '3000'/>
  <Button text= {[1,2,3]}/>
  </>) */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input onClick= {function(){
    alert('input seleccionado')
  }}/>
  </>) */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input onChange= {function(){
    console.log ('escribiendo en el Input')
  }}/>
  </>)
 */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input id="hola" onChange= {function(e){
    console.log (e.target.value)
  }}/>
  </>) */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input id="hola" onChange= {(e) => {
    console.log (e.target.value)
  }}/>
  </>) */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input id="hola" onChange= {handleChange}/>
  </>); */
/* 
root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  <input id="hola" onDoubleClick= {() => console.log ("double click")}/>
  </>); */

/* root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  {<Button text="Saludar"/> } 
<form onSubmit= {() => console.log("enviando datos del formulario")}>
  <h1>Registro de usuario</h1> 
  <button>Send</button> 
  </form>
  </>);  */

/*root.render(<>
  {/* <TaskCard ready={true}/>
  <Saludar/> }*/
/*   <Button text="Saludar"/>  */
/*<form onSubmit= {(e) => {e.preventDefault()
console.log('enviado')}}>
  <h1>Registro de usuario</h1> 
  <button>Send</button> 
  </form>
  </>);*/

/* root.render(<>
<form onSubmit= {(e) => {e.preventDefault()
alert('enviado')}}>
  <h1>Registro de usuario</h1> 
  <button>Send</button> 
  </form>
  </>); */

/* const user = [{
id: 1,
name: "romulo",
images: "https://robohash.org/romulo"},

{id: 2,
  name: "remo",
  images: "https://robohash.org/ecuador",
}
,
{id: 3,
  name: "ecuador",
  images: "https://robohash.org/colombia",
}]
 */
/* root.render(<>
  {user.map ((user, i) => {
return <h1 key='i'>{user.name}</h1>
  })}
  
  </>)
 */
/* root.render(<>
  {user.map ((user, i) => {
return <h1 key={i}>{user.name}</h1>
  })}
  
  </>) */

/* root.render(<>
  {user.map ((user, i) => {
return (<div key={i}> <h1>{user.name}</h1>
<img src={user.images}/> </div>);
  })}
  
  </>) */

//*   names.map()   names.filter()    names.find()    names.reduce()    names.sort()

/*   function Counter() {

    const [ counter, setCounter] = useState(0)
return (
  <div>
    <h1>Counter: {counter} </h1>
    <button onClick= {() => {setCounter(100)}}> Sumar </button>
  </div>
)
  }
  root.render(<>
  <Counter/>
    </>); */

function Counter() {
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}> Sumar </button>
      <button onClick={() => setCounter(counter - 1)}> Restar </button>
      <button onClick={() => setCounter(1000)}> Reiniciar </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
