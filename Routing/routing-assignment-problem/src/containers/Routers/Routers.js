import React,{Component} from 'react';
import {Route,NavLink, Redirect, Switch} from 'react-router-dom';

import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';
import PageNotFound from '../PageNotFound/PageNotFound';

import "./Routers.css";

class Routers extends Component {

    render() {
        return (
            <div className="Router">
                <header>
                    <nav>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/courses">COURSES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">USERS</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="section">
                    <Switch>
                        <Route exact path="/courses" component={Courses}/>
                        <Route exact path="/coursesDetails/:id" exact component={Course}/>
                        <Route exact path="/users" component={Users}/>
                        <Redirect from="/allCourses" to="/courses" />
                        <Route component={PageNotFound}/>
                    </Switch>
                </section>
            </div>
        )
    }
}

export default Routers;