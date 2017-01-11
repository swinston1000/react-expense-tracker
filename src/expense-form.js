import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {

    constructor(props) {
        super(props);
        this.state = { amt: '', cat: '', descr: '' };
        this.updateAmount = this.updateAmount.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    updateCategory(event) {
        this.setState({ cat: event.target.value });
    }

    updateDescription(event) {
        this.setState({ descr: event.target.value });
    }

    updateAmount(event) {
        this.setState({ amt: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.addExpense(this.state);
        this.setState({ amt: '', cat: '', descr: '' });
    }

    render() {
        return (
            <div>
                <SingleInput title="Amount"  inputType="number" content={this.state.amt} controlFunc={this.updateAmount}/>
                <SingleInput title="Category" inputType="text" content={this.state.cat} controlFunc={this.updateCategory}/>
                <SingleInput title="Description"  inputType="text" content={this.state.descr} controlFunc={this.updateDescription}/>
                <button type="button" onClick={this.handleSubmit}>Add Expense</button>
            </div>
        );
    }
}

ExpenseForm.propTypes = {
    addExpense: React.PropTypes.func.isRequired
};


export default ExpenseForm;
