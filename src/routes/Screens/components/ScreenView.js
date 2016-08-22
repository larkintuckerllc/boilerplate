import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const screenSource = {
  beginDrag(props) {
    return props.screen;
  }
};
function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}
const screenTarget = {
  drop(props, monitor) {
    const { screensPut, screen: targetScreen } = props;
    const sourceScreen = monitor.getItem();
    if (sourceScreen.order > targetScreen.order) {
      screensPut(sourceScreen.id, sourceScreen.description,
        targetScreen.order, false);
    }
    if (sourceScreen.order + 1 < targetScreen.order) {
      screensPut(sourceScreen.id, sourceScreen.description,
        targetScreen.order - 1, true);
    }
  }
};
function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    sourceScreen: monitor.getItem()
  };
}
class ScreenView extends Component {
  render() {
    const { screen, connectDragSource,
      isDragging, connectDropTarget, isOver,
      isPutting, putting, sourceScreen } = this.props;
    return connectDropTarget(connectDragSource(
      <div key={screen.id}
      style={{
        height: '60px',
        border: 'solid black 1px',
        opacity:
          isDragging ||
            (isPutting && putting.screen.id === screen.id)
          ? 0.5 : 1,
        paddingTop: isOver &&
          (sourceScreen.id !== screen.id &&
            sourceScreen.order + 1 !== screen.order ) ||
          (isPutting && ((!putting.down && putting.screen.order === screen.order) ||
          (putting.down && putting.screen.order + 1 === screen.order)))
        ? '60px' : '0px'
      }}>
        {screen.description}
      </div>
    ));
  }
}
ScreenView.propTypes = {
  screen: PropTypes.object.isRequired,
  screensPut: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  isPutting: PropTypes.bool.isRequired,
  putting: PropTypes.object,
  sourceScreen: PropTypes.object
}
const ScreenViewSource =  DragSource('screen', screenSource, collectSource)(ScreenView);
export default DropTarget('screen', screenTarget, collectTarget)(ScreenViewSource);
