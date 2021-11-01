import React from 'react'

function Hello(name,color,isSpecial){
    return(
        <div style={{color:props.color }}>
        Hello, {props.name}!</div>
    )
}
Hello.defaultProps = {
    color:'pink',
    name:'무명'
}
export default Hello;