import React,{Component} from 'react';
import {Route,NavLink, Redirect, Switch} from 'react-router-dom';

import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';
import PageNotFound from '../PageNotFound/PageNotFound';
import Dashboard from '../Dashboard/Dashboard';

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
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">DASHBOARD</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="section">
                    <Switch>
                        <Route  path="/users" component={Users}/>
                        <Route  path="/courses" component={Courses}/>
                        <Route  path="/dashboard" component={Dashboard} />
                        {/*
                            <Route exact path="/courses/:id" exact component={Course}/>
                        */}
                        
                        <Redirect from="/all-courses" to="/courses" />
                        <Route component={PageNotFound}/>
                    </Switch>
                </section>
            </div>
        )
    }
}

export default Routers;