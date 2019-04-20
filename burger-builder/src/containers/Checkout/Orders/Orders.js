import React, {Component} from 'react';

import Order from '../../../components/Order/Order';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders:[],
        loading:false
    }

    componentDidMount(){
        this.setState({
            loading:true
        });
        
        axios.get('/order.json')
        .then((response)=>{
            let fetchedOrders =[];
            for(let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id:key
                });
            }
           
            this.setState({
                loading:false,
                orders:fetchedOrders
            });
        })
        .catch(error=>{
            console.log('ERROR',error);
            this.setState({
                loading:false
            });
        });
    }

    render(){
        let order = null;
        if(this.state.loading){
            order =<Spinner />
        }else{
            order =  <div>
                        <h1 style={{textAlign:'center'}}>Your Orders</h1>
                        {this.state.orders.map((order)=>{
                            return(
                                <Order 
                                    ingredient={order.ingredients} 
                                    key={order.id}
                                    price={+order.price}/>
                            )
                        })}
                    </div>
        }
        return(
            <div>
                {order}
            </div>
        )
    }
}


export default withErrorHandler(Orders,axios);