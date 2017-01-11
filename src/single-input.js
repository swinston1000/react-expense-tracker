import React from 'react';

// class SingleInput extends React.Component {
//     render() {
//         return (
//             <div>
//                 <label>{this.props.title}</label> 
//                 <input type={ this.props.inputType }
//                     value={ this.props.content }
//                     onChange={ this.props.controlFunc }[p]
//                     placeholder={this.props.placeholder} />
//             </div>
//         );
//     }
// }

// function SingleInput(props) {
//     return (
//         <div>
//             <label>{props.title}</label> 
//             <input type={ props.inputType }
//                 value={ props.content }
//                 onChange={ props.controlFunc }
//                 placeholder={props.placeholder} />
//         </div>
//     );
// }

const SingleInput = (props) => (
    <div>
        <label>{props.title}</label> 
        <input type={ props.inputType }
            value={ props.content }
            onChange={ props.controlFunc }
            placeholder={props.placeholder} />
    </div>
);

SingleInput.propTypes = {
    inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
    title: React.PropTypes.string.isRequired,
    controlFunc: React.PropTypes.func.isRequired,
    content: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
    placeholder: React.PropTypes.string,
};

export default SingleInput;
