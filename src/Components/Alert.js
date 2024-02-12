import React from 'react'

function Alert(props) {
    const captialize = (word) => {
        let newWord = word.toLowerCase()
        return newWord.charAt(0).toUpperCase() + newWord.slice(1)

    }
  return (
    <div style={{height:'50px'}}>
  { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {captialize(props.alert.type)} : {props.alert.message}
  
</div>}
</div>
  )
}

export default Alert
