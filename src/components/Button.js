import React, { Component } from 'react';

class Button extends Component {
    render() {
        const {name} = this.props;
        return (
            <div className='button' onClick={this.props.handleButtonClick}>
                {name}
            </div>
        );
    }
}

export default Button;