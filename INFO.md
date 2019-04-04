ReactJS: To create basic skeleton and creating a components 
React DOM: rendering the react components to real DOM

Babel: PreCompile JS framework : compiles down JSX to nextGen JS code to native browser JS code 

WHY React ?
1. Easy to maintain UI state 
2. Frameworks yeilds to write better code with JSX 
3. Biig community/ Eco system support for complext problem statements 


 @@@@ ES6 and ES7 Features @@@@
1. Classes, Inheritance 
2. Method and functions 
3. Arrowed functions 
4. Spread ... : used to split up the array elements or object properties  
5. Destructuring 
6. Reference Type and Premitive type 

######
const oldArray =[1,2,3];
const newArray =[...oldArray,4,5]
console.log(newArray); 
o/p-->[1, 2, 3, 4, 5]
-----------------------------------------
const oldObject = {'fName':'Vittal'};
const newObj = {...oldObject,'lName':'kamkar'}
o/p --> {
  fName: "Vittal",
  lName: "kamkar"
}
##########
5. Rest Operators:  merges  all function arguments into an array and we can perform all array methods on arguments 
function(...args){
    return args.length;
}

console.log(filter(1,2,4,5));
o/p --> 4

#######
Destructuring: this Operator will pull out each array items or object keys and assigned to each variable 
Array Destructuring: 
[a,b] = [1,2,3,4];
console.log(a); --> 1
console.log(b); --> 2

Object Destructuring:
{name} = {name:'Vittal',age:28}
console.log(name) --> vittal
console.log(age) --> undefined 

##### Reference type and Premitive type 
Premitive type:
const number =1;
const num2 = number;
console.log(num2) ---> 1
==>here creates a copy of number and assigned to num2 so called Premitive type , its keeps the copy of variable

Reference Type: (objects and arrrays  and Reference types)
const person ={name:'vittal'};
const person2 = person;
console.log(person2) -->{name:'vittal'}

if assigned different value to name to person object then see the output 
person.name ='Sandy';
console.log(person2); --> {name:'Sandy '} but if it is copied from person to person2 then output should be {name:'vittal'} but here it is not copied instead 
it is stored it Reference(using pointer concept) so could not able to get the expected output.

But how to copy the object and array : solution is use spread Operator as shown below 
const person1 ={'name':'Vittal'};
const person2 ={
    ...person1
}
person1.name ='Vittal';
console.log(person1) --> {'name':'Vittal'};


@@@@@@@@@@@@@@@@@@@@ REACTJS @@@@@@@@@@@@@@@@@@@@@
--> create react app npm tool like ng cli to create react application 
--> Create a new app : npx create-react-app <app_name>

Course Name: JSX Restrictions

Props: are allow to pass data from parent(wrapping) component to child(embeded) component 
State: State will change the component well state from within, chaning the state will also trigger the UI update 
-->State can accessed within the class based component because it is react property 
---------------------------------------------------------
CLICK EVENT : If you use parenthesis () in the click event in the component , by default react will fire the event 
--> as part of DOM rendering instead () , we just have to assign a reference of method as shown below 
<button onClick={this.clickEventName}></button>
but not like 
<button onClick={this.clickEventName()}></button>

---------------------------------------------------
@@@@ RADIUM @@@@@
Radium: Popular JS library for ReactJS to write in line styling with psedo selector and media queries
--> we have to wrap a entite App component inside the <StyleRoot> component, if we planned to use media queries and keyprames through inline styling 

---------------------------------------------------
@@@ CSS MODULES @@@
--> To alter "react-scripts" workflow builder configuration, we have to run the following command 
-->npm run eject



# REACT INFO (*HTML on Javscript*)

## **COMPONENTS**
+ React has two types of components 
    + ### **Functional Components(Presentational Component):** which is stateless 
    ```
    const cmp = () => { return <div>some JSX</div> }
    ```
    1. In functional components, use directly props(*for example props.name, props.age,*)
    2. This component does not manage the states
    + ### **Class Based Components(Container Component):** which also reffered as *Containers*, smart of stateful components 
    1. In class based components, if you are tried to access the props, use (*this.props*) syntax
    2. We can convert class based components to functional components using **React Hooks**
    3. [COMPARE_CLASS_BASED_FUNCTIONAL_BASE](./materials/class-based-functional-comparrison.PNG)
    + ### **PROPS and STATES**
        1. props and states are the **core concepts** of React and by changing or modifying both, trigget React will re-render the entire component and potentially update the DOM in the browser 
        2. **props** will allow to pass a data from parent (wrapped) component to its(embedded) child component 
        3. **state** is used to change the component. Changes to state also trigget an UI update.
        4. **Update/Mutate** state: DO NOT use following way to update/mutate the state : this.state.persons[1].name ='Vittal Kamkar' instead use **setState** method 
    + ### **REACT HOOKS** : 
        1. We can convert class based components to functional components
        2. All react hooks start with **use** keyword for example useState
    ----------------------------------------------------------------------------------------
+ ### **CLICK, [ANY EVENTS](https://reactjs.org/docs/events.html#supported-events)**, should use parenthesis , while calling click or any handlers, if use the parenthesis , the handler method will get trigger while rendering the component.
```
    <buttton onClick={this.clickEventHandler}>CLICK ME </button>

    this.clickEventHandler= ()=>{
        //write some code
    }
```
+ We can define the components with statefull and stateless 
    1. Statefull components (smart,container)
    2. Stateless components (presentetional,dump components, functional components)
