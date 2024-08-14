import React from "react";
import ReactDOM from "react-dom/client";
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

function Greetingnames() {
  function add(x,y) {
    return x+y;}
  return (
      <h1>{add(10,30)}</h1>);
}
root.render(<><Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/>
<Greetingnames/></>);



