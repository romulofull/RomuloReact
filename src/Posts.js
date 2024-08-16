/* export const Posts= () => {
    return <ul>
        <li>Titulo de una Publicacion </li>
        <li>Titulo de una Publicacion 2</li>
    </ul>


} */

/* export const Posts= () => {
return <button onClick= {() => {
    alert ('obteniendo datos')
}}>
Traer datos </button>
} */

//*FETCH API

/* export const Posts= () => {
    return <button onClick= {() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
    }}>
    Traer datos </button>
    }
 */
import {VscBug, VscGlobe} from 'react-icons/vsc'
export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.xyz/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscBug/>
      <VscGlobe/>
      Traer datos
    </button>)

};
