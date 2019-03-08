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

### COMPONENTS 
+ React has two types of components 
    + ## **Functional Components:** which is stateless 
    ```
    const cmp = () => { return <div>some JSX</div> }
    ```
    1.  In functional components, use directly props(*for example props.name, props.age,*)
    ----------------------------------------------------------------------------------------
    + ## **Class Based Components:** which also reffered as *Containers*, smart of stateful components 
    1.  In class based components, if you are tried to access the props, use (*this.props*) syntax
    2.  We can convert class based components to functional components using **React Hooks**
    ----------------------------------------------------------------------------------------
    + ## **PROPS and STATES**
        1. props and states are the **core concepts** of React and by changing or modifying both, trigget React will re-render the entire component and potentially update the DOM in the browser 
        2. **props** will allow to pass a data from parent (wrapped) component to its(embedded) child component 
        3. **state** is used to change the component. Changes to state also trigget an UI update.
        4. **Update/Mutate** state: DO NOT use following way to update/mutate the state : this.state.persons[1].name ='Vittal Kamkar' instead use **setState** method 
    + ## **REACT HOOKS** : 
        1. We can convert class based components to functional components
        2. All react hooks start with **use** keyword for example useState
    ----------------------------------------------------------------------------------------
+ ## **CLICK, [ANY EVENTS](https://reactjs.org/docs/events.html#supported-events)**, should use parenthesis , while calling click or any handlers, if use the parenthesis , the handler method will get trigger while rendering the component.
```
    <buttton onClick={this.clickEventHandler}>CLICK ME </button>

    this.clickEventHandler= ()=>{
        //write some code
    }
```
+ We can define the components with statefull and stateless 
    1. Statefull components (smart,container)
    2. Stateless components (presentetional,dump components, functional components)
+ **PASS DATA** Use this.bind method to pass the value from event handler to handler method as shown below 
```
<button onCLick={this.clickEventHandler.bind(this,'arguments')}>CLICK ME</button>

this.clickEventHandler= (args)=>{
    console.log(args);
}
```

+ **UPDATE the state of the component without mutating the original state**
+ Each component is required a unique if the components are generated by iterating the data in array loop to efficient usage of React **VIRTUAL DOM**

+ **[RADIUM](https://github.com/FormidableLabs/radium)** with radium we can write inline styles (psedo CSS and media queries)

+ **[CSS MODULES](https://github.com/css-modules/css-modules)** 
    + [How it works](./materials/css-modules-learning-card.pdf)
    + From this CSS classes we can apply CSS classes to scope to the component(by enabling this CSS module through webpack it created unique CSS classes)
    + To define global classes, you can use following syntax
    ```
    :global .Post { ... } 

    <div className="Post">
    </div>
    ```
+ **[ERROR BOUNDARY](https://reactjs.org/docs/error-boundaries.html)**
    + We can wrap the any specific component with ErrorBonday component if and only iff,  we sure that wrapped component should throw an error for sure on some circumstances 



