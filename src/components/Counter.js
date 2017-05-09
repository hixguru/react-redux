
import React, { PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => (
  <button
    className="Counter"
    onClick={onIncrement}
    onContextMenu={
      (e) => {
        e.preventDefault();
        onDecrement();
      }
    }
    onDoubleClick={onSetColor}
    style={{ backgroundColor: color }}
  >
    {number}
  </button>
);

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
