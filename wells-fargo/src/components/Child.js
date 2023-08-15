import React, {Component} from 'react';
export default class Child extends Component {
    render(){
        return(
            <div>
                <h1>I am Child Component</h1>
                {/* Title property is accessed using this.props.Title */}
                <h3>{this.props.Title}</h3>
            </div>
        );
    }
}