// MODULE DEPENDENCIES
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import * as actions from '../actions';

// STYLE
import './Counter.css';

class Counter extends Component {
  onContextMenu(e) {
    e.preventDefault();
    this.props.onDecrement();
  }

  render() {
    const { number, color, onIncrement, onSetColor } = this.props;

    return (
      <button
        className="counter-container"
        onClick={onIncrement}
        onContextMenu={e => this.onContextMenu(e)}
        onDoubleClick={onSetColor}
        style={{ backgroundColor: color }}
      >
        {number}
      </button>
    );
  }
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onIncrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

const stateToProps = state => ({
  color: state.color,
  number: state.number,
});

const dispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = 'black';
    dispatch(actions.setColor(color));
  },
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Counter);
