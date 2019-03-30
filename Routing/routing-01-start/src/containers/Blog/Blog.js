import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

class Blog extends Component {
    state={
        auth:false
    }
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/posts/" 
                                    activeClassName="my-active"
                                    activeStyle={{
                                        textDecoration:'underline',
                                        color:'#fa923f'
                                    }}
                                    exact>Posts</NavLink></li>
                            <li>
                                <NavLink to={{
                                    pathname:'/new-post',
                                    hash:'#submit',
                                    search:"?quick-submit=true"
                            }}>New</NavLink></li>   
                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" exact render={()=><h1>Home</h1>} />
                   <Route path="/" render={()=><h1>Home 2</h1>} /> 
                   <Route path="/" exact  render={()=> <Post />}/>
                */ }
                
                <Switch>{/* 
                        1. This switch HOC will helps to load only one component at time, if router path criteria met 
                        2. Order should be proper, otherwise leads to an error 
                        3. Once the criteria meets, the SWITCH stops scanning the elements 
                        4. It helps us to load one route at a time 
                    */}

                    {/**ROUTER GUARD */}
                    {this.state.auth ? <Route path="/new-post" exact  component={NewPost}/> : null}
                    
                    <Route path="/posts/" component={Posts}/>
                    <Route render={()=> <h1>PAGE NOT FOUND</h1>} />
                    {/*<Redirect from="/" to="/posts"/>*/}

                    {/*<Route path="/:id" exact  component={FullPost}/>*/}
                </Switch>
              
            </div>
        );
    }
}

export default Blog;