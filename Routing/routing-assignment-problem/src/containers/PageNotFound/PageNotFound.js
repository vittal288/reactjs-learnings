import React,{Component} from 'react';

import {NavLink} from 'react-router-dom';

class PageNotFound extends Component {
    goBackTOCourse =()=>{
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">Page Not Found!</h1>
                <hr className="my-4"/>
                <p>Please click below button.</p>
                <p className="lead">
                <button 
                    onClick={this.goBackTOCourse}
                    type="button" 
                    className="btn btn-outline-primary  btn-sm">Back To Courses</button>
                </p>
            </div>
        );
    }
}


export default PageNotFound;