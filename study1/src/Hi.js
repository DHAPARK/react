import React from 'react'

function Hi(name,color,isSpecial){
    return(
        <div style={{color}}>{isSpecial ? <b>*</b> : null}
        Hello, {name}!</div>
    )
}
Hello.defaultProps = {
    color:'pink',
    name:'무명'
}
export default Hi;