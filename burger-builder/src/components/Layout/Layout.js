import React from 'react';

import Aux from '../../hoc/Auxillary';
import Classes from './Layout.module.css';


const layout = (props)=> (
    <Aux>
        <div>Toolbar,SideDrwaer, Backdrop</div>
        <main className={Classes.content}>
            {props.children}
        </main>
    </Aux>
); 

export default layout;