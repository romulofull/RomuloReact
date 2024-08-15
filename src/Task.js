/* export function TaskCard() {

    const cardStyles = {background: "#202020", color: '#fff', padding: '20px'};
    const titleStyle = {fontWeight: "bolder"}

return (<div style= {cardStyles}>
<h1 style={titleStyle}>Mis Tareas</h1>
<p>Tareas Realizadas</p>
</div>);
}
 */
/* import './task.css'
export function TaskCard(props) {

return (<div className= 'card'>
<h1 >Mis Tareas</h1>
<span>{props.ready === true ? 'Tarea realizada' : 'Tarea pendiente'}</span>
</div>);
} */

/* import './task.css'
export function TaskCard({ready}) {

return (<div className= "card">
<h1 >Mis Tareas</h1>
<span
    style= {ready? {background: 'green'}   :    {background: 'red' }}>
    {ready === true ? 'Tarea realizada' : 'Tarea pendiente'}</span>
</div>);
}
 */

import './task.css'
export function TaskCard({ready}) {

return (<div className= "card">
<h1 >Mis Tareas</h1>
<span
    className= {ready ? 'bg-green' :  'bg-red'}>
    {ready === true ? 'Tarea realizada' : 'Tarea pendiente'}</span>
</div>);
}