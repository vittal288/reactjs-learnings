import React, { Component } from 'react';

import {Router, NavLink} from 'react-router-dom';

class Course extends Component {
    goBackTOCourse =()=>{
        this.props.history.goBack();
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <div className="float-right">
                    <button 
                        onClick={this.goBackTOCourse}
                        type="button" 
                        className="btn btn-outline-primary  btn-sm">Back To Courses</button>
                </div>
                <h1>{this.props.location.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;