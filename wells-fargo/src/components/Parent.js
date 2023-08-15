import React, {Component} from 'react';
import Child from "./Child";
import Demo from "./Demo";

{/* 

What is Props?
	Props are the short name for properties and are immutable.
	Any information that gets passed from one component to another is known as ‘props’.
	Props are passed to components via HTML attributes.
	The component receives the argument as a props object.
	To access that information we have to use the JSX expression this.props.
*/}

export default class Parent extends Component {
    render(){
        return(
            <div>
                <h1>I am Parent Component</h1>
                <Child Title="I am a text from Parent Component"></Child>
                <Demo Title="I am a text from Functional Component"></Demo>
            </div>
        );
    }
}