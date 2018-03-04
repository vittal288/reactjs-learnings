import React from 'react';


const Char = (props) =>{
    const divStyle ={
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black',
        cursor:'pointer'
    }
    return (
        <div style={divStyle} onClick={props.click}>{props.char}</div>
    )
}

export default Char;