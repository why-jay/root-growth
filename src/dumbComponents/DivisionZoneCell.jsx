require('./DivisionZoneCell.scss');

const Cell = require('./Cell.jsx');
const utils = require('../utils.jsx');

const React = require('react');

/**
 * A Cell with a red background-color.
 */
class DivisionZoneCell extends utils.PureRenderComponent {
  static propTypes = {
    height: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <Cell
        backgroundColor="red"
        height = {this.props.height}
        />
    );
  }
}

module.exports = DivisionZoneCell;
