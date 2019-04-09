import React, {Component} from 'react';

class Chart extends Component{

    render(){
        return(
            <div>
                {this.props.data.map((item,index)=>{
                   return(
                       <span key={item+index} id={index} style={{cursor:'pointer'}} className="badge badge-pill badge-secondary" onClick={this.props.ChartClickEvnt}>{item.name } depth:{item.depth}</span>
                   );
                })}
            </div>
        )
    }

}


export default Chart;