import React, {Component} from 'react';


class ErrorBoundary extends Component{
    state = {
        hasError:false,
        errorMessage :''
    }

    componentDidCatch = (error,info) =>{
        this.setState({
            hasError:true,
            errorMessage:error
        })
    }

    //HTML
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>{this.state.errorMessage}</h1>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>{this.props.children}</h1>
                </div>
            )
        }
    }
}

export default ErrorBoundary;