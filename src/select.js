import React from 'react';

const Select = (props) => (
    <div className="form-group">
        <select name={props.name} value={props.selectedOption} onChange={props.controlFunc}>
            <option value="">{props.placeholder}</option>
            {props.options.map(opt => <option key={opt} value={opt}> {opt} </option>)}
        </select>
    </div>
);

Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
};

export default Select;
