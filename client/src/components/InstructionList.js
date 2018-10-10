import React, {Component} from 'react';
import './styles/InstructionList.css';

class InstructionList extends Component {

  renderInstructions = (props) => {
    if(props.instructions)
      return (
      <ul className='list-group list-group-flush'>
        {
          props.instructions.map((instruction, index) =>
          instruction === '' ? null :
          <li key={index} className='list-group-item'>{index + 1}) {instruction}</li>)
        }
      </ul>);
    return null;
  }
  render(){
    return(
      <div className='instruction-list'>
        <h2>Directions: </h2>
        {this.renderInstructions(this.props)}
      </div>
    );
  }
}

export default InstructionList;
