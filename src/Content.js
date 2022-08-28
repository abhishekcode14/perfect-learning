import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <h2 className="ContentHeading">{this.props.name}</h2>
                <div className="Content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Content;
