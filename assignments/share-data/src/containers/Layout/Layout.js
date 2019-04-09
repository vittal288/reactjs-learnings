import React from 'react';

import Component1 from '../../components/component1/Component1';

const layout = (props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <Component1 />
            </div>
        </div>  
    );
}

export default layout;