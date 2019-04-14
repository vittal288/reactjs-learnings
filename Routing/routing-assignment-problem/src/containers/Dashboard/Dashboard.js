import React ,{Component} from 'react';

import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Component3 from './Component3/Component3';

import {Route,NavLink, Redirect, Switch} from 'react-router-dom';

class Dashboard extends Component{
    state ={
        activeComponent:null
    }
    componentDidMount(){
        console.log(this.props);
    }
    
    componentWillUnmount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>
                <header>
                    <nav>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={this.props.location.pathname + "/component1"}>COMPONENT 1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={this.props.location.pathname + "/component2"}>COMPONENT 2</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={this.props.location.pathname + "/component3"}>COMPONENT 3</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section>
                    <Route path ={this.props.match.url + '/:component'} component={Component1} />
                </section>
            </div>
        )
    }
}

export default Dashboard;