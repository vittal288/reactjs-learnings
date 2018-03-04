import React from 'react';

const UserOutPut = (props) =>{
    const pCls ={       
        fontWeight:'bold',
        fontSize:'32px',
        margin:'20px',
        padding:'20px',
        border:'2px solid #000',
        backgroundColor:'#d9d9d9'
    }
    return(
        <div>
            <p style={pCls}>{props.username}</p>           
        </div>
    )
}

export default UserOutPut;