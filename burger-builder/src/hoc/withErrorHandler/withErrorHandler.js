import React,{Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Auxillary';

const withErrorHandler = (WrapperComponent, axios)=>{
    //returning an class based Component 
    return class extends Component{
        state ={
            error:null
        }

        //componentDidMount will executes once ll child component renders 
        //componentWillMount will executes before child component renders
        componentWillMount(){
            //request interceptors 
            this.requestInterceptor =  axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })

            //response interceptors
            this.responseInterceptor = axios.interceptors.response.use(res => res, error=>{
                this.setState({error:error});
            });
        }

        componentWillUnmount =()=>{
            console.log('COMPONENT UNMOUNT ', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler =()=>{
            this.setState({error:null})
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    } 
}


/*
    1.with all components we are attaching this withErrorHandler HOC component, due to this componentWillMount invokes and creates every instance of axios and leads to the memory leak
    2.To Avoid this memory leak issue, we have to unregister/eject axios instance when the component which is wrapped around withErrorHandler is not used anymore 
    2. So to do this, we have eject in componentWillUnMount method as showed in the code
    
*/
export default withErrorHandler;