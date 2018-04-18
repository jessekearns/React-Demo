import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return(
            <li>
                <h3>{this.props.index}. {this.props.title}</h3>
                <img src={this.props.img} width="200px" />
                <p>{this.props.description}</p>
            </li>
        )
    }
}

export default Dog;