+ ### **PASS DATA** Use this.bind method to pass the value from event handler to handler method as shown below 
```
<button onCLick={this.clickEventHandler.bind(this,'arguments')}>CLICK ME</button>

this.clickEventHandler= (args)=>{
    console.log(args);
}
```

+ **UPDATE the state of the component without mutating the original state**
+ Each component is required a unique if the components are generated by iterating the data in array loop to efficient usage of React **VIRTUAL DOM**

+ ### **[RADIUM](https://github.com/FormidableLabs/radium)** with radium we can write inline styles (psedo CSS and media queries)

+ ### **[CSS MODULES](https://github.com/css-modules/css-modules)** 
    + [How it works](./materials/css-modules-learning-card.pdf)
    + From this CSS classes we can apply CSS classes to scope to the component(by enabling this CSS module through webpack it created unique CSS classes)
    + To define global classes, you can use following syntax
    ```
    :global .Post { ... } 

    <div className="Post">
    </div>
    ```
+ ### **[ERROR BOUNDARY](https://reactjs.org/docs/error-boundaries.html)**
    + We can wrap the any specific component with ErrorBonday component if and only iff,  we sure that wrapped component should throw an error for sure on some circumstances 

+ ### **CONTAINERS (inside codebase container folder)**
    + Through container component,  we can manages the states and manipulates the state

### REACT MEMO
    + Good practice to wrap functional component into React.memo(componentName) to increase the performance by avoiding un necessary re-rendering process



## COMPONENT LIFECYCLE HOOKS(ONLY AVIALBLE IN class-based-components)
+ [Component Lifecycle - Creation Flow](./materils/lifecycle-creation-learning-card.pdf)
+ [Component Lifecycle - Update Flow](./materils/lifecycle-update-external-learning-card.pdf)
+ Following are the component life cycle hooks
    + **constructor(props)**
        + this is not react life cycle, instead it is ES6 feature
        + **DO's:** 
            + set some initial states and do some initial set up of component 
        + **DONT's:** 
            + do not make HTTP request
            + setting local storage
            + sendng some analytics to google
    + **getDerviedStateFromProps()**
        + **DO's**
           + whenever props changed, if we want to synch then we can do it in this method
           + If props changed and if we want to update the internal state of the component 
           + Will not use this method very frequently in the real world 
        + **DONT's:** 
           + Dont send HTTP request
    + **render()**
        Post this method renders, then child component of this component will get render
        + **DO's**
            + this method can be used to render HTML and prepare the data as you needed layout the view
            + this method returns the JSX code
        + **DONT's:** 
            + Do not make HTTP request 
            + Do not set up any timer, or any async call 

    + **componentDidMount()**
        + Post render(), executes then this method will get executes 
        + **DO's**
            + Can make HTTP request 
            + We can use this method very frequently 
        + **DONT's:** 
            + Should not update the state of the component here or dont call setState method here
    + **getSnapshotBeforeUpdate(beforeProps,beforeState)**
        + This is not that niche component to use 
        + **DO's**
            + Which returns the snapshot object(user state) and which we can configure 
            + Use it for last minute DOM operations 
            + Used, when getting current scroll position 
            + We can save some state before component update
    + **componentDidCatch()**
    + **componentWillUnmount()**
        + Rarely use this method 
        + Used when to clean up the code once everything finished to deleted from the DOM 
        + If component get removed or deleted then this method get invokes 
    
    + **shouldComponentUpdate(nextProps, nextState)**
        +Should allow us cancel the updating state process 
        + **DO's**
            + we can validate whether react continue to render or not 
            + We can improve the performance of tha app 
            + We should use this carefully 
            + It prevents unnecessary updating the component 
    + **componentDidUpdate()**
        + Executes, once the update of component is finished 
        + can make HTTP request 
        + We can update the state of the component using setState
        
## [HOW REACT UPDATES THE DOM](./materials/how-react-updates-the-DOM.png)

## REACT HOOKS
+ useStates(): this can bes used to update the states in the class based component 
+ useEffect(): This can be used with functional or representational component implement,component life cycle hooks
    + We can send HTTP request in this block 

## HOC(Higher Order Component) or React.Fragment
+ If we want to return a multiple Adjecent element from render method and entrire JX code should wrap insude the Aux or HOC component 
+ Built in HOC is available from React i.e **React.Fragment**

## Ref
+ We can create reference for any JSX or HTML elements
+ this is to create the reference of the element 
+ this will help to invoke child component from parent component 

## Context API
+ Conext API is used when you have long chain of props passing from component to component component 
+ If you want to pass props from one component to another component by-passing props from some middle chained components 
+ Directly passing data from A component to D component by skipping B and C component 
+ This API is used pass/manage the data across the all components 
+ INSTEAD we can use REDUX for data flow 

## STATIC properties 
+ static based types are accessed outside of the class/or component without instantiating the class 

## PURE COMPONENTS:

--------------------------------------------------------------------------------------
## REACTJS BEST PRACTICES 
+ Use as many as functional components, to avoid state management issues 
+ Manage and manipulates the states of the component through container components which are created from Class Based Components design 
+ Good practice to wrap functional component into **React.memo(componentName)** to increase the performance by avoiding un necessary re-rendering process
+ Good practice to use **shouldComponentUpdate()** life cycle hook for class based component to avoid un necessary re-rendering process
+ **PureComponent**, is checked the props changed or not to re-render the component(here is no need use **shouldComponentUpdate()** life cycle hook)

## IMPORTANT LINKS 
+ [ReactJS Routing ](https://reacttraining.com/react-router/web/example/basic)


