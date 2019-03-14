import React, {Component} from 'react';



class MyChildComponent extends Component {

    state ={myChildData: 'Old value'}


    render(){
        console.log('[Child.js] rendered()')
         return (
            <p>{this.props.myChildDataProps}</p>
        )
    }
}


export default MyChildComponent;


