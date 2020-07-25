import React, { Component } from 'react';


export default class Filho extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}