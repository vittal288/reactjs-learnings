import React, { Component } from 'react';

import {Router, NavLink} from 'react-router-dom';

class Course extends Component {
    state ={
        courseTitle:null
    }
    goBackTOCourse =()=>{
        this.props.history.push('/courses');
    }
    componentDidMount(){
        console.log(this.props)
        var query = new URLSearchParams(this.props.location.search);
        for(let queryParam of query.entries()) {
            if(queryParam[1] !== this.state.courseTitle){
                this.setState({courseTitle:queryParam[1]});
            }
        }
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
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;