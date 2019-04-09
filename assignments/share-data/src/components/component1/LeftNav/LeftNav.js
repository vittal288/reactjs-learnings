import React ,{Component} from 'react';


class LeftNav extends Component{

    render(){
        return(
            <div className="LeftNav">
                {this.props.checkBoxes.map((item,index)=>{
                    return(
                        <div className="input-group-text" key={item+index} >
                            <input id={index} type="checkbox" onChange={this.props.checkBoxClickEvt} value={item.name} />{item.name}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default LeftNav