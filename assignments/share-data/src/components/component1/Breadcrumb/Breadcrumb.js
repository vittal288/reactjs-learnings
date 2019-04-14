import React, {Component} from 'react';


class Breadcrumb extends Component{

    render(){
        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                       {this.props.data.map((item,index)=>{
                        return(
                                 <li className="breadcrumb-item" key={index}><a onClick={()=>this.props.onClicked(this.props.url)}>{item.name}</a></li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        )
    }
}

export default Breadcrumb;