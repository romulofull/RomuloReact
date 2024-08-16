import React from "react";
import ReactDOM from "react-dom/client";
import {Greetingnames, UserCards} from './Greetingnames'
import Product, {Navbar} from './Product'
import {Button} from './Button'
import {TaskCard}  from './Task'
import {Saludar} from './Saludar'
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const root = ReactDOM.createRoot(document.getElementById("root"));
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

root.render(<>
  <TaskCard ready={true}/>
  <Saludar/>
  <Button text="Saludar"/>
  </>)