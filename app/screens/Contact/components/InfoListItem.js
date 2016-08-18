import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';

export default React.createClass({
  propTypes: {
    value: PropTypes.string,
    icon: PropTypes.string,
  },

  getInitialState() {
    return {
      value: null,
      icon: null,
    };
  },

  render() {
    return (
      <li className="list-group-item">
        <FontAwesome name={this.props.icon} />
        {this.props.value}
      </li>
    );
  },
});
