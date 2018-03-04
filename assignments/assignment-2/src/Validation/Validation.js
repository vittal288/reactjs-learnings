import React from 'react';

const Validation = (props) =>{
    let validationMesssage = 'Text is too Long';
    if(props.inputLength <=  5)  {
        validationMesssage = 'Text is too short'
    }
    return(
        <div>
            {/* <span>{props.inputLength}</span> */}
            <span>{validationMesssage}</span>
             {/* {
                 props.inputLength <= 5 ? 
                <span>Text is too short</span>: 
                <span>Text is too long !!!</span>
              } */}
        </div>
    );
}

export default Validation;