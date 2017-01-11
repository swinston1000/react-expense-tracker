import React, { Component } from 'react';
import Expense from './expense';

class ExepenseList extends Component {

    renderExpenses() {

        let { description, amount, category } = this.props.filters;

        let filteredArray = this.props.expenses
            .filter(expense => expense.descr.includes(description))
            .filter(expense => amount ? amount * 0.9 <= expense.amt && expense.amt <= amount * 1.1 : true)
            .filter(expense => category ? expense.cat === category : true);

        return filteredArray.map((expense, index) => <Expense key={index} {...expense} />);
    }

    render() {
        return (
            <div>
                {this.renderExpenses()}
            </div>
        );
    }
}

ExepenseList.propTypes = {
    expenses: React.PropTypes.arrayOf(React.PropTypes.shape(Expense.PropTypes)).isRequired,
    filters: React.PropTypes.object
};


export default ExepenseList;
