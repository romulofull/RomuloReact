/*export function Greetingnames() {
   /* function add(x,y) {
      return x+y;}
    return (
        <h1>{add(10,30)}</h1>);
  


      return <h1>Componentes de React</h1>
  }

  export function UserCards() {
    return <h1>UserCard</h1>
  }*/

/*export function Greetingnames(props) {
    console.log(props)
       return <h1>Componentes de React</h1>
   }
 
 
   export function UserCards() {
     return <h1>UserCard</h1>
   }*/

/*export function Greetingnames(props) {
    console.log(props)
       return <h1>{props.title}</h1>
   }
 
 
   export function UserCards() {
     return <h1>UserCard</h1>
   }*/

/*export function Greetingnames({title, name = "User"}) {
    console.log(title, name)
       return <h1>{title}, dice {name} </h1>
   }*/

/*export function UserCards(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💲 {props.amount}</p>
      <p>{props.married? 'married': "single"}</p>
<ul>    
<li> City: {props.address.city}</li>
<li> Address: {props.address.street}</li>

</ul>

    </div>
  );
}*/

/*export function UserCards({name, amount, married, address, greet}) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💲 {amount}</p>
      <p>{married? 'married': "single"}</p>
<ul>    
<li> City: {address.city}</li>
<li> Address: {address.street}</li>

</ul>

    </div>
  );
}*/

export function UserCards({name, amount, married, address, greet}) {
  
  return (
    <div>
      <h1>{name}</h1>
      <p>💲 {amount}</p>
      <p>{married? 'married': "single"}</p>
<ul>    
<li> City: {address.city}</li>
<li> Address: {address.street}</li>

</ul>

    </div>
  );
}