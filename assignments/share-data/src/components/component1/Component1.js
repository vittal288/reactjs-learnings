import React, {Component} from 'react';

import Chart from './Charts/Charts';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import LeftNav from './LeftNav/LeftNav';
import Aux from '../../hoc/Auxillary';

const checkBoxes =[
{
    name:'Age',
    id:'1'
},
{
    name:'Sex',
    id:'2'
},
{
    name:'Gender',
    id:'3'
},{
    name:'Range',
    id:'4'
},
{
    name:'Place',
    id:'5'
},
{
    name:'City',
    id:'6'
}
];

const chartsData =[
    {
        name:'Chart 1',
        depth:1,
        url:'/chart1'
    },
    {
        name:'Chart 2',
        depth:1,
        url:'/chart2'
    },
    {
        name:'Chart 3',
        depth:1,
        url:'/chart3'
    },
    {
        name:'Chart 4',
        depth:2,
        url:'/chart4'
    },
    {
        name:'Chart 5',
        depth:2,
        url:'/chart5'
    },
    {
        name:'Chart 6',
        depth:3,
        url:'/chart6'
    },
    {
        name:'Chart 7',
        depth:3,
        url:'/chart7'
    },
    {
        name:'Chart 8',
        depth:4
    },
]

var checkBoxArr =[];

class Component1 extends Component {

    state = {
        breadCrumbData:[
            {
                name:'Diabetes Adherence',
                depth:0,
                url:'/diabetesAdherence'
            }
        ]
    };
   
    // checkbox click event handler
    checkBoxClickEvtHandler =(evt)=>{
        var id = +evt.currentTarget.id
        checkBoxArr.push(checkBoxes[id]);
        this.updateBreadCrumbData(checkBoxArr);
    }
    
    //chart click event handler
    chartClickEventHandler =(event)=>{
        var id = +event.currentTarget.id
        this.updateBreadCrumbData(chartsData[id]);
    }
    
    //generate breadcrumb data
    updateBreadCrumbData = (newItems) => {
        var breadCrumbData =[...this.state.breadCrumbData];
        console.log('Event Data', newItems);
        var obj = {};
        
       
        if(newItems.length){//checkbox
           for(var i=0;i<newItems.length;i++){
               breadCrumbData.push(newItems[i]);
           }

        }else{//chart
           
            obj.name = newItems.name;
            obj.url = newItems.url;
            obj.depth = newItems.depth;

            if(breadCrumbData.length === 0){
                breadCrumbData.push(obj);
            }


            for (var i = 0; i < breadCrumbData.length; i++) {
                if (breadCrumbData[i].depth !== newItems.depth) {//Prevent pushing the name of circle which is same level
                    breadCrumbData.push(obj);
                } else if (breadCrumbData[i].depth === newItems.depth) {//Replace circle, on selection of circle in same level
                    breadCrumbData[i] = obj;
                }
            }
        }
       
        this.setState({
            breadCrumbData:this.removeDuplicates(breadCrumbData)
        });

        console.log('BreadCrumb Data', breadCrumbData);
    }


    //remove duplicates from array
    removeDuplicates = (arr, prop) => {
        if (prop === undefined) {
            var uniqueArr = [];
            let charMap = new Map();
            arr.forEach((item) => {
                if (charMap.has(item)) {
                    let value = charMap.get(item);
                    charMap.set(item, value++);
                } else {
                    charMap.set(item, 1);
                }
            });
    
            // convert object keys  to array 
            charMap.forEach((value, key) => {
                uniqueArr.push(key);
            });
            return uniqueArr;
    
        } else {
            for(var i=0;i<arr.length -1 ;i++){
                if (arr[i][prop] === arr[i + 1][prop]) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        }
    
    }

    render(){
        return(
            <Aux>
                <div className="col-md-4">
                    <LeftNav checkBoxes={checkBoxes} checkBoxClickEvt={this.checkBoxClickEvtHandler}/>
                </div>
                <div className="col-md-8">
                    <Breadcrumb data={this.state.breadCrumbData}/>
                    <Chart data={chartsData} ChartClickEvnt={this.chartClickEventHandler.bind(this)}/>
                </div>
            </Aux>
        );
    }
}

export default Component1;