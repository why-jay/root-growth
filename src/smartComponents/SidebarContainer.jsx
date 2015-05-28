const cursors = require('../stateCursors.jsx');
const Sidebar = require('../dumbComponents/Sidebar.jsx');
const utils = require('../utils.jsx');

const baobab = require('baobab-react/decorators');

/**
 * A wrapper around Sidebar that provides it with the state cursors it needs.
 */
@baobab.branch({
  cursors: {
    virtualHourElapsePerVisualSec: cursors.virtualHourElapsePerVisualSec,
    virtualHoursElapsed: cursors.virtualHoursElapsed
  }
})
class SidebarContainer extends utils.PureRenderComponent {
  render() {
    return (
      <Sidebar
        virtualHoursElapsed={this.props.virtualHoursElapsed}
        configurableVals={this.props.virtualHourElapsePerVisualSec}
        />
    );
  }
}

module.exports = SidebarContainer;
