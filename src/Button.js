/* import PropTypes from 'prop-types'
export function Button({text}) {
    console.log(text)
return <button>
    {text}
</button>
} */

/* import PropTypes from 'prop-types'
export function Button({text}) {
    console.log(text)
if (!text) {
console.error('el texto es requerido')
}
  return <button>
    {text}
</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
} */

/* import PropTypes from 'prop-types'
export function Button({text, name ='Usuario'}) {
   
  return <button>
    {text} -{name}
</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
} */

/* import PropTypes from 'prop-types'
export function Button({text, name}) {
   
  return <button>
    {text} -{name}
</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
name: 'Some user'
} */

/* import PropTypes from 'prop-types'
export function Button({text, name}) {
   
  return <button onClick={function(){
    console.log('Hola Mundo')
  }}>
    {text} -{name}
</button>
}

 */
/* Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
name: 'Some user'
} */