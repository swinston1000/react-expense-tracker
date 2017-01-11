import React, { Component } from 'react';
import ExepenseForm from './expense-form';
import ExpenseDisplay from './expense-list';
import SingleInput from './single-input';
import Select from './select';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            filters: { description: '', amount: '', category: '' }
        };
        this.addExpense = this.addExpense.bind(this);
        this.updateDescriptionFilter = this.updateDescriptionFilter.bind(this);
        this.updateAmountFilter = this.updateAmountFilter.bind(this);
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);

    }

    updateDescriptionFilter(event) {
        var filters = Object.assign({}, this.state.filters); //comment me
        // Object.assign does a shallow copy to prevents state modification
        // to understand why we use a shallow copy comment the line above AND uncomment the two commented lines below
        // and then notice that 'this.state.filters' has been modified before the call to setState
        // this is bad! now re-comment the line below and uncomment the line above
        // notice this time that our assignment does not effect this.state.filters. Much better!
        // remember when you are finished to re-comment the "debugger" line!

        // var filters = this.state.filters;  //uncomment me
        filters.description = event.target.value;
        // debugger; //uncomment me
        this.setState({ filters: filters });
    }

    updateAmountFilter(event) {
        var filters = Object.assign({}, this.state.filters);
        filters.amount = event.target.value;
        this.setState({ filters: filters });
    }

    updateCategoryFilter(event) {
        var filters = Object.assign({}, this.state.filters);
        filters.category = event.target.value;
        this.setState({ filters: filters });
    }

    addExpense(newExpense) {
        this.setState({ expenses: this.state.expenses.concat(newExpense) });
    }

    render() {

        const _unique = (list) => {
            return [...new Set(list)];
        };

        const filters = this.state.filters;
        const expenses = this.state.expenses;
        const categories = _unique(expenses.map(function(e) {
            return e.cat;
        }));

        return (
            <div className="App">
                <SingleInput 
                    title="Description Filter" 
                    inputType="text" 
                    content={filters.description}
                    controlFunc={this.updateDescriptionFilter}/>
                <SingleInput 
                    title="Amount Filter" 
                    inputType="number" 
                    content={filters.amount}
                    controlFunc={this.updateAmountFilter}/>
                <Select 
                    name="idg"
                    placeholder="Category Filter" 
                    selectedOption={filters.category}
                    controlFunc={this.updateCategoryFilter}
                    options={categories}/>
                <ExepenseForm addExpense={this.addExpense}/>
                <ExpenseDisplay filters={filters} expenses={expenses}/>
            </div>
        );
    }
}


export default App;
