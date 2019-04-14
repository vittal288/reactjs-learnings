import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state ={
        fullPost :null,
        error:false
    }
    //as soon props value changed then make a HTTP call 
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.id)){// to avoid infinity calls 
                axios.get('/posts/'+ this.props.id)
                .then((response)=>{
                    //below like make infinity calls 
                    this.setState({
                        fullPost: response.data
                    })
                })
                .catch(error=>{
                    //console.log(error);
                    this.setState({
                        error:true
                    })
                })
            }
        }
    }

    onDeletePostHandler =(id)=>{
        console.log(id);
        axios.delete('/posts/'+id)
        .then((response)=>{
            console.log('Del', response);
        })
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.state.error){
             post = <p style={{textAlign:'center'}}>Something Went Wrong...!</p>;
        }
        if(this.props.id){
            
            post = <p style={{textAlign:'center'}}>Loading...</p>;
        }
        if( this.state.fullPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.onDeletePostHandler(this.state.fullPost.id)}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;