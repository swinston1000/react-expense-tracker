import React, { Component } from 'react';

class Expense extends Component {
    render() {
        return (
            <div>${this.props.amt}, {this.props.cat}, {this.props.descr}</div>
        );
    }
}

export default Expense;